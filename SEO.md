````md
# SEO.md — Portfolio SEO Instructions

## Context

This is Niranjan Jagtap's personal software developer portfolio.

Stack:
- Next.js
- JavaScript (no TypeScript)
- Vercel
- Personal portfolio
- Developer projects, experience, skills, education and contact information

Primary SEO goals:
1. Rank for "Niranjan Jagtap"
2. Rank for "Niranjan Jagtap software developer"
3. Make projects and experience discoverable
4. Make the site technically excellent for Google
5. Improve social sharing previews
6. Keep the implementation simple, fast and free

Do NOT add paid SEO tools/services.

Do NOT change the visual design unless required for SEO/accessibility.

Do NOT invent information, achievements, metrics, skills, companies or experience.

---

# 1. First Audit

Before changing anything, inspect:

- `app/` routes
- `app/layout.jsx`
- all `app/page.jsx`
- dynamic routes
- existing metadata
- existing `robots.txt`
- existing sitemap
- images
- fonts
- `"use client"`
- middleware
- redirects
- existing JSON-LD
- existing analytics

Reuse existing implementation where possible.

Do not create duplicate SEO files.

---

# 2. Central SEO Config

Create/use one SEO configuration.

Example:

```js
export const siteConfig = {
  name: "Niranjan Jagtap",
  url: "https://niranjanjagtap.me",
  description:
    "Niranjan Jagtap is a full stack developer skilled in React, Next.js, Express, Node.js, MongoDB and Tailwind CSS.",
  author: "Niranjan Jagtap",
};
````

The domain is defined in one place: `lib/seo.js` (`SITE_URL`). Never hardcode it elsewhere.

Use the real production domain.

Never use the Vercel preview URL as the canonical domain.

---

# 3. Homepage Metadata

Set meaningful global metadata.

Target:

```text
Title:
Niranjan Jagtap — Full Stack Developer

Description:
Niranjan Jagtap is a full stack developer skilled in React, Next.js, Express, Node.js, MongoDB and Tailwind CSS.
```

Use the actual portfolio content to improve the wording.

Do not keyword stuff.

---

# 4. Homepage H1

Ensure the homepage has exactly one primary H1.

Preferred:

```text
Niranjan Jagtap
```

The site's single `<h1>` in `app/page.jsx` is the name. The role line sits under it as a separate element — do not fold keywords into the H1.

---

# 5. Page-Specific Metadata

**This site is a single page.** There is one route (`/`), plus `robots.txt`, `sitemap.xml` and the 404 page. There are no `/about`, `/experience`, `/projects` or `/blog` routes — the sections are anchor-scroll targets on the homepage.

The homepage title and description (§3) are therefore the only page metadata, set once in `app/layout.jsx` from `lib/seo.js`.

If project detail pages or a blog are ever added, each needs a unique title and description, generated with `generateMetadata()` for dynamic routes. Do not use the same title/description on every page.

---

# 6. Canonical URLs

Every indexable page must have a canonical URL.

Use the production domain.

Examples:

```text
https://niranjanjagtap.me/
https://niranjanjagtap.me/robots.txt
https://niranjanjagtap.me/sitemap.xml
```

The canonical is set in `app/layout.jsx` (`alternates.canonical = "/"`, resolved against `metadataBase`). Do not canonicalize to Vercel preview URLs. Do not include tracking query parameters in canonicals.

---

# 7. Robots.txt

Create/use:

```text
app/robots.js
```

Production should effectively contain:

```text
User-agent: *
Allow: /

Sitemap: https://niranjanjagtap.me/sitemap.xml
```

The domain comes from `SITE_URL` in `lib/seo.js`. Do not accidentally block the entire website.

---

# 8. Sitemap

Create/use:

```text
app/sitemap.js
```

Include:

* Homepage (`https://niranjanjagtap.me/`)

The site is a single page, so the sitemap has exactly one entry. Preview deployments return an empty sitemap so they never compete with production.

If project detail pages or articles are ever added, include them here — generated from the actual data source. Do NOT include 404, admin, login, dashboard, private pages, API routes, drafts or nonexistent pages.

Only include publicly accessible, indexable URLs.

---

# 9. Preview Deployment SEO

Production:

```text
index: true
follow: true
```

Vercel preview deployments:

```text
index: false
follow: false
```

Do not allow preview deployments to compete with the real portfolio.

Use environment/deployment detection instead of hardcoding URLs.

---

# 10. Open Graph

Add Open Graph metadata.

Default image:

```text
public/me.jpeg
```

Current size is 413x531 (portrait). That is above the 200x200 minimum and works, but a dedicated **1200x630** `public/og-image.png` would render far better in link previews. If one is added, point `siteConfig.image` at it in `lib/seo.js` and update the declared width/height there too.

