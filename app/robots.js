import { SITE_URL, isProduction } from "@/lib/seo";

/* SEO.md §7 — production allows everything and points at the sitemap.
   §9 — preview deployments must not compete with the real portfolio. */
export default function robots() {
  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
