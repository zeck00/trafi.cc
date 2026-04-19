#!/usr/bin/env bash
# Shared config + auth for GSC API scripts.
# Source this at the top of every gsc-* script.
set -euo pipefail

GSC_PROJECT="${GSC_PROJECT:-personal-project-mac}"
GSC_SITE="${GSC_SITE:-sc-domain:trafi.cc}"
GSC_SITE_URLENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1], safe=''))" "$GSC_SITE")

# Fresh token each invocation — gcloud refreshes automatically.
GSC_TOKEN=$(gcloud auth application-default print-access-token)

gsc_api() {
  local path="$1"
  shift
  local base="https://searchconsole.googleapis.com"
  curl -sS \
    -H "Authorization: Bearer $GSC_TOKEN" \
    -H "X-Goog-User-Project: $GSC_PROJECT" \
    -H "Content-Type: application/json" \
    "$@" \
    "${base}${path}"
}

export -f gsc_api
export GSC_PROJECT GSC_SITE GSC_SITE_URLENC GSC_TOKEN
