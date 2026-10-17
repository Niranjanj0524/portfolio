# AGENTS.md

Single-package Next.js 15 portfolio site (App Router, React 19, plain JavaScript — no TypeScript, Tailwind v4). Not a monorepo; no tests, no lint script, no CI.

## Commands

```bash
npm run dev      # next dev --turbopack  -> http://localhost:3000
npm run build    # next build --turbopack
```

Verify changes with `npm run build`. There is no typecheck, lint, or test script. Do not invent lint/test commands — ESLint is not installed (existing `eslint-disable` comments are leftovers).

## Design system

The site follows **`DESIGN.md`** (root): monochrome dark, zero accent colors, flat (no shadows / gradients / blurs), uppercase display type with positive tracking, 1px `#3a3a3f` hairlines, ghost-outline pill CTAs, and **no decorative motion**. Tokens and the type scale live in `app/globals.css` (`@theme inline` + component classes `.display-xxl` / `.display-xl` / `.display-lg` / `.display-md` / `.body-lg` / `.body-md` / `.button-cap` / `.micro-cap` / `.caption`, plus `.btn-ghost`, `.link`, `.surface`, `.chip`, `.band`, `.wrap`). Read `DESIGN.md` before adding any color, radius, shadow, or animation.

## Structure

- `app/page.jsx` — the entire site as a **server component**: all content arrays (`LINKS`, `experience`, `projects`, `skillGroups`, `education`) plus the hero, contact/footer markup. No `useEffect`, no client state. GSAP runs via `MotionRoot`, not here.
- `components/site-nav.jsx` — the only client component: fixed overlay top nav + hamburger menu below **1024px** (`lg:`). Its `NAV_ITEMS`/`ALL_ITEMS` ids are a contract with `page.jsx`.
- `components/motion/motion-root.jsx` — the single GSAP client boundary: entry reveals, `ScrollTrigger` batches, hero parallax and education counters, all scoped to its root.
- `app/layout.jsx` — metadata (site is `https://niranjanjagtap.me`) and the Inter font (`--font-inter`), the DESIGN.md-sanctioned substitute for D-DIN.
- `lib/seo.js` — single source of truth for `SITE_URL`, `siteConfig`, `isProduction` and the JSON-LD graphs. `layout.jsx`, `robots.js` and `sitemap.js` all read from it — change the domain here and nowhere else.
- `lib/utils.js` (`cn()`), `components.json` — shadcn leftovers, currently unused but kept so `npx shadcn@latest add <component>` still works (`components.json` has `tsx: false`). Path alias `@/*` maps to the repo root (jsconfig `paths`).

## Gotchas

- **GSAP is installed and in use** (`gsap`, `@gsap/react`) — only inside `components/motion/motion-root.jsx` and the unused-but-kept `components/{LogoLoop,Magnet,SpotlightCard,SplitText}.jsx`. Don't add *new* animation libraries, CSS keyframes, marquees, or transitions longer than ~150ms without a request that overrides `DESIGN.md`.
- **Section ids are shared contract:** `app/page.jsx` sections must match the ids in `components/site-nav.jsx` (`NAV_ITEMS` / `ALL_ITEMS`) or the nav silently scrolls nowhere: `home`, `experience`, `projects`, `skills`, `education`, `contact`. (Achievements, positions of responsibility and certifications were removed; don't re-add their ids to the nav without adding the sections.)
- **Fixed nav clearance:** nav height is ~72px; `scroll-padding-top: 7rem` in `globals.css` keeps anchors from hiding under it. The hero band carries its own `pt-32`+ for the same reason.
- **The mobile menu is `absolute top-full`, not in-flow.** `visibility: hidden` still reserves layout space, so an in-flow menu would inflate the fixed header and cover the hero even while "closed". Keep it absolutely positioned.
- **Tailwind v4 has no `tailwind.config`.** Theme tokens live in `app/globals.css` under `@theme inline` (`--color-background`, `--color-foreground`, `--color-mute`, `--color-hairline`, `--color-soft`, `--font-sans`).
- **Display sizes stair-step** in `globals.css` media queries (80 → 60 → 48 → 40). Changing a tier class changes every heading on the site.
- Resume is `public/NiranjanJagtapResume.pdf`, linked as `/NiranjanJagtapResume.pdf` in `app/page.jsx`; renaming the file breaks the Download CV button.
- `gsapdocs.md` at the repo root is a reference cheat sheet only. GSAP **is** installed (`gsap`, `@gsap/react`) but only imported in `components/motion/motion-root.jsx` and the unused-but-kept `components/{LogoLoop,Magnet,SpotlightCard,SplitText}.jsx`. Don't import it into `page.jsx` — that file must stay a server component.
- `.opencode/skills/ui-ux/` contains a design skill (logo/icon/banner/mockup generation) available to sessions.

## Deploy

Vercel, no deploy config beyond defaults (`next.config.mjs` is empty). `.env*` is gitignored; the app currently reads no env vars.
