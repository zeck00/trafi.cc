#!/usr/bin/env bash
# Remove a sitemap submission from GSC (doesn't delete the file, just the registration).
# Usage: ./scripts/gsc-sitemap-delete.sh https://trafi.cc/sitemap.xml/
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <sitemap-url>"
  echo "Example: $0 'https://trafi.cc/sitemap.xml/'"
  exit 1
fi

SITEMAP_URL="$1"
SITEMAP_ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1], safe=''))" "$SITEMAP_URL")

echo "==> Removing $SITEMAP_URL from GSC"
RESPONSE=$(gsc_api "/webmasters/v3/sites/${GSC_SITE_URLENC}/sitemaps/${SITEMAP_ENC}" -X DELETE -w '\n%{http_code}')
CODE=$(echo "$RESPONSE" | tail -n 1)
if [[ "$CODE" == "204" || "$CODE" == "200" ]]; then
  echo "  OK ($CODE) — sitemap entry removed from GSC."
else
  echo "  FAILED ($CODE)"
  echo "$RESPONSE"
  exit 1
fi
