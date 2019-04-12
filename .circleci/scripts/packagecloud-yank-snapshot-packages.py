#!/usr/bin/env python3
import base64
import os
import json
import urllib.request
from urllib.error import URLError
from datetime import datetime

PACKAGECLOUD_USER = os.getenv('PACKAGECLOUD_USER', 'opennms')
PACKAGECLOUD_REPO = os.getenv('PACKAGECLOUD_REPO', 'plugin-snapshot')
PACKAGECLOUD_TOKEN = os.getenv('PACKAGECLOUD_TOKEN', 'XXXX')

PACKAGECLOUD_URL = 'https://packagecloud.io'
FILTERED_PACKAGE_NAMES = ['opennms-alec-plugin', 'sentinel-alec-plugin']

def build_request(path, method=None):
    credentials = ('%s:%s' % (PACKAGECLOUD_TOKEN, ""))
    encoded_credentials = base64.b64encode(credentials.encode('ascii'))
    headers = {
        'Accept': 'application/json;charset=UTF-8',
        'Authorization': 'Basic %s' % encoded_credentials.decode('ascii')
    }
    return urllib.request.Request(
            PACKAGECLOUD_URL + path,
            headers=headers,
            method=method
    )

# Load the list of packages available in the repository
req = build_request('/api/v1/repos/opennms/plugin-snapshot/packages.json')
with urllib.request.urlopen(req) as url:
    all_packages = json.loads(url.read().decode())

# Group the packages we're interested in by name
# OPTIMIZATION: Can we limit the response from the API to only include those we're interested in in the first place?
packages_by_key = {}
for package in all_packages:
    # Filter
    if package['name'] in FILTERED_PACKAGE_NAMES:
        # Group by
        key = (package['name'], package['type'])
        # Convert the created_at field from a ISO8601 string  '2019-03-28T21:10:11.000Z' to a date
        package['created_at'] = datetime.strptime(package['created_at'], "%Y-%m-%dT%H:%M:%S.%f%z")
        # Append
        packages_by_key.setdefault(key, []).append(package)

# Figure out which packages we should delete
packages_to_delete = []
for key, packages in packages_by_key.items():
    # Sort the packages by creation time in reverse order - most recent first
    packages = sorted(packages, key=lambda pkg: pkg['created_at'], reverse=True)
    # Grab all of the packages, except the first
    packages_to_delete.extend(packages[1:])
    print("Keeping '%s'." % packages[0]['filename'])

# Delete the packages
if len(packages_to_delete) < 1:
    print("Nothing to delete.")

for package_to_delete in packages_to_delete:
    req = build_request(package_to_delete['destroy_url'], method='DELETE')
    try:
        print("Deleting '%s'." % package_to_delete['filename'])
        response = urllib.request.urlopen(req)
    except URLError as error:
        print("Error deleting '%s': %s" % (package_to_delete['filename'], error))
