#!/usr/bin/env bash
# Batch inspect every URL in the live sitemap and report indexing status.
# Usage: ./scripts/gsc-indexing-report.sh
# Note: URL Inspection API has a ~2000/day quota per site — we have ~72 URLs, plenty of headroom.
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

echo "==> Fetching live sitemap to get the URL list"
URLS=$(curl -s https://trafi.cc/sitemap.xml | grep -oE '<loc>[^<]+</loc>' | sed -e 's|<loc>||' -e 's|</loc>||')
N=$(echo "$URLS" | wc -l | tr -d ' ')
echo "  Found $N URLs"
echo ""

declare -A COUNTS
COUNTS[PASS]=0
COUNTS[PARTIAL]=0
COUNTS[FAIL]=0
COUNTS[NEUTRAL]=0

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

  COUNTS[$VERDICT]=$((${COUNTS[$VERDICT]:-0}+1))
  echo "$VERDICT  ($COVERAGE)"

  if [[ "$VERDICT" != "PASS" ]]; then
    NOT_INDEXED+=("$VERDICT | $COVERAGE | $URL")
  fi

  # Soft rate limit — stay well under 2000/day
  sleep 0.3
done <<< "$URLS"

echo ""
echo "==> Summary"
printf "  %-10s %s\n" "PASS:"    "${COUNTS[PASS]}"
printf "  %-10s %s\n" "PARTIAL:" "${COUNTS[PARTIAL]}"
printf "  %-10s %s\n" "FAIL:"    "${COUNTS[FAIL]}"
printf "  %-10s %s\n" "NEUTRAL:" "${COUNTS[NEUTRAL]}"

if [[ ${#NOT_INDEXED[@]} -gt 0 ]]; then
  echo ""
  echo "==> Not-yet-indexed (first 30):"
  printf '%s\n' "${NOT_INDEXED[@]}" | head -30
fi
