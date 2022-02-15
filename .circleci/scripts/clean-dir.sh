#!/bin/bash -e

ROOT_DIR="$1"; shift

if [ -z "$ROOT_DIR" ]; then
  echo "usage: $0 <directory>"
  exit 1
fi

# keep anything downloaded in the last 7 days
KEEP="+7"

if [ -d "${ROOT_DIR}" ]; then
  # delete anything older than $KEEP days
  find "${ROOT_DIR}" -depth -ctime $KEEP -type f -exec rm {} \; >/dev/null

  # delete any directories that are empty (if a directory is not empty, silently continue0
  find "${ROOT_DIR}" -depth -type d -print | while read -r DIR; do
    rmdir "$DIR" 2>/dev/null || :
  done
fi
