"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION } from "@/lib/gsap";

/* ------------------------------------------------------------------
   MotionRoot — the single client boundary for the whole page.

   app/page.jsx stays a server component: its children stream in as
   server HTML and only this wrapper ships to the client. All GSAP
   runs inside one useGSAP() with `scope`, so selectors can't reach
   outside the tree and cleanup is automatic on unmount.

   Flash-free by construction: `.reveal` is hidden by CSS (gated on
   the `.js` class set in layout.jsx before first paint), and every
   tween below is gsap.to() toward the visible state — never .from().
   If JS never runs, nothing is ever hidden.
   ------------------------------------------------------------------ */

export default function MotionRoot({ children }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      /* Signal the inline failsafe in layout.jsx: GSAP booted, so the
         "reveal everything if GSAP never starts" timer can stand down. */
      el.setAttribute("data-gsap", "");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ---------------- Hero — mount timeline ---------------- */
        const hero = gsap.utils.toArray(".hero-anim", el);
        if (hero.length) {
          gsap.to(hero, {
            opacity: 1,
            y: 0,
            duration: MOTION.entryDuration,
            ease: MOTION.entryEase,
            stagger: MOTION.stagger,
            delay: 0.08,
          });
        }

        /* ---------- Entries — 540ms ease-out, 120ms cascade ---------- */
        const reveals = gsap.utils.toArray(".reveal", el);
        if (reveals.length) {
          ScrollTrigger.batch(reveals, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: MOTION.entryDuration,
                ease: MOTION.entryEase,
                stagger: MOTION.stagger,
                overwrite: true,
              }),
          });
        }

        /* ------------- Parallax — DESIGN.md: 3–5 layers ------------- */
        /* Transform/opacity only, scrubbed 1:1 to scroll. */
        const heroBand = el.querySelector("#home");
        if (heroBand) {
          const layers = [
            [".hero-portrait", 14],
            [".hero-copy", -6],
          ];
          layers.forEach(([selector, distance]) => {
            const target = el.querySelector(selector);
            if (!target) return;
            gsap.to(target, {
              yPercent: distance,
              ease: "none",
              scrollTrigger: {
                trigger: heroBand,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          });
        }

        /* ---------------- Counters — tabular, no CLS ---------------- */
        gsap.utils.toArray("[data-count]", el).forEach((node) => {
          const end = Number(node.dataset.count);
          const suffix = node.dataset.suffix ?? "";
          /* Explicit decimals, not derived from the float — `87.4` would
             otherwise stringify as "87.4" instead of "87.40". */
          const decimals = Number(node.dataset.decimals ?? 0);
          if (Number.isNaN(end)) return;

          const render = (value) => {
            node.textContent = `${value.toFixed(decimals)}${suffix}`;
          };

          /* Show 0 immediately so the number counts UP from zero rather
             than flashing the static value before the trigger fires. */
          const state = { value: 0 };
          render(0);

          gsap.to(state, {
            value: end,
            duration: 0.9,
            ease: MOTION.springEase,
            scrollTrigger: { trigger: node, start: "top 85%", once: true },
            onUpdate: () => render(state.value),
            onComplete: () => render(end),
          });
        });

        ScrollTrigger.refresh();
      });

      /* Fonts land after first measure and shift every trigger. */
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="contents" data-motion-root>
      {children}
    </div>
  );
}
