# get the PR number from CircleCI environment; caches on success
__cache_pr_num=""
get_pr_num() {
  if [ -z "${__cache_pr_num}" ]; then
    local _pr_num=0
    if [ -n "${CIRCLE_PULL_REQUEST}" ]; then
      _pr_num="$(echo "${CIRCLE_PULL_REQUEST}" | sed -e 's,.*/,,')"
      if [ -n "${_pr_num}" ] && [ "${_pr_num}" -gt 0 ]; then
        __cache_pr_num="${_pr_num}"
      fi
    fi
    __cache_pr_num=0
  fi
  if [ ! "${__cache_pr_num}" -gt 0 ]; then
    return 1
  fi
  echo "${__cache_pr_num}"
}

# get the "reference" (merge/pr-parent) branch for this branch; caches on success
__cache_reference_branch=""
get_reference_branch() {
  if [ -z "${__cache_reference_branch}" ]; then
    local _parent_branch=""

    local _pr_num="$(get_pr_num || echo 0)"

    if [ "${_pr_num}" -gt 0 ] && [ -n "${GITHUB_API_TOKEN}" ]; then
      local _github_base="$(curl -s -H "Accept: application/vnd.github+json" -H "Authorization: Bearer ${GITHUB_API_TOKEN}" "https://api.github.com/repos/OpenNMS/opennms/pulls/${_pr_num}" | jq -r '.base.ref')"
      if [ -n "${_github_base}" ]; then
        __cache_reference_branch="${_github_base}"
      fi
    fi

    if [ -z "${__cache_reference_branch}" ] && [ -e .nightly ]; then
      _parent_branch="$(cat .nightly | grep -E '^parent_branch:' | sed -e 's,parent_branch: *,,')"
      if [ -n "${_parent_branch}" ]; then
        __cache_reference_branch="${_parent_branch}"
      fi
    fi
  fi

  if [ -n "${__cache_reference_branch}" ]; then
    echo "${__cache_reference_branch}"
    return 0
  fi

  return 1
}