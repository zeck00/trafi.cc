#!/usr/bin/env bash
# List sitemap submissions and status. No args.
# Usage: ./scripts/gsc-sitemaps.sh
set -euo pipefail
cd "$(dirname "$0")"
source ./gsc-common.sh

echo "==> Sitemaps registered for $GSC_SITE"
gsc_api "/webmasters/v3/sites/${GSC_SITE_URLENC}/sitemaps" \
  | jq -r '.sitemap // [] | if length == 0 then "  (none)" else .[] | "  \(.path)\n    submitted: \(.lastSubmitted // "?")\n    downloaded: \(.lastDownloaded // "not yet")\n    pending: \(.isPending // false)\n    errors: \(.errors // "0")   warnings: \(.warnings // "0")   indexed: \(.contents[0].submitted // "?")"
  end'
