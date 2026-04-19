# GSC Automation Scripts

One-time setup:
```sh
gcloud auth application-default login \
  --scopes=openid,https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters
gcloud services enable searchconsole.googleapis.com --project=personal-project-mac
gcloud auth application-default set-quota-project personal-project-mac
```

All scripts source `gsc-common.sh` which reads:
- `GSC_PROJECT` (default: `personal-project-mac`) — GCP project for API quota
- `GSC_SITE` (default: `sc-domain:trafi.cc`) — the verified GSC property

Override either via env var: `GSC_SITE=sc-domain:kanz.ziad.us ./gsc-perf.sh`.

## Scripts

| Script | What it does |
|---|---|
| `gsc-sitemaps.sh` | Lists sitemap submissions with pending / errors / warnings status |
| `gsc-sitemap-submit.sh [url]` | (Re)submits a sitemap. Default: `https://trafi.cc/sitemap.xml` |
| `gsc-sitemap-delete.sh <url>` | Removes a sitemap registration (useful for clearing the trailing-slash dupe) |
| `gsc-inspect.sh <url>` | Shows indexing verdict + coverage + canonical for a single URL |
| `gsc-indexing-report.sh` | Inspects every URL in the live sitemap, summarizes indexed vs not |
| `gsc-perf.sh [days=28] [dim=query]` | Search Analytics: clicks / impressions / CTR / position |

## Limits

- **URL Inspection API:** ~2000 calls/day/site. We have 72 URLs → plenty of headroom.
- **Search Analytics API:** 25k queries/day. Generous.
- **Sitemap API:** submission is free; status is cached async — dashboard + API can disagree for hours.
- **No "request indexing" API.** That action is dashboard-only (~10/day manual via URL Inspection UI). The Indexing API is officially restricted to JobPosting + BroadcastEvent.

## Common playbook

```sh
# Weekly: see top queries + clicks
./scripts/gsc-perf.sh 7 query

# Daily: which pages are indexed?
./scripts/gsc-indexing-report.sh

# After shipping a blog post: check if Google can see it
./scripts/gsc-inspect.sh https://trafi.cc/blog/new-slug/

# Ad hoc: status of sitemap processing
./scripts/gsc-sitemaps.sh
```
