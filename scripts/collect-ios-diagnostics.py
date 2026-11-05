"""Retain bounded crash reports and xcresult diagnostics from the hosted test."""
import json
import os
from pathlib import Path
import shutil
import subprocess

temporary = Path(os.environ['RUNNER_TEMP'])
destination = temporary / 'native-diagnostics'
destination.mkdir(exist_ok=True)
records = []
reports = list(Path.home().glob('Library/Logs/DiagnosticReports/ReactNativeStarter*'))
reports += list(Path.home().glob('Library/Developer/CoreSimulator/Devices/*/data/Library/Logs/CrashReporter/ReactNativeStarter*'))
reports = sorted((path for path in reports if path.is_file()), key=lambda path: path.stat().st_mtime, reverse=True)
for index, report in enumerate(reports[:8]):
    content = report.read_bytes()
    limit = 2 * 1024 * 1024
    output = destination / f'{index}-{report.name}'
    output.write_bytes(content[:limit])
    records.append({'name': report.name, 'bytes': len(content), 'retained_bytes': min(len(content), limit)})
(destination / 'crash-reports.json').write_text(json.dumps(records, indent=2) + '\n')
print(f'Retained {len(records)} app crash reports (maximum 8 reports, 2 MiB each).')

result = temporary / 'native-tests.xcresult'
if result.is_dir():
    with (destination / 'test-summary.json').open('w') as output:
        subprocess.run(['xcrun', 'xcresulttool', 'get', 'test-results', 'summary', '--path', str(result)], stdout=output, check=True)
    exported = temporary / 'native-exported-diagnostics'
    subprocess.run(['xcrun', 'xcresulttool', 'export', 'diagnostics', '--path', str(result), '--output-path', str(exported)], check=True)
    candidates = sorted((path for path in exported.rglob('*') if path.is_file()), key=lambda path: (path.suffix != '.zip', path.stat().st_size))
    retained = 0
    total = 0
    for index, report in enumerate(candidates):
        size = report.stat().st_size
        if retained < 8 and size <= 25 * 1024 * 1024 and total + size <= 75 * 1024 * 1024:
            shutil.copyfile(report, destination / f'xcresult-{index}-{report.name}')
            retained += 1
            total += size
        else:
            print(f'Diagnostic size cap omitted {report.name}: {size} bytes')
    print(f'Retained {retained} xcresult diagnostic files, {total} bytes (75 MiB total cap).')
else:
    print('No xcresult exists: the job stopped before simulator testing.')
