"use client";

/* GSAP registration — imported once, client-only.
   Never import 'gsap/all'; pull exactly what is used so the bundle
   stays at core + ScrollTrigger (~40KB gzip). */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  /* iOS URL-bar resize re-fires ScrollTrigger and causes visible jank
     on scroll-linked tweens. Disables that refresh only; real layout
     changes still refresh. */
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, useGSAP };

/* DESIGN.md §Elevation — motion tokens.
   Single source of truth for every tween on the site. */
export const MOTION = {
  /** Entry: fade + translate-Y (16px → 0) over 540ms ease-out. */
  entryDuration: 0.54,
  entryY: 16,
  entryEase: "power2.out",
  /** Entry: staggered cascades for lists — 120ms between items. */
  stagger: 0.12,
  /** Hover: scale(1.03) + shadow lift over 200ms (CSS, not GSAP). */
  hoverScale: 1.03,
  hoverDuration: 0.2,
  /** Page transitions: fade + slide (300ms). */
  pageDuration: 0.3,
  /** Physics: spring stiffness 120, damping 20 → damping ratio 0.91
     (near-critical, slight overshoot). GSAP core has no spring solver;
     back.out(1.1) reproduces that settle without a plugin. */
  springEase: "back.out(1.1)",
  /** Performance: only transform and opacity are animated. */
} as const;