Include:

```text
og:title
og:description
og:url
og:image
og:type
og:site_name
```

For project/article pages, use their own title, description and image when available.

---

# 11. Twitter/X

Add:

```text
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  images: ["..."],
}
```

Use the same appropriate OG image when suitable.

---

# 12. Person JSON-LD

Add a `Person` JSON-LD schema to the portfolio.

Use only real information.

Example:

```js
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Niranjan Jagtap",
  "url": siteUrl,
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/niranjanj0524",
    "https://www.linkedin.com/in/niranjan-jagtap-816243318/"
  ]
}
```

Already implemented in `lib/seo.js` (`personJsonLd`), rendered by `app/layout.jsx`.

Only add social URLs that actually belong to Niranjan. Do not invent profiles. LeetCode is at `https://leetcode.com/u/NiranjanJagtap/` and may be added to `sameAs` if desired.

---

# 13. WebSite JSON-LD

Add a simple `WebSite` schema where appropriate:

```js
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Niranjan Jagtap",
  "url": siteUrl
}
```

Already implemented in `lib/seo.js` (`websiteJsonLd`). Avoid unnecessary schema.

---

# 14. Project Pages

**This site does not have project detail pages.** Projects are listed on the homepage (`projects` array in `app/page.jsx`) and link out to their live deployments or repositories:

```text
Placement Portal        → https://coding-savvy-placement-portal.vercel.app/signup
AI Resume Analyzer      → https://ai-resume-analyzer-nj.vercel.app/
Farm Labor Booking      → (deploy pending — add href when live)
```

If real project detail routes are ever added, each should contain useful real information: project name, what it does, problem, solution, technologies, architecture, Niranjan's contribution, results only if truthful, GitHub link if public, live demo if available.

Do not create separate SEO pages with duplicate content.

---

# 15. Project Metadata

Project detail pages do not exist (see §14), so there is no per-project metadata today. Project names and tech stacks live in the homepage content and are crawled as ordinary server-rendered HTML.

If detail pages are added, they must generate metadata from project data. Example:

```text
Title:
AI Resume Analyzer — Full Stack Project | Niranjan Jagtap

Description:
AI-powered resume analyzer built with Next.js, Tailwind CSS, MongoDB and an AI API for instant resume feedback.
```

Use the actual project details.

Do not make unsupported claims such as:

```text
Best
#1
World's leading
Most scalable
```

---

# 16. Blog SEO

**This site has no blog.** Do not add one purely for SEO.

If a blog is ever genuinely added, each article needs a unique title, unique description, canonical URL, author, published date, modified date when actually updated, Open Graph image, and Article JSON-LD where appropriate. Use `/blog/[slug]`.

Do not create AI-generated thin articles just for SEO.

Prefer genuine technical content based on actual development experience.

---

# 17. Internal Linking

This is a single-page site, so there are no routes to interlink. Internal linking means the nav and section anchors:

```text
Home (#home)
 ├── Experience (#experience)
 ├── Projects (#projects)
 ├── Skills (#skills)
 ├── Education (#education)
 └── Contact (#contact)
```

The nav (`components/site-nav.jsx`) must keep its `id`s in sync with the sections in `app/page.jsx` — a mismatch silently breaks scrolling.

External links (LinkedIn, GitHub, LeetCode, project live sites) open in a new tab with `rel="noopener noreferrer"`.

---

# 18. Semantic HTML

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

where appropriate.

Use headings semantically:

```text
H1
H2
H3
```

Do not use headings purely for styling.

---

# 19. Images

Audit all portfolio images.

Use `next/image` where appropriate.

Every meaningful image needs useful alt text.

Examples:

```text
Niranjan Jagtap — Full Stack Developer
Placement Portal interface
AI Resume Analyzer result view
```

Decorative images:

```text
alt=""
```

Do not keyword-stuff alt text.

---

# 20. Performance SEO

Audit the site for:

* Large images
* Unnecessary JavaScript
* Excessive `"use client"`
* Large dependencies
* Unnecessary third-party scripts
* Blocking fonts
* Layout shifts

For every `"use client"` component, determine whether it actually requires:

* state
* effects
* browser APIs
* event handlers

If not, consider making it a Server Component.

Do not break functionality while doing this.

---

# 21. Server-Rendered Content

Important SEO content should be available in server-rendered HTML where practical.

Especially:

* Name
* H1
* About
* Experience
* Projects
* Project descriptions
* Blog content

Avoid unnecessary:

```text
useEffect()
→ fetch API
→ render SEO content
```

when the same data can be rendered on the server.

---

# 22. 404

Ensure nonexistent pages return an actual 404.

For example:

```text
/projects/does-not-exist
```

must not return a normal 200 project page.

Use Next.js `not-found.jsx` / `notFound()` where appropriate.

