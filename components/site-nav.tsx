"use client";

import { useEffect, useState, type MouseEvent } from "react";

/* nav-bar-overlay — fixed top nav, transparent over the black canvas.
   Background {colors.canvas-night}, text {colors.on-primary},
   items {typography.button-cap} / {typography.micro-cap} (uppercase).
   Collapses to a hamburger below 768px (menu keeps the dark treatment).

   z-index follows the DESIGN.md contract: sticky-nav = 100.
   Active item uses a white underline — DESIGN.md specifies an accent
   color indicator, but the palette is monochrome, so white is it. */

const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const ALL_ITEMS = [
  ...NAV_ITEMS.slice(0, 4),
  { id: "achievements", label: "Achievements" },
  { id: "positions", label: "Responsibility" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/* SEO.md §17 — nav items are real fragment links (crawlable, work without
   JS). With JS we preventDefault so the existing smooth scroll still runs. */
const jump = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function SiteNav({ resumeHref }: { resumeHref: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* Active-section indicator: the section whose top has most recently
     crossed the nav line owns the underline. */
  useEffect(() => {
    const ids = [...ALL_ITEMS.map((item) => item.id), "home"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-72px 0px -70% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-hairline bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(event) => jump(event, "home")}
          className={`button-cap text-[15px] ${
            active === "home" ? "text-white" : "text-mute"
          }`}
        >
          Vivek Patil
        </a>

        {/* Desktop nav items */}
        <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => jump(event, item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={`micro-cap relative transition-colors duration-200 hover:text-white ${
                active === item.id ? "text-white" : "text-mute"
              }`}
            >
              {item.label}
              {/* Active indicator — underline draws in over 200ms */}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-white transition-transform duration-200 ${
                  active === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={resumeHref}
            download
            className="btn-ghost hidden min-h-[44px] px-6 py-3 text-[12px] lg:inline-flex"
          >
            Download CV
          </a>

          {/* Hamburger — below 768px */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-hairline bg-background lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-transform duration-150 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-5 bg-white ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-white transition-transform duration-150 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu — dark overlay treatment.
          Page transition: fade + slide, 300ms (DESIGN.md §Elevation).
          Always mounted so it can animate out; visibility handles the
          a11y/display part, transform+opacity only. */}
      <nav
        aria-label="Sections"
        aria-hidden={!open}
        className={`border-b border-hairline bg-background px-6 pb-6 pt-2 transition-[opacity,transform] duration-300 ease-out lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {ALL_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => {
              jump(event, item.id);
              setOpen(false);
            }}
            tabIndex={open ? 0 : -1}
            className="micro-cap block w-full border-b border-hairline py-3 text-left text-mute transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </a>
        ))}
        <a
          href={resumeHref}
          download
          className="btn-ghost mt-6 w-full"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
