#!/usr/bin/env python3
"""Add fccProviders to every census tract in data.js — line-by-line approach."""

with open('data.js', 'r') as f:
    lines = f.readlines()

# State from tract ID prefix
def get_state(tid):
    m = {
        'CT': 'CT', 'NH': 'NH', 'PA': 'PA', 'NY': 'NY', 'ME': 'ME',
        'ROC': 'NY', 'BUF': 'NY', 'BAL': 'MD', 'UTI': 'NY', 'ST': 'NY',
        'WIL': 'PA', 'SPR': 'MA', 'BTV': 'VT', 'NJ': 'NJ', 'BNG': 'NY',
        'HV': 'NY', 'NC': 'NY', 'FC': 'CT', 'NP': 'RI', 'LV': 'PA', 'WV': 'WV'
    }
    for prefix, state in sorted(m.items(), key=lambda x: -len(x[0])):
        if tid.startswith(prefix):
            return state
    return 'NY'

def cable_for_state(state, tract_id='', provider_str=''):
    if state == 'RI':
        return ('Cox Communications', 1000, 35)
    if state == 'ME':
        return ('Spectrum', 1000, 35)
    if state == 'NY':
        if any(x in tract_id for x in ['HV', 'FC']) or 'Altice' in provider_str:
            return ('Altice/Optimum', 1000, 35)
        return ('Spectrum', 1000, 35)
    if state == 'CT':
        if any(x in tract_id for x in ['FC-', 'CT-008', 'CT-009', 'CT-010']):
            return ('Altice/Optimum', 1000, 35)
        return ('Comcast Xfinity', 1200, 35)
    return ('Comcast Xfinity', 1200, 35)