---

# 23. Private Routes

Identify any:

```text
/admin
/dashboard
/login
/settings
/internal
```

or similar routes.

They must not be included in the sitemap.

Use appropriate authentication and `noindex` behavior where necessary.

Do not rely on robots.txt for security.

---

# 24. Middleware Audit

If middleware exists, make sure it does not accidentally block:

```text
/
robots.txt
sitemap.xml
public projects
public blog
```

Do not require authentication for public portfolio pages.

---

# 25. URL Consistency

Choose one canonical domain:

```text
https://niranjanjagtap.me
```

Ensure:

* HTTP → HTTPS
* www/non-www is consistent
* Canonicals use the same domain
* Sitemap uses the same domain
* OG URLs use the same domain

Avoid redirect chains.

---

# 26. SEO-Friendly Content

The homepage should naturally explain:

```text
Who is Niranjan?
What does Niranjan do?
What technologies do they work with?
What have they built?
What experience do they have?
How can someone contact them?
```

Use actual information from the portfolio.

Do not add artificial paragraphs solely for search engines.

---

# 27. Developer-Specific SEO

Naturally mention technologies that are actually demonstrated by the portfolio.

Examples, only if present:

```text
JavaScript
Next.js
React
Node.js
Express.js
Tailwind CSS
MongoDB
Mongoose
Supabase
Razorpay
Socket.IO
Docker
CI/CD
Python
Java
C++
```

Do not add a technology to SEO metadata just because it is a popular keyword.

The website content must support the claim.

---

# 28. Accessibility

Fix obvious SEO/accessibility problems:

* Missing image alt text
* Incorrect heading hierarchy
* Unlabeled inputs
* Unclear buttons
* Non-semantic clickable divs
* Missing navigation labels
* Poor keyboard accessibility

Do not add unnecessary ARIA.

---

# 29. Things NOT to Implement

Do NOT add:

* Paid SEO services
* Paid SEO APIs
* SEO subscription tools
* Keyword stuffing
* Hidden keywords
* Invisible text
* Fake reviews
* Fake ratings
* Fake backlinks
* Fake achievements
* Hundreds of location pages
* Duplicate pages
* AI-generated SEO spam
* Unnecessary schema
* Unnecessary dependencies

Use the existing Next.js/Vercel capabilities wherever possible.

---

# 30. Validation

After implementation run the project's existing:

```bash
npm run build
```

There is no lint or typecheck script — the project is plain JavaScript, and ESLint is not installed. Do not invent a lint command.

Then verify:

```text
/
 /robots.txt
 /sitemap.xml
```

Also verify:

```text
Homepage (all sections render)
/robots.txt (allows / in production)
/sitemap.xml (one entry in production, empty in preview)
A nonexistent URL → returns a real 404
```

Check:

* HTTP status
* `<title>`
* meta description
* canonical
* H1
* OG metadata
* Twitter metadata
* JSON-LD
* internal links
* images

---

# 31. Final SEO Checklist

Before finishing:

```text
[ ] Correct production domain configured (SITE_URL in lib/seo.js)
[ ] Homepage title
[ ] Homepage description
[ ] Homepage H1
[ ] Canonical URL
[ ] robots.txt
[ ] sitemap.xml
[ ] Preview deployments noindex
[ ] Open Graph
[ ] Twitter metadata
[ ] OG image
[ ] Person JSON-LD
[ ] WebSite JSON-LD
[ ] Section anchor links match nav ids
[ ] Semantic HTML
[ ] Image alt text
[ ] next/image where appropriate
[ ] Unnecessary "use client" audited
[ ] Important content server-rendered
[ ] Correct 404 behavior
[ ] No duplicate metadata
[ ] No keyword stuffing
[ ] npm run build passes
```

---

# 32. Important: Do Not Stop at Metadata

SEO implementation is NOT considered complete just because these exist:

```text
<title>
description
robots
sitemap
```

The agent must also check:

```text
crawlability
indexability
canonical URLs
server-rendered content
internal linking
semantic HTML
image optimization
performance
mobile usability
404 handling
duplicate content
```

The objective is a technically clean, fast and genuinely useful developer portfolio.

# 33. Agent Behavior

When executing this file:

1. Inspect first.
2. Make a plan.
3. Reuse existing architecture.
4. Implement only useful changes.
5. Keep dependencies minimal.
6. Do not change the visual design unnecessarily.
7. Do not invent personal information.
8. Run validation.
9. Report exactly what was changed.
10. Report anything that requires manual action.

For manual post-deployment work, mention:

```text
- Add/verify the domain in Google Search Console
- Submit /sitemap.xml
- Inspect the homepage and important project pages
- Check Core Web Vitals
```

Do not claim these manual steps were completed unless they actually were.

```
```
