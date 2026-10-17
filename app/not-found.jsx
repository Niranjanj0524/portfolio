import Link from "next/link";

/* SEO.md §22 — a real 404 (Next returns the 404 status code automatically).
   Styled in the DESIGN.md language: black band, hairline eyebrow,
   uppercase display headline, single ghost pill CTA. No motion, no accent. */
export default function NotFound() {
  return (
    <main className="band flex min-h-[100svh] items-center">
      <div className="wrap py-32">
        <p className="micro-cap text-mute">Error 404</p>

        <h1 className="display-xl mt-2 text-white">Page not found</h1>

        <p className="body-lg mt-6 max-w-[520px] text-white/75">
          This page does not exist or has been moved. Head back to the homepage
          to see experience, projects and contact details.
        </p>

        <div className="mt-10">
          <Link className="btn-ghost" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
