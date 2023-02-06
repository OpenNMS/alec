#!/bin/bash

set -e
set -o pipefail

PROJECT="opennms"
REPO=""

if [ -n "${CIRCLE_TAG}" ]; then
  REPO="stable"
else
  case "${CIRCLE_BRANCH}" in
    develop)
      REPO="develop"
      ;;
    release-*)
      REPO="common-testing"
      ;;
    *)
      echo "This branch is not eligible for deployment: ${CIRCLE_BRANCH}"
      exit 0
      ;;
  esac
fi

publishPackage() {
  local _tmpdir;
  _tmpdir="$(mktemp -d 2>/dev/null || mktemp -d -t 'publish_cloudsmith_')"
  echo "publishing:" "$@"
  "$@" >"${_tmpdir}/publish.log" 2>&1
  ret="$?"
  cat "${_tmpdir}/publish.log"
  if [ "$(grep -c "This package duplicates the attributes of another package" < "${_tmpdir}/publish.log")" -gt 0 ]; then
    echo "Duplicate upload... skipping."
    return 0
  fi
  rm "${_tmpdir}/publish.log"
  rmdir "${_tmpdir}" || :
  return "$ret"
}

# shellcheck disable=SC2012
if [ "$(ls -1 assembly/*-rpm/target/rpm/*/RPMS/noarch/*.rpm | wc -l)" -eq 0 ]; then
  echo "ERROR: no .rpm files found in assembly/ from a previous build step"
  exit 1
fi
for FILE in assembly/*-rpm/target/rpm/*/RPMS/noarch/*.rpm; do
  # give it 3 tries then die
  publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" ||
  publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" ||
  publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" || exit 1
  if [ "${REPO}" = "stable" ]; then
    # also publish to "common"
    publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" ||
    publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" ||
    publishPackage cloudsmith push rpm --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" || exit 1
  fi
done

# shellcheck disable=SC2012
if [ "$(ls -1 assembly/*-deb/target/*.deb | wc -l)" -eq 0 ]; then
  echo "ERROR: no .deb files found in assembly/ from a previous build step"
  exit 1
fi
for FILE in assembly/*-deb/target/*.deb; do
  # give it 3 tries then die
  publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" ||
  publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" ||
  publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/$REPO/any-distro/any-version" "$FILE" || exit 1
  if [ "${REPO}" = "stable" ]; then
    # also publish to "common"
    publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" ||
    publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" ||
    publishPackage cloudsmith push deb --no-wait-for-sync "${PROJECT}/common/any-distro/any-version" "$FILE" || exit 1
  fi
done
