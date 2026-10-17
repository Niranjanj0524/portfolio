import { SITE_URL, isProduction } from "@/lib/seo";

/* SEO.md §8 — only publicly accessible, indexable URLs.
   The site is a single page (app/page.jsx); there are no other routes.
   Previews publish nothing so they never compete with production. */
export default function sitemap() {
  if (!isProduction) return [];

  return [
    {
      /* Trailing slash kept consistent with the canonical URL (§25). */
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
