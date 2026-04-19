#!/usr/bin/env bash
# Inspect a single URL's indexing status.
# Usage: ./scripts/gsc-inspect.sh https://trafi.cc/worth/facebook/
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <url>"
  echo "Example: $0 https://trafi.cc/worth/facebook/"
  exit 1
fi

URL="$1"
SITE_FOR_INSPECT="${GSC_SITE}"

BODY=$(jq -nc --arg url "$URL" --arg site "$SITE_FOR_INSPECT" \
  '{inspectionUrl: $url, siteUrl: $site, languageCode: "en-US"}')

echo "==> Inspecting $URL"
RESPONSE=$(gsc_api "/v1/urlInspection/index:inspect" -X POST -d "$BODY")

echo "$RESPONSE" | jq -r '
  if .error then
    "ERROR: \(.error.message)"
  else
    .inspectionResult as $r
    | "  Verdict: \($r.indexStatusResult.verdict // "?")
  Coverage: \($r.indexStatusResult.coverageState // "?")
  Last crawled: \($r.indexStatusResult.lastCrawlTime // "never")
  Google-canonical: \($r.indexStatusResult.googleCanonical // "?")
  User-canonical:   \($r.indexStatusResult.userCanonical // "?")
  Indexing state: \($r.indexStatusResult.indexingState // "?")
  Sitemap: \($r.indexStatusResult.sitemap // [] | join(", "))
  Rich results: \($r.richResultsResult.verdict // "n/a")
  Mobile usability: \($r.mobileUsabilityResult.verdict // "n/a")"
  end
'
