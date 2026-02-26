#!/usr/bin/env python3
"""
Process FCC BDC data for multiple providers.
Aggregates BSLs to census block group level for map shading.
Fetches block group polygon boundaries from TIGERweb REST API.
Outputs: {provider}_bdc.js per provider (GeoJSON with block group polygons)

Providers:
  - Frontier (130258): CT, NY, PA
  - Consolidated/Fidium (130335): NH, ME, VT, MA, NY, PA
"""

import csv
import json
import os
import sys
import urllib.request
import urllib.parse
import time
from collections import defaultdict

# --- PROVIDER CONFIGURATION ---
PROVIDERS = {
    'frontier': {
        'id': 130258,
        'brand': 'Frontier',
        'display': 'Frontier (now Verizon)',
        'frn': '0029626009',
        'tech_filter': 50,  # Fiber only
        'files': {
            '09': 'bdc_09_130258_fixed_broadband_J25_17feb2026.csv',
            '36': 'bdc_36_130258_fixed_broadband_J25_17feb2026.csv',
            '42': 'bdc_42_130258_fixed_broadband_J25_17feb2026.csv',
        },
        'js_const': 'FRONTIER_BDC_COVERAGE',
        'js_file': 'frontier_bdc.js',
        'color': '#EF4444',  # red
    },
    'fidium': {
        'id': 130335,
        'brand': 'Consolidated Communications',
        'display': 'Fidium Fiber (CCI)',
        'frn': '0007494776',
        'tech_filter': 50,  # Fiber only
        'files': {
            '23': 'bdc_23_130335_fixed_broadband_J25_22nov2025.csv',
            '25': 'bdc_25_130335_fixed_broadband_J25_22nov2025.csv',
            '33': 'bdc_33_130335_fixed_broadband_J25_22nov2025.csv',
            '36': 'bdc_36_130335_fixed_broadband_J25_22nov2025.csv',
            '42': 'bdc_42_130335_fixed_broadband_J25_22nov2025.csv',
            '50': 'bdc_50_130335_fixed_broadband_J25_22nov2025.csv',
        },
        'js_const': 'FIDIUM_BDC_COVERAGE',
        'js_file': 'fidium_bdc.js',
        'color': '#8B5CF6',  # purple
    },
}

# State FIPS codes
STATE_FIPS = {
    '09': 'CT', '23': 'ME', '25': 'MA', '33': 'NH',
    '36': 'NY', '42': 'PA', '50': 'VT'
}

# County FIPS to name mapping
COUNTY_NAMES = {
    # CT
    '09001': 'Fairfield', '09003': 'Hartford', '09005': 'Litchfield',
    '09007': 'Middlesex', '09009': 'New Haven', '09011': 'New London',
    '09013': 'Tolland', '09015': 'Windham',
    # ME
    '23001': 'Androscoggin', '23003': 'Aroostook', '23005': 'Cumberland',
    '23007': 'Franklin', '23009': 'Hancock', '23011': 'Kennebec',
    '23013': 'Knox', '23015': 'Lincoln', '23017': 'Oxford',
    '23019': 'Penobscot', '23021': 'Piscataquis', '23023': 'Sagadahoc',
    '23025': 'Somerset', '23027': 'Waldo', '23029': 'Washington',
    '23031': 'York',
    # MA
    '25001': 'Barnstable', '25003': 'Berkshire', '25005': 'Bristol',
    '25007': 'Dukes', '25009': 'Essex', '25011': 'Franklin',
    '25013': 'Hampden', '25015': 'Hampshire', '25017': 'Middlesex',
    '25019': 'Nantucket', '25021': 'Norfolk', '25023': 'Plymouth',
    '25025': 'Suffolk', '25027': 'Worcester',
    # NH
    '33001': 'Belknap', '33003': 'Carroll', '33005': 'Cheshire',
    '33007': 'Coos', '33009': 'Grafton', '33011': 'Hillsborough',
    '33013': 'Merrimack', '33015': 'Rockingham', '33017': 'Strafford',
    '33019': 'Sullivan',
    # NY
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
    # PA
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
    # VT
    '50001': 'Addison', '50003': 'Bennington', '50005': 'Caledonia',
    '50007': 'Chittenden', '50009': 'Essex', '50011': 'Franklin',
    '50013': 'Grand Isle', '50015': 'Lamoille', '50017': 'Orange',
    '50019': 'Orleans', '50021': 'Rutland', '50023': 'Washington',
    '50025': 'Windham', '50027': 'Windsor',
}

