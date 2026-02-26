#!/usr/bin/env python3
"""
Process FCC BDC data for GoNetSpeed (Future Fiber FinCo, provider_id 131378)
Aggregates BSLs to census block group level for map shading.
Then fetches block group polygon boundaries from TIGERweb REST API.
Outputs: block_group_coverage.json (block group stats + polygon coords)
"""

import csv
import json
import os
import sys
import urllib.request
import urllib.parse
import time
from collections import defaultdict

# State FIPS codes and names
STATE_FIPS = {
    '09': 'CT', '23': 'ME', '25': 'MA',
    '36': 'NY', '42': 'PA', '50': 'VT'
}

# County FIPS to name mapping (will be populated from data)
COUNTY_NAMES = {
    # CT counties
    '09001': 'Fairfield', '09003': 'Hartford', '09005': 'Litchfield',
    '09007': 'Middlesex', '09009': 'New Haven', '09011': 'New London',
    '09013': 'Tolland', '09015': 'Windham',
    # ME counties
    '23001': 'Androscoggin', '23003': 'Aroostook', '23005': 'Cumberland',
    '23007': 'Franklin', '23009': 'Hancock', '23011': 'Kennebec',
    '23013': 'Knox', '23015': 'Lincoln', '23017': 'Oxford',
    '23019': 'Penobscot', '23021': 'Piscataquis', '23023': 'Sagadahoc',
    '23025': 'Somerset', '23027': 'Waldo', '23029': 'Washington',
    '23031': 'York',
    # MA counties
    '25001': 'Barnstable', '25003': 'Berkshire', '25005': 'Bristol',
    '25007': 'Dukes', '25009': 'Essex', '25011': 'Franklin',
    '25013': 'Hampden', '25015': 'Hampshire', '25017': 'Middlesex',
    '25019': 'Nantucket', '25021': 'Norfolk', '25023': 'Plymouth',
    '25025': 'Suffolk', '25027': 'Worcester',
    # NY counties (key ones in GoNetSpeed footprint)
    '36001': 'Albany', '36003': 'Allegany', '36005': 'Bronx',
    '36007': 'Broome', '36009': 'Cattaraugus', '36011': 'Cayuga',
    '36013': 'Chautauqua', '36015': 'Chemung', '36017': 'Chenango',
    '36019': 'Clinton', '36021': 'Columbia', '36023': 'Cortland',
    '36025': 'Delaware', '36027': 'Dutchess', '36029': 'Erie',
    '36031': 'Essex', '36033': 'Franklin', '36035': 'Fulton',
    '36037': 'Genesee', '36039': 'Greene', '36041': 'Hamilton',
    '36043': 'Herkimer', '36045': 'Jefferson', '36047': 'Kings',
    '36049': 'Lewis', '36051': 'Livingston', '36053': 'Madison',
    '36055': 'Monroe', '36057': 'Montgomery', '36059': 'Nassau',
    '36061': 'New York', '36063': 'Niagara', '36065': 'Oneida',
    '36067': 'Onondaga', '36069': 'Ontario', '36071': 'Orange',
    '36073': 'Orleans', '36075': 'Oswego', '36077': 'Otsego',
    '36079': 'Putnam', '36081': 'Queens', '36083': 'Rensselaer',
    '36085': 'Richmond', '36087': 'Rockland', '36089': 'St. Lawrence',
    '36091': 'Saratoga', '36093': 'Schenectady', '36095': 'Schoharie',
    '36097': 'Schuyler', '36099': 'Seneca', '36101': 'Steuben',
    '36103': 'Suffolk', '36105': 'Sullivan', '36107': 'Tioga',
    '36109': 'Tompkins', '36111': 'Ulster', '36113': 'Warren',
    '36115': 'Washington', '36117': 'Wayne', '36119': 'Westchester',
    '36121': 'Wyoming', '36123': 'Yates',
    # PA counties
    '42001': 'Adams', '42003': 'Allegheny', '42005': 'Armstrong',
    '42007': 'Beaver', '42009': 'Bedford', '42011': 'Berks',
    '42013': 'Blair', '42015': 'Bradford', '42017': 'Bucks',
    '42019': 'Butler', '42021': 'Cambria', '42023': 'Cameron',
    '42025': 'Carbon', '42027': 'Centre', '42029': 'Chester',
    '42031': 'Clarion', '42033': 'Clearfield', '42035': 'Clinton',
    '42037': 'Columbia', '42039': 'Crawford', '42041': 'Cumberland',
    '42043': 'Dauphin', '42045': 'Delaware', '42047': 'Elk',
    '42049': 'Erie', '42051': 'Fayette', '42053': 'Forest',
    '42055': 'Franklin', '42057': 'Fulton', '42059': 'Greene',
    '42061': 'Huntingdon', '42063': 'Indiana', '42065': 'Jefferson',
    '42067': 'Juniata', '42069': 'Lackawanna', '42071': 'Lancaster',
    '42073': 'Lawrence', '42075': 'Lebanon', '42077': 'Lehigh',
    '42079': 'Luzerne', '42081': 'Lycoming', '42083': 'McKean',
    '42085': 'Mercer', '42087': 'Mifflin', '42089': 'Monroe',
    '42091': 'Montgomery', '42093': 'Montour', '42095': 'Northampton',
    '42097': 'Northumberland', '42099': 'Perry', '42101': 'Philadelphia',
    '42103': 'Pike', '42105': 'Potter', '42107': 'Schuylkill',
    '42109': 'Snyder', '42111': 'Somerset', '42113': 'Sullivan',
    '42115': 'Susquehanna', '42117': 'Tioga', '42119': 'Union',
    '42121': 'Venango', '42123': 'Warren', '42125': 'Washington',
    '42127': 'Wayne', '42129': 'Westmoreland', '42131': 'Wyoming',
    '42133': 'York',
    # VT counties
    '50001': 'Addison', '50003': 'Bennington', '50005': 'Caledonia',
    '50007': 'Chittenden', '50009': 'Essex', '50011': 'Franklin',
    '50013': 'Grand Isle', '50015': 'Lamoille', '50017': 'Orange',
    '50019': 'Orleans', '50021': 'Rutland', '50023': 'Washington',
    '50025': 'Windham', '50027': 'Windsor',
}


