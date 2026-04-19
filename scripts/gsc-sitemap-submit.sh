#!/usr/bin/env bash
# Submit (or resubmit) a sitemap URL for processing.
# Usage: ./scripts/gsc-sitemap-submit.sh [https://trafi.cc/sitemap.xml]
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

SITEMAP_URL="${1:-https://trafi.cc/sitemap.xml}"
SITEMAP_ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1], safe=''))" "$SITEMAP_URL")

echo "==> Submitting $SITEMAP_URL to GSC for $GSC_SITE"
RESPONSE=$(gsc_api "/webmasters/v3/sites/${GSC_SITE_URLENC}/sitemaps/${SITEMAP_ENC}" -X PUT -w '\n%{http_code}')
CODE=$(echo "$RESPONSE" | tail -n 1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [[ "$CODE" == "200" || "$CODE" == "201" ]]; then
  echo "  OK ($CODE) — submission accepted. Processing is async; check status with ./gsc-sitemaps.sh"
else
  echo "  FAILED ($CODE)"
  echo "$BODY" | jq . 2>/dev/null || echo "$BODY"
  exit 1
fi