# ---- SHARED POLYGON CACHE ----
# Multiple providers may share the same block groups, so cache polygons
_polygon_cache = {}


def process_csv_files(provider_key):
    """Read CSVs for a provider and aggregate by block group (fiber only)."""
    prov = PROVIDERS[provider_key]
    data_dir = os.path.dirname(os.path.abspath(__file__))
    tech_filter = prov['tech_filter']

    block_groups = defaultdict(lambda: {
        'bsls': 0, 'blocks': set(), 'res_bsls': 0, 'bus_bsls': 0,
    })
    state_totals = defaultdict(lambda: {'bsls': 0, 'block_groups': set(), 'counties': set()})
    total_bsls = 0
    skipped = 0

    for state_fips, csv_name in sorted(prov['files'].items()):
        csv_path = os.path.join(data_dir, csv_name)
        if not os.path.exists(csv_path):
            print(f"  SKIP: {csv_path} not found")
            continue

        state_abbr = STATE_FIPS.get(state_fips, state_fips)
        count = 0
        state_skip = 0

        with open(csv_path, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                tech = int(row.get('technology', 0))
                if tech != tech_filter:
                    state_skip += 1
                    continue

                block_geoid = row['block_geoid']
                bg_id = block_geoid[:12]
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
                state_totals[state_abbr]['counties'].add(county_fips)
                count += 1

        total_bsls += count
        skipped += state_skip
        print(f"  {state_abbr}: {count:,} fiber BSLs ({state_skip:,} non-fiber skipped), "
              f"{len(state_totals[state_abbr]['block_groups']):,} BGs, "
              f"{len(state_totals[state_abbr]['counties'])} counties")

    print(f"\n  TOTAL: {total_bsls:,} fiber BSLs across {len(block_groups):,} block groups "
          f"({skipped:,} non-fiber rows skipped)")

    result = {}
    for bg_id, data in block_groups.items():
        state_fips = bg_id[:2]
        county_fips = bg_id[:5]
        result[bg_id] = {
            'bsls': data['bsls'],
            'blocks': len(data['blocks']),
            'res': data['res_bsls'],
            'bus': data['bus_bsls'],
            'state': STATE_FIPS.get(state_fips, state_fips),
            'county': COUNTY_NAMES.get(county_fips, county_fips),
            'countyFips': county_fips,
            'tractId': bg_id[:11],
        }

    return result, state_totals


def fetch_block_group_polygons(block_groups_data):
    """Fetch block group polygons from TIGERweb, using cache for previously fetched."""
    global _polygon_cache

    base_url = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/8/query"

    # Filter to only block groups we don't already have cached
    needed = {bg_id for bg_id in block_groups_data if bg_id not in _polygon_cache}
    cached_count = len(block_groups_data) - len(needed)

    if cached_count > 0:
        print(f"  {cached_count} block groups already cached, {len(needed)} new to fetch")

    if not needed:
        return {bg_id: _polygon_cache[bg_id] for bg_id in block_groups_data}, []

    counties = defaultdict(set)
    for bg_id in needed:
        counties[bg_id[:5]].add(bg_id)

    print(f"  Fetching polygons for {len(needed)} block groups across {len(counties)} counties...")

    polygons = {}
    failed_counties = []

    for i, (county_fips, bg_ids) in enumerate(sorted(counties.items())):
        state_fips = county_fips[:2]
        county_code = county_fips[2:]
        county_name = COUNTY_NAMES.get(county_fips, county_fips)
        state_abbr = STATE_FIPS.get(state_fips, state_fips)

        params = urllib.parse.urlencode({
            'where': f"STATE='{state_fips}' AND COUNTY='{county_code}'",
            'outFields': 'GEOID,AREALAND,AREAWATER,HU100,POP100',
            'outSR': '4326',
            'f': 'geojson',
            'returnGeometry': 'true',
        }).encode()

        try:
            req = urllib.request.Request(
                base_url, data=params,
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
                        poly_data = {
                            'geometry': feature['geometry'],
                            'areaLand': feature['properties'].get('AREALAND', 0),
                            'areaWater': feature['properties'].get('AREAWATER', 0),
                            'hu100': feature['properties'].get('HU100', 0),
                            'pop100': feature['properties'].get('POP100', 0),
                        }
                        polygons[geoid] = poly_data
                        _polygon_cache[geoid] = poly_data
                        matched += 1
                status = "OK" if matched == len(bg_ids) else f"PARTIAL ({matched}/{len(bg_ids)})"
                print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: {matched} matched {status}")
            else:
                error = data.get('error', {}).get('message', 'Unknown error')
                print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: ERROR - {error}")
                failed_counties.append(county_fips)
        except Exception as e:
            print(f"  [{i+1}/{len(counties)}] {state_abbr} {county_name}: FAILED - {str(e)[:80]}")
            failed_counties.append(county_fips)

        if i > 0 and i % 10 == 0:
            time.sleep(0.3)

    # Merge cached + newly fetched
    all_polys = {}
    for bg_id in block_groups_data:
        if bg_id in _polygon_cache:
            all_polys[bg_id] = _polygon_cache[bg_id]
        elif bg_id in polygons:
            all_polys[bg_id] = polygons[bg_id]

    print(f"\n  Polygons: {len(all_polys)}/{len(block_groups_data)} "
          f"({len(all_polys)*100//max(len(block_groups_data),1)}%)")

    return all_polys, failed_counties


def simplify_coords(coords, tolerance=0.0005):
    if len(coords) <= 4:
        return coords
    simplified = [coords[0]]
    for i in range(1, len(coords)):
        dx = coords[i][0] - simplified[-1][0]
        dy = coords[i][1] - simplified[-1][1]
        if (dx * dx + dy * dy) > (tolerance * tolerance):
            simplified.append(coords[i])
    if simplified[-1] != coords[-1]:
        simplified.append(coords[-1])
    return [[round(c[0], 5), round(c[1], 5)] for c in simplified]


def generate_and_write(provider_key, block_groups_data, polygons):
    """Generate GeoJSON and write JS + stats files for a provider."""
    prov = PROVIDERS[provider_key]
    data_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(data_dir)

    features = []
    missing = 0

    for bg_id, bg_data in sorted(block_groups_data.items()):
        if bg_id not in polygons:
            missing += 1
            continue

        poly = polygons[bg_id]
        geom = poly['geometry']

        if geom['type'] == 'Polygon':
            geom = {'type': 'Polygon',
                     'coordinates': [simplify_coords(ring) for ring in geom['coordinates']]}
        elif geom['type'] == 'MultiPolygon':
            geom = {'type': 'MultiPolygon',
                     'coordinates': [[simplify_coords(ring) for ring in polygon]
                                     for polygon in geom['coordinates']]}

        hu100 = float(poly.get('hu100', 0) or 0)
        pop100 = float(poly.get('pop100', 0) or 0)
        area_land = float(poly.get('areaLand', 0) or 0)
        coverage_pct = round(bg_data['bsls'] / hu100 * 100, 1) if hu100 > 0 else 0

        features.append({
            'type': 'Feature',
            'properties': {
                'id': bg_id, 'bsls': bg_data['bsls'], 'blocks': bg_data['blocks'],
                'res': bg_data['res'], 'bus': bg_data['bus'],
                'state': bg_data['state'], 'county': bg_data['county'],
                'countyFips': bg_data['countyFips'], 'tractId': bg_data['tractId'],
                'areaLandSqKm': round(area_land / 1e6, 2),
                'hu100': int(hu100), 'pop100': int(pop100),
                'coveragePct': min(coverage_pct, 100),
            },
            'geometry': geom,
        })

    geojson = {'type': 'FeatureCollection', 'features': features}
    print(f"  {len(features)} block groups with polygons ({missing} missing)")

    # Count states
    states = set()
    for f in features:
        states.add(f['properties']['state'])

    # Write JS file
    js_path = os.path.join(parent_dir, prov['js_file'])
    js_content = f"""// {prov['display']} FCC BDC Coverage Data
// Source: FCC Broadband Data Collection, Jun 2025 filing
// Provider ID: {prov['id']} | FRN: {prov['frn']} | Brand: {prov['brand']}
// Technology: 50 (Fiber to the Premises) | Filtered to FTTP only
// Aggregated to census block group level
// Generated: {time.strftime('%Y-%m-%d %H:%M')}
// States: {', '.join(sorted(states))}
// Block Groups: {len(features):,} | Fiber BSLs: {sum(f['properties']['bsls'] for f in features):,}
//
// Data: https://broadbandmap.fcc.gov/data-download/fixed

const {prov['js_const']} = {json.dumps(geojson, separators=(',', ':'))};
"""
    with open(js_path, 'w') as f:
        f.write(js_content)
    file_size = os.path.getsize(js_path)
    print(f"  Written: {js_path} ({file_size / 1024 / 1024:.1f} MB)")

    # Write stats JSON
    stats_path = os.path.join(data_dir, f'{provider_key}_stats.json')
    state_stats = defaultdict(lambda: {'bsls': 0, 'blockGroups': 0, 'counties': set()})
    for bg_id, data in block_groups_data.items():
        st = data['state']
        state_stats[st]['bsls'] += data['bsls']
        state_stats[st]['blockGroups'] += 1
        state_stats[st]['counties'].add(data['county'])
    for st in state_stats:
        state_stats[st]['counties'] = sorted(list(state_stats[st]['counties']))

    stats = {
        'provider': prov['display'],
        'providerId': prov['id'],
        'brand': prov['brand'],
        'filing': 'Jun 2025',
        'technology': 'Fiber to the Premises (50)',
        'totalFiberBSLs': sum(d['bsls'] for d in block_groups_data.values()),
        'totalBlockGroups': len(block_groups_data),
        'states': dict(state_stats),
    }
    with open(stats_path, 'w') as f:
        json.dump(stats, f, indent=2)
    print(f"  Stats: {stats_path}")

    return file_size


if __name__ == '__main__':
    # Process specific provider or all
    targets = sys.argv[1:] if len(sys.argv) > 1 else list(PROVIDERS.keys())

    for provider_key in targets:
        if provider_key not in PROVIDERS:
            print(f"Unknown provider: {provider_key}. Available: {', '.join(PROVIDERS.keys())}")
            continue

        prov = PROVIDERS[provider_key]
        print("\n" + "=" * 60)
        print(f"Processing: {prov['display']} (ID: {prov['id']})")
        print("=" * 60)

        print("\n[1/3] Processing CSV files (fiber only, tech=50)...")
        bg_data, state_totals = process_csv_files(provider_key)

        if not bg_data:
            print("  No data found, skipping.")
            continue

        print("\n[2/3] Fetching block group polygons from TIGERweb...")
        polygons, failed = fetch_block_group_polygons(bg_data)

        if failed:
            print(f"\n  Retrying {len(failed)} failed counties...")
            time.sleep(2)
            retry_bgs = {bg_id: d for bg_id, d in bg_data.items() if bg_id[:5] in failed}
            retry_polys, still_failed = fetch_block_group_polygons(retry_bgs)
            polygons.update(retry_polys)
            if still_failed:
                print(f"  Still failed: {', '.join(still_failed)}")

        print("\n[3/3] Generating output files...")
        generate_and_write(provider_key, bg_data, polygons)

    print("\n" + "=" * 60)
    print("ALL DONE!")
    print("=" * 60)
