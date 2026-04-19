#!/usr/bin/env bash
# Pull Search Analytics performance (clicks / impressions / CTR / position) for the last N days.
# Usage: ./scripts/gsc-perf.sh [days=28] [dimension=query|page|country|device|date]
# Example: ./scripts/gsc-perf.sh 7 query
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

DAYS="${1:-28}"
DIM="${2:-query}"

# GSC data has ~2-day lag. Use yesterday-2 as end date.
END=$(date -u -v-2d +%Y-%m-%d 2>/dev/null || date -u -d "2 days ago" +%Y-%m-%d)
START=$(date -u -v-$((DAYS+2))d +%Y-%m-%d 2>/dev/null || date -u -d "$((DAYS+2)) days ago" +%Y-%m-%d)

BODY=$(jq -nc --arg s "$START" --arg e "$END" --arg d "$DIM" \
  '{startDate: $s, endDate: $e, dimensions: [$d], rowLimit: 50}')

echo "==> Performance for $GSC_SITE ($START → $END, dim=$DIM)"
RESPONSE=$(gsc_api "/webmasters/v3/sites/${GSC_SITE_URLENC}/searchAnalytics/query" -X POST -d "$BODY")

if echo "$RESPONSE" | jq -e '.error' > /dev/null 2>&1; then
  echo "ERROR:"
  echo "$RESPONSE" | jq .
  exit 1
fi

ROWS_JSON=$(echo "$RESPONSE" | jq '.rows // []')
N=$(echo "$ROWS_JSON" | jq 'length')

if [[ "$N" == "0" ]]; then
  echo "  (no data in this window)"
  exit 0
fi

TOTAL_CLICKS=$(echo "$ROWS_JSON" | jq '[.[].clicks] | add')
TOTAL_IMPR=$(echo "$ROWS_JSON" | jq '[.[].impressions] | add')

echo "  Totals: $TOTAL_CLICKS clicks · $TOTAL_IMPR impressions across $N rows"
echo ""
printf "  %-50s %7s %8s %8s %6s\n" "$DIM" "clicks" "impr" "ctr" "pos"
printf "  %-50s %7s %8s %8s %6s\n" "$(printf '%.0s-' {1..50})" "------" "--------" "--------" "------"
echo "$ROWS_JSON" | jq -r '.[] | "\(.keys[0])\t\(.clicks)\t\(.impressions)\t\(.ctr)\t\(.position)"' | \
  while IFS=$'\t' read -r key clicks impr ctr pos; do
    ctr_pct=$(printf "%.2f%%" "$(echo "$ctr * 100" | bc -l)")
    pos_fmt=$(printf "%.1f" "$pos")
    # Truncate long keys
    if [[ ${#key} -gt 50 ]]; then key="${key:0:47}..."; fi
    printf "  %-50s %7s %8s %8s %6s\n" "$key" "$clicks" "$impr" "$ctr_pct" "$pos_fmt"
  done