def process_csv_files():
    """Read all 6 state CSVs and aggregate by block group."""
    data_dir = os.path.dirname(os.path.abspath(__file__))

    # block_group_id -> {bsls, blocks, state, county, res_bsls, bus_bsls}
    block_groups = defaultdict(lambda: {
        'bsls': 0,
        'blocks': set(),
        'res_bsls': 0,
        'bus_bsls': 0,
    })

    state_totals = defaultdict(lambda: {'bsls': 0, 'block_groups': set(), 'blocks': set(), 'counties': set()})

    total_bsls = 0

    for state_fips, state_abbr in STATE_FIPS.items():
        csv_path = os.path.join(data_dir, f'bdc_{state_fips}_131378_fixed_broadband_J25_22nov2025.csv')
        if not os.path.exists(csv_path):
            print(f"  SKIP: {csv_path} not found")
            continue

        count = 0
        with open(csv_path, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                block_geoid = row['block_geoid']
                bg_id = block_geoid[:12]  # First 12 digits = block group
                county_fips = block_geoid[:5]
                biz_res = row.get('business_residential_code', 'R')

                block_groups[bg_id]['bsls'] += 1
                block_groups[bg_id]['blocks'].add(block_geoid)

                if biz_res == 'R':
                    block_groups[bg_id]['res_bsls'] += 1
                else:
                    block_groups[bg_id]['bus_bsls'] += 1

                state_totals[state_abbr]['bsls'] += 1
                state_totals[state_abbr]['block_groups'].add(bg_id)
                state_totals[state_abbr]['blocks'].add(block_geoid)
                state_totals[state_abbr]['counties'].add(county_fips)
                count += 1

        total_bsls += count
        print(f"  {state_abbr}: {count:,} BSLs, {len(state_totals[state_abbr]['block_groups']):,} block groups, {len(state_totals[state_abbr]['counties'])} counties")

    print(f"\n  TOTAL: {total_bsls:,} BSLs across {len(block_groups):,} block groups")

    # Convert sets to counts for JSON serialization
    result = {}
    for bg_id, data in block_groups.items():
        state_fips = bg_id[:2]
        county_fips = bg_id[:5]
        tract_id = bg_id[:11]

        result[bg_id] = {
            'bsls': data['bsls'],
            'blocks': len(data['blocks']),
            'res': data['res_bsls'],
            'bus': data['bus_bsls'],
            'state': STATE_FIPS.get(state_fips, state_fips),
            'county': COUNTY_NAMES.get(county_fips, county_fips),
            'countyFips': county_fips,
            'tractId': tract_id,
        }

    # Print state summary
    print("\n  === State Summary ===")
    for state_abbr in sorted(state_totals.keys()):
        st = state_totals[state_abbr]
        counties = [COUNTY_NAMES.get(c, c) for c in sorted(st['counties'])]
        print(f"  {state_abbr}: {st['bsls']:>8,} BSLs | {len(st['block_groups']):>5,} BGs | {len(st['blocks']):>6,} blocks | Counties: {', '.join(counties)}")

    # Print top 20 block groups by BSL count
    print("\n  === Top 20 Block Groups ===")
    top_bgs = sorted(result.items(), key=lambda x: x[1]['bsls'], reverse=True)[:20]
    for bg_id, data in top_bgs:
        print(f"  {bg_id}: {data['bsls']:>5,} BSLs ({data['res']:>4,} res, {data['bus']:>4,} bus) | {data['blocks']} blocks | {data['county']}, {data['state']}")

    return result, state_totals


def fetch_block_group_polygons(block_groups_data):
    """
    Fetch block group polygon boundaries from TIGERweb REST API.
    Layer 8 = Census Block Groups (2020 Census)
    Strategy: Query all BGs in each county, filter to our set in Python.
    Uses POST to avoid URL length limits.
    """
    # TIGERweb ArcGIS REST service - Layer 8 = Census Block Groups
    base_url = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/8/query"

    # Group block groups by county for efficient querying
    counties = defaultdict(set)
    for bg_id in block_groups_data.keys():
        county_fips = bg_id[:5]
        counties[county_fips].add(bg_id)

    print(f"\n  Fetching polygons for {len(block_groups_data)} block groups across {len(counties)} counties...")
    print(f"  Using TIGERweb Layer 8 (Census Block Groups 2020) via POST...")

    polygons = {}
    failed_counties = []

    for i, (county_fips, bg_ids) in enumerate(sorted(counties.items())):
        state_fips = county_fips[:2]
        county_code = county_fips[2:]
        county_name = COUNTY_NAMES.get(county_fips, county_fips)
        state_abbr = STATE_FIPS.get(state_fips, state_fips)

        # Query ALL block groups in this county, filter in Python
        params = urllib.parse.urlencode({
            'where': f"STATE='{state_fips}' AND COUNTY='{county_code}'",
            'outFields': 'GEOID,AREALAND,AREAWATER,HU100,POP100',
            'outSR': '4326',
            'f': 'geojson',
            'returnGeometry': 'true',
        }).encode()

        try:
            req = urllib.request.Request(
                base_url,
                data=params,
                headers={
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                }
            )

            with urllib.request.urlopen(req, timeout=60) as resp:
                data = json.loads(resp.read().decode('utf-8'))

            if 'features' in data:
                matched = 0
                for feature in data['features']:
                    geoid = feature['properties']['GEOID']
                    if geoid in bg_ids:
                        polygons[geoid] = {
                            'geometry': feature['geometry'],
                            'areaLand': feature['properties'].get('AREALAND', 0),
                            'areaWater': feature['properties'].get('AREAWATER', 0),
                            'hu100': feature['properties'].get('HU100', 0),
                            'pop100': feature['properties'].get('POP100', 0),
                        }
                        matched += 1

                total_in_county = len(data['features'])
                expected = len(bg_ids)
                status = "OK" if matched == expected else f"PARTIAL ({matched}/{expected})"
                print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: {matched}/{total_in_county} matched {status}")
            else:
                error = data.get('error', {}).get('message', 'Unknown error')
                print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: ERROR - {error}")
                failed_counties.append(county_fips)

        except Exception as e:
            print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: FAILED - {str(e)[:80]}")
            failed_counties.append(county_fips)

        # Rate limit: be nice to the Census API
        if i > 0 and i % 10 == 0:
            time.sleep(0.3)

    print(f"\n  Polygons fetched: {len(polygons)}/{len(block_groups_data)} ({len(polygons)*100//len(block_groups_data)}%)")
    if failed_counties:
        print(f"  Failed counties: {', '.join(failed_counties)}")

    return polygons, failed_counties


def simplify_coords(coords, tolerance=0.002):
    """
    Distance-based vertex decimation for polygon coordinates.
    tolerance=0.002 (~220m) good for zoom 7-10 block group shading.
    """
    if len(coords) <= 4:
        return [[round(c[0], 4), round(c[1], 4)] for c in coords]

    simplified = [coords[0]]
    for i in range(1, len(coords)):
        dx = coords[i][0] - simplified[-1][0]
        dy = coords[i][1] - simplified[-1][1]
        if (dx * dx + dy * dy) > (tolerance * tolerance):
            simplified.append(coords[i])

    if simplified[-1] != coords[-1]:
        simplified.append(coords[-1])

    # 4 decimal places = ~11m precision
    return [[round(c[0], 4), round(c[1], 4)] for c in simplified]


def generate_js_output(block_groups_data, polygons):
    """Generate JavaScript data file for the map tool."""

    # Build the combined data structure
    features = []
    missing_polygons = 0

    for bg_id, bg_data in sorted(block_groups_data.items()):
        if bg_id not in polygons:
            missing_polygons += 1
            continue

        poly = polygons[bg_id]
        geom = poly['geometry']

        # Simplify polygon coordinates to reduce file size
        if geom['type'] == 'Polygon':
            simplified_rings = []
            for ring in geom['coordinates']:
                simplified_rings.append(simplify_coords(ring))
            geom = {'type': 'Polygon', 'coordinates': simplified_rings}
        elif geom['type'] == 'MultiPolygon':
            simplified_polys = []
            for polygon in geom['coordinates']:
                simplified_rings = []
                for ring in polygon:
                    simplified_rings.append(simplify_coords(ring))
                simplified_polys.append(simplified_rings)
            geom = {'type': 'MultiPolygon', 'coordinates': simplified_polys}

        # Calculate BSL density (BSLs per housing unit gives coverage ratio)
        hu100 = float(poly.get('hu100', 0) or 0)
        pop100 = float(poly.get('pop100', 0) or 0)
        area_land = float(poly.get('areaLand', 0) or 0)
        coverage_pct = round(bg_data['bsls'] / hu100 * 100, 1) if hu100 > 0 else 0

        feature = {
            'type': 'Feature',
            'properties': {
                'id': bg_id,
                'bsls': bg_data['bsls'],
                'blocks': bg_data['blocks'],
                'state': bg_data['state'],
                'county': bg_data['county'],
                'areaLandSqKm': round(area_land / 1e6, 1),
                'hu100': int(hu100),
                'pop100': int(pop100),
                'coveragePct': min(coverage_pct, 100),
            },
            'geometry': geom,
        }
        features.append(feature)

    geojson = {
        'type': 'FeatureCollection',
        'features': features,
    }

    print(f"\n  Output: {len(features)} block groups with polygons ({missing_polygons} missing)")

    # Calculate total file size estimate
    json_str = json.dumps(geojson)
    print(f"  Raw GeoJSON size: {len(json_str) / 1024 / 1024:.1f} MB")

    return geojson


def write_js_file(geojson, output_path):
    """Write the GeoJSON as a JavaScript file for embedding."""

    # Write as JS constant
    js_content = f"""// GoNetSpeed (Future Fiber FinCo, LLC) FCC BDC Coverage Data
// Source: FCC Broadband Data Collection, Jun 2025 filing (published Feb 3, 2026)
// Provider ID: 131378 | FRN: 0026646661
// Technology: 50 (Fiber to the Premises) | Speeds: 1000/1000 Mbps
// Aggregated to census block group level
// Generated: {time.strftime('%Y-%m-%d %H:%M')}
//
// Data: https://broadbandmap.fcc.gov/data-download/fixed
// Verification: https://broadbandmap.fcc.gov/provider-detail/fixed?providers=131378_50_on

const GONETSPEED_BDC_COVERAGE = {json.dumps(geojson, separators=(',', ':'))};
"""

    with open(output_path, 'w') as f:
        f.write(js_content)

    file_size = os.path.getsize(output_path)
    print(f"  Written: {output_path}")
    print(f"  File size: {file_size / 1024 / 1024:.1f} MB")

    return file_size


def write_stats_json(block_groups_data, output_path):
    """Write summary statistics JSON for quick reference."""

    state_stats = defaultdict(lambda: {'bsls': 0, 'blockGroups': 0, 'counties': set()})
    county_stats = defaultdict(lambda: {'bsls': 0, 'blockGroups': 0})

    for bg_id, data in block_groups_data.items():
        st = data['state']
        county = data['county']
        county_fips = data['countyFips']

        state_stats[st]['bsls'] += data['bsls']
        state_stats[st]['blockGroups'] += 1
        state_stats[st]['counties'].add(county)

        county_stats[county_fips]['bsls'] += data['bsls']
        county_stats[county_fips]['blockGroups'] += 1
        county_stats[county_fips]['state'] = st
        county_stats[county_fips]['name'] = county

    # Convert sets
    for st in state_stats:
        state_stats[st]['counties'] = sorted(list(state_stats[st]['counties']))

    stats = {
        'provider': 'GoNetSpeed (Future Fiber FinCo, LLC)',
        'providerId': 131378,
        'filing': 'Jun 2025 (published Feb 3, 2026)',
        'technology': 'Fiber to the Premises (50)',
        'speeds': '1000/1000 Mbps',
        'totalBSLs': sum(d['bsls'] for d in block_groups_data.values()),
        'totalBlockGroups': len(block_groups_data),
        'states': dict(state_stats),
        'topCounties': sorted(
            [{'fips': k, **v} for k, v in county_stats.items()],
            key=lambda x: x['bsls'], reverse=True
        )[:30],
    }

    with open(output_path, 'w') as f:
        json.dump(stats, f, indent=2)

    print(f"  Stats written: {output_path}")


if __name__ == '__main__':
    print("=" * 60)
    print("FCC BDC Processing: GoNetSpeed Block Group Coverage")
    print("=" * 60)

    # Step 1: Process CSVs
    print("\n[1/4] Processing CSV files...")
    block_groups_data, state_totals = process_csv_files()

    # Step 2: Fetch polygons from TIGERweb
    print("\n[2/4] Fetching block group polygons from TIGERweb...")
    polygons, failed = fetch_block_group_polygons(block_groups_data)

    # Retry failed counties once
    if failed:
        print(f"\n  Retrying {len(failed)} failed counties...")
        time.sleep(2)
        retry_bgs = {bg_id: data for bg_id, data in block_groups_data.items() if bg_id[:5] in failed}
        retry_polys, still_failed = fetch_block_group_polygons(retry_bgs)
        polygons.update(retry_polys)
        if still_failed:
            print(f"  Still failed after retry: {', '.join(still_failed)}")

    # Step 3: Generate GeoJSON
    print("\n[3/4] Generating GeoJSON output...")
    geojson = generate_js_output(block_groups_data, polygons)

    # Step 4: Write output files
    print("\n[4/4] Writing output files...")
    data_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(data_dir)

    # Write JS file for map embedding
    js_path = os.path.join(parent_dir, 'gonetspeed_bdc.js')
    write_js_file(geojson, js_path)

    # Write stats JSON
    stats_path = os.path.join(data_dir, 'gonetspeed_stats.json')
    write_stats_json(block_groups_data, stats_path)

    print("\n" + "=" * 60)
    print("DONE! Next steps:")
    print("  1. Add <script src='gonetspeed_bdc.js'></script> to HTML")
    print("  2. Add block group shading layer to Leaflet map")
    print("  3. Add toggle control and popup handler")
    print("=" * 60)
