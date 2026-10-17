/* ------------------------------------------------------------------ */
/* Central SEO configuration (SEO.md §2, §9, §25)                       */
/*                                                                      */
/* One source of truth for the production domain, metadata copy and     */
/* deployment detection. Canonical / OG / sitemap / robots all read     */
/* from here so they can never drift apart.                             */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://niranjanjagtap.me";

export const siteConfig = {
  name: "Niranjan Jagtap",
  url: SITE_URL,
  title: "Niranjan Jagtap - Full Stack Developer",
  description:
    "Niranjan Jagtap is a full stack developer skilled in React, Next.js, Express, Node.js, Supabase and Tailwind CSS, and a B.E. in Computer Engineering student at RMD Sinhgad School of Engineering, Pune.",
  author: "Niranjan Jagtap",
  jobTitle: "Full Stack Developer",
  /* Real profiles only — mirrors LINKS in app/page.jsx. */
  sameAs: [
    "https://github.com/niranjanj0524",
    "https://www.linkedin.com/in/niranjan-jagtap-816243318/",
  ],
  /* public/me.jpeg — declared at its true intrinsic size (413x531). */
  image: {
    url: "/me.jpeg",
    width: 413,
    height: 531,
    alt: "Niranjan Jagtap - Full Stack Developer",
  },
};

/**
 * Vercel sets VERCEL_ENV to "production" | "preview" | "development".
 * Locally it is unset, so we default to production — a local `npm run build`
 * then matches what ships. Previews get noindex + a disallowed robots.
 */
export const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

/* ------------------------------------------------------------------ */
/* JSON-LD (SEO.md §12 Person, §13 WebSite)                             */
/* Server-rendered into <body>; no client JS, no invented information.  */
/* ------------------------------------------------------------------ */

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.jobTitle,
  sameAs: siteConfig.sameAs,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

/** Both graphs as one script payload. */
export const jsonLd = [personJsonLd, websiteJsonLd];
