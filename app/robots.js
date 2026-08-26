import { SITE } from "@/lib/seo";

// Required for `output: export` — generate a static robots.txt at build time.
export const dynamic = "force-static";

export default function robots() {
  // Interactive, user-specific and thin utility routes (assessment results,
  // dashboards, the live avatar, etc.) are kept out of the index with a per-page
  // `noindex` meta tag rather than a robots.txt Disallow. `noindex` is the only
  // directive Google honours for de-indexing, and it requires the page to remain
  // crawlable — so robots.txt intentionally allows everything here.
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