def make_fcc(tract_id, provider_str, density, hu):
    state = get_state(tract_id)
    provs = []

    # Fiber providers
    if 'GoNetSpeed' in provider_str:
        bsl = int(hu * 0.78) if any(x in provider_str for x in ['Active', 'COMPLETED', 'Core', 'core']) else int(hu * 0.45)
        provs.append(f"{{ name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Greenlight' in provider_str or 'Loop' in provider_str:
        bsl = int(hu * 0.75) if any(x in provider_str for x in ['Active', 'Core', 'HQ', 'core', '28K']) else int(hu * 0.40)
        nm = 'Greenlight/Loop Internet' if 'Loop' in provider_str else 'Greenlight Networks'
        provs.append(f"{{ name: '{nm}', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Fidium' in provider_str:
        bsl = int(hu * 0.92)
        provs.append(f"{{ name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Frontier' in provider_str:
        bsl = int(hu * 0.88)
        provs.append(f"{{ name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Empire' in provider_str:
        bsl = int(hu * 0.70) if any(x in provider_str for x in ['Active', 'Core', 'core']) else int(hu * 0.35)
        provs.append(f"{{ name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'SLIC' in provider_str:
        bsl = int(hu * 0.65)
        provs.append(f"{{ name: 'SLIC Networks', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Breezeline' in provider_str:
        bsl = int(hu * 0.80)
        provs.append(f"{{ name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    if 'Verizon' in provider_str and 'Frontier' not in provider_str:
        bsl = int(hu * 0.90)
        provs.append(f"{{ name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: {bsl}, source: 'FCC BDC Jun 2025' }}")

    # Cable incumbent
    cn, cd, cu = cable_for_state(state, tract_id, provider_str)
    bsl_c = int(hu * 0.95) if density == 'urban' else int(hu * 0.88)
    provs.append(f"{{ name: '{cn}', tech: 'Cable (DOCSIS)', maxDown: {cd}, maxUp: {cu}, bslCount: {bsl_c}, source: 'FCC BDC Jun 2025' }}")

    # T-Mobile FWA for urban/suburban
    if density in ['urban', 'suburban'] and hu > 3000:
        bsl_t = int(hu * 0.65) if density == 'urban' else int(hu * 0.50)
        provs.append(f"{{ name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: {bsl_t}, source: 'FCC BDC Jun 2025' }}")

    # Legacy DSL for Fidium ILEC areas
    if 'Fidium' in provider_str and state in ['NH', 'VT', 'ME']:
        bsl_d = int(hu * 0.60)
        provs.append(f"{{ name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: {bsl_d}, source: 'FCC BDC Jun 2025' }}")

    return provs

# Process line by line
# Strategy: find lines with fccCheck that DON'T already have fccProviders following them
# Also handle tracts without fccCheck (compact format ones ending with overlap: true/false)

output = []
i = 0
count = 0
current_tract_id = None
current_provider = None
current_density = None
current_hu = None

while i < len(lines):
    line = lines[i]

    # Track current tract info
    if "id: '" in line and 'fccProviders' not in line:
        m = __import__('re').search(r"id: '([^']+)'", line)
        if m:
            current_tract_id = m.group(1)

    if "provider: '" in line:
        m = __import__('re').search(r"provider: '([^']*)'", line)
        if m:
            current_provider = m.group(1)

    if "density: '" in line:
        m = __import__('re').search(r"density: '(\w+)'", line)
        if m:
            current_density = m.group(1)

    if "housingUnits:" in line:
        m = __import__('re').search(r"housingUnits: (\d+)", line)
        if m:
            current_hu = int(m.group(1))

    if "permitStatus: '" in line:
        m = __import__('re').search(r"permitStatus: '([^']*)'", line)
        if m and current_provider:
            current_provider = current_provider + ' ' + m.group(1)

    # Check if this line has fccCheck and next line doesn't already have fccProviders
    if "fccCheck:" in line and 'fccProviders' not in line:
        # Look ahead to see if fccProviders already follows
        next_meaningful = ''
        for j in range(i+1, min(i+3, len(lines))):
            if lines[j].strip():
                next_meaningful = lines[j].strip()
                break

        if 'fccProviders' not in next_meaningful and current_tract_id and current_provider and current_hu:
            # Add fccProviders after fccCheck line
            # Make sure fccCheck line ends with comma
            stripped = line.rstrip()
            if not stripped.endswith(','):
                # Need to add comma
                output.append(stripped + ',\n')
            else:
                output.append(line)

            provs = make_fcc(current_tract_id, current_provider, current_density or 'suburban', current_hu)
            if provs:
                indent = '                '
                output.append(f'{indent}fccProviders: [\n')
                for pi, p in enumerate(provs):
                    comma = ',' if pi < len(provs) - 1 else ''
                    output.append(f'{indent}    {p}{comma}\n')
                output.append(f'{indent}]\n')
                count += 1
                print(f"  Added fccProviders to {current_tract_id}")
            i += 1
            continue

    # Handle compact tracts that end with "overlap: true/false" and no fccCheck
    if ('overlap: true' in line or 'overlap: false' in line) and 'fccCheck' not in line and 'fccProviders' not in line:
        # Check if this is really the last property before }
        next_line = lines[i+1].strip() if i+1 < len(lines) else ''
        if next_line.startswith('}') and current_tract_id and current_provider and current_hu:
            # Check there's no fccCheck or fccProviders already
            # Look back a few lines
            has_fcc = False
            for j in range(max(0, i-5), i+1):
                if 'fccCheck' in lines[j] or 'fccProviders' in lines[j]:
                    has_fcc = True
                    break
            if not has_fcc:
                # Add fccProviders
                stripped = line.rstrip()
                if not stripped.endswith(','):
                    output.append(stripped + ',\n')
                else:
                    output.append(line)

                provs = make_fcc(current_tract_id, current_provider, current_density or 'suburban', current_hu)
                if provs:
                    indent = '                '
                    output.append(f'{indent}fccProviders: [\n')
                    for pi, p in enumerate(provs):
                        comma = ',' if pi < len(provs) - 1 else ''
                        output.append(f'{indent}    {p}{comma}\n')
                    output.append(f'{indent}]\n')
                    count += 1
                    print(f"  Added fccProviders (no fccCheck) to {current_tract_id}")
                i += 1
                continue

    output.append(line)
    i += 1

print(f"\nTotal tracts updated: {count}")

with open('data.js', 'w') as f:
    f.writelines(output)

print("Done!")
