# Niranjan Jagtap — Portfolio

Personal portfolio site: [niranjanjagtap.me](https://niranjanjagtap.me). A single-page Next.js site covering experience, projects, skills, education and contact.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- **Plain JavaScript** — no TypeScript, no ESLint, no tests
- Tailwind CSS v4 (no `tailwind.config`; tokens live in `app/globals.css`)
- [GSAP](https://gsap.com) + ScrollTrigger for scroll reveals and counters
- [Inter](https://vercel.com/font) via `next/font` (the DESIGN.md-sanctioned stand-in for D-DIN)
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Where the content lives

Everything on the page is plain data — no CMS, no markdown:

| File | What's in it |
| --- | --- |
| `app/page.jsx` | All content arrays (`LINKS`, `experience`, `projects`, `skillGroups`, `education`) and the hero, contact and footer markup |
| `lib/seo.js` | The domain (`SITE_URL`), metadata copy, `isProduction` and the JSON-LD graphs — read by `layout.jsx`, `robots.js` and `sitemap.js` |
| `components/site-nav.jsx` | Top nav + mobile hamburger menu |
| `components/motion/motion-root.jsx` | GSAP entry reveals, scroll-triggered counters, hero parallax |
| `app/globals.css` | Design tokens and the type scale |
| `public/me.jpeg` | Portrait (413×531) |
| `public/NiranjanJagtapResume.pdf` | Download CV target |

To update your details, edit the arrays at the top of `app/page.jsx` and the copy in `lib/seo.js`. Keep the section `id`s in `page.jsx` in sync with `NAV_ITEMS`/`ALL_ITEMS` in `site-nav.jsx` — a mismatch silently breaks nav scrolling.

## Project structure

```
app/
  layout.jsx       # metadata, fonts, JSON-LD
  page.jsx         # the entire site
  not-found.jsx    # 404
  robots.js        # robots.txt
  sitemap.js       # sitemap.xml
  globals.css      # design system
components/
  site-nav.jsx
  motion/motion-root.jsx
lib/
  seo.js
  utils.js
public/
  me.jpeg
  NiranjanJagtapResume.pdf
```

## Design

The visual language is documented in [`DESIGN.md`](./DESIGN.md): monochrome dark, zero accent colors, flat surfaces, uppercase display type with positive tracking, 1px hairlines and ghost-outline pill CTAs. Read it before adding any color, radius, shadow or animation.

The SEO rules live in [`SEO.md`](./SEO.md).

## Deploy

Deployed on [Vercel](https://vercel.com) with no extra configuration (`next.config.mjs` is empty). Preview deployments automatically get `noindex` and a disallowing `robots.txt` so they never compete with production — see `isProduction` in `lib/seo.js`.
