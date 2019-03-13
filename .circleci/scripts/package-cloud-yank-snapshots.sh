#!/bin/bash -e

# Include settings for package cloud environment
source .circleci/env/package_cloud

if ! CURL_CMD="$(type -p curl)"; then
  echo "The command line tool curl is required and does not exist."
  echo "You can install it with apt-get -y install curl"
  exit 1
fi

if ! JQ_CMD="$(type -p jq)"; then
  echo "The command line tool jq is required and does not exist."
  echo "You can install it with apt-get -y install jq"
  exit 1
fi

if [ -z "${PACKAGECLOUD_TOKEN}" ]; then
  echo "The environment variable PACKAGECLOUD_TOKEN is not set and is required."
  echo "Set PACKAGECLOUD_TOKEN environment variable."
  exit 1
fi

if [ -z "${PACKAGECLOUD_USER}" ]; then
  echo "The environment variable PACKAGECLOUD_USER is not set and is required."
  echo "Set PACKAGECLOUD_USER environment variable."
  exit 1
fi

if [ -z "${PACKAGECLOUD_REPO}" ]; then
  echo "The environment variable PACKAGECLOUD_REPO is not set and is required."
  echo "Set PACKAGECLOUD_REPO environment variable."
  exit 1
fi

BASE_URL="https://${PACKAGECLOUD_TOKEN}@packagecloud.io"

SNAPSHOT_PACKAGE_URLS=$(${CURL_CMD} -s "${BASE_URL}/api/v1/repos/${PACKAGECLOUD_USER}/${PACKAGECLOUD_REPO}/packages.json" | ${JQ_CMD} '.[].destroy_url')

for PKG_URL in ${SNAPSHOT_PACKAGE_URLS}; do
  ${CURL_CMD} -X DELETE "${BASE_URL}${PKG_URL//\"/}"
done