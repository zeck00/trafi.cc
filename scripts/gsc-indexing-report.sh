#!/usr/bin/env bash
# Batch inspect every URL in the live sitemap and report indexing status.
# Usage: ./scripts/gsc-indexing-report.sh [sitemap-url]
# Note: URL Inspection API has a ~2000/day quota per site.
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

SITEMAP_URL="${1:-https://trafi.cc/sitemap.xml}"

echo "==> Fetching live sitemap to get the URL list"
URLS=$(curl -s "$SITEMAP_URL" | grep -oE '<loc>[^<]+</loc>' | sed -e 's|<loc>||' -e 's|</loc>||')
N=$(echo "$URLS" | wc -l | tr -d ' ')
echo "  Found $N URLs"
echo ""

# Use plain vars instead of associative arrays (macOS bash 3.2 compatible)
COUNT_PASS=0
COUNT_PARTIAL=0
COUNT_FAIL=0
COUNT_NEUTRAL=0

NOT_INDEXED=()
i=0
while IFS= read -r URL; do
  i=$((i+1))
  printf "[%d/%d] %-70s " "$i" "$N" "$URL"

  BODY=$(jq -nc --arg url "$URL" --arg site "$GSC_SITE" \
    '{inspectionUrl: $url, siteUrl: $site, languageCode: "en-US"}')

  RESPONSE=$(gsc_api "/v1/urlInspection/index:inspect" -X POST -d "$BODY")
  VERDICT=$(echo "$RESPONSE" | jq -r '.inspectionResult.indexStatusResult.verdict // "ERROR"')
  COVERAGE=$(echo "$RESPONSE" | jq -r '.inspectionResult.indexStatusResult.coverageState // "?"')

  if [[ "$VERDICT" == "ERROR" ]]; then
    ERR=$(echo "$RESPONSE" | jq -r '.error.message // "unknown"')
    echo "ERROR: $ERR"
    exit 1
  fi

  case "$VERDICT" in
    PASS) COUNT_PASS=$((COUNT_PASS+1)) ;;
    PARTIAL) COUNT_PARTIAL=$((COUNT_PARTIAL+1)) ;;
    FAIL) COUNT_FAIL=$((COUNT_FAIL+1)) ;;
    NEUTRAL) COUNT_NEUTRAL=$((COUNT_NEUTRAL+1)) ;;
  esac

  echo "$VERDICT  ($COVERAGE)"

  if [[ "$VERDICT" != "PASS" ]]; then
    NOT_INDEXED+=("$VERDICT | $COVERAGE | $URL")
  fi

  # Soft rate limit — stay well under 2000/day
  sleep 0.3
done <<< "$URLS"

echo ""
echo "==> Summary"
printf "  %-10s %s\n" "PASS:"    "$COUNT_PASS"
printf "  %-10s %s\n" "PARTIAL:" "$COUNT_PARTIAL"
printf "  %-10s %s\n" "FAIL:"    "$COUNT_FAIL"
printf "  %-10s %s\n" "NEUTRAL:" "$COUNT_NEUTRAL"

if [[ ${#NOT_INDEXED[@]} -gt 0 ]]; then
  echo ""
  echo "==> Not-yet-indexed (first 30):"
  printf '%s\n' "${NOT_INDEXED[@]}" | head -30
fi
