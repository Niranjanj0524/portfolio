import Image from "next/image";
import SiteNav from "@/components/site-nav";
import MotionRoot from "@/components/motion/motion-root";

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

const LINKS = {
  email: "mailto:niranjanjagtap0524@gmail.com",
  emailText: "niranjanjagtap0524@gmail.com",
  phone: "tel:+919503620524",
  phoneText: "9503620524",
  linkedin: "https://www.linkedin.com/in/niranjan-jagtap-816243318/",
  github: "https://github.com/niranjanj0524",
  leetcode: "https://leetcode.com/u/NiranjanJagtap/",
  resume: "/NiranjanJagtapResume.pdf",
  portal: "https://coding-savvy-placement-portal.vercel.app/signup",
  resumeAnalyzer: "https://ai-resume-analyzer-nj.vercel.app/",
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const experience = [
  {
    period: "Jan 2026 – Feb 2026",
    title: "Full Stack Intern",
    company: "Coding Savvy",
    current: false,
    bullets: [
      "Developed features for a live Placement Portal using Next.js and Tailwind CSS.",
      "Built responsive UI components and user-friendly workflows.",
      "Implemented backend logic and SQL CRUD operations using Next.js Server Actions and Supabase.",
      "Managed authentication and deployed the application to production.",
    ],
  },
];

const projects = [
  {
    title: "Placement Portal",
    tech: "Next.js, Tailwind CSS, Supabase, Vercel",
    href: LINKS.portal,
    linkLabel: "Live site",
    bullets: [
      "Developed the frontend of a Placement Portal using Next.js for managing opportunities and applications.",
      "Built responsive UI components with Tailwind CSS and integrated role-based authentication using Supabase.",
      "Implemented CRUD features and deployed the application on Vercel with Supabase backend.",
    ],
  },
  {
    title: "AI Resume Analyzer",
    tech: "Next.js, Tailwind CSS, MongoDB, Vercel, AI API",
    href: LINKS.resumeAnalyzer,
    linkLabel: "Live site",
    bullets: [
      "Developed a full-stack AI-based Resume Analyzer using Next.js to provide instant resume feedback and improvement suggestions.",
      "Designed responsive and user-friendly UI components using Tailwind CSS for resume upload and result display.",
      "Integrated AI API for resume evaluation and managed frontend-backend data flow.",
      "Implemented authentication and secure data handling with MongoDB for the database.",
      "Deployed the application on Vercel with MongoDB as the database backend.",
    ],
  },
  {
    title: "Farm Labor Booking Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, JWT, Razorpay, Socket.IO",
    bullets: [
      "Full-stack web application connecting farmers with agricultural laborers.",
      "Frontend built with React.js and Tailwind CSS; backend on Node.js and Express with MongoDB and Mongoose.",
      "Authentication with JWT and bcrypt, payments with Razorpay, and real-time chat with Socket.IO.",
      "Features: job posting, labor booking, applications, attendance, payments, ratings, notifications, and admin dashboard.",
    ],
  },
];

const skillGroups = [
  { title: "Programming Languages", items: ["C++", "JavaScript", "Java", "Python"] },
  {
    title: "Frameworks and Libraries",
    items: ["React.js", "Express.js", "Node.js", "Next.js"],
  },
  {
    title: "Tools",
    items: ["Visual Studio Code", "Vercel", "ShadCN", "GitHub", "Postman"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Others",
    items: [
      "Data Structures and Algorithms (200+ LeetCode)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

const education = [
  {
    degree: "B.E. in Computer Engineering",
    school: "RMD Sinhgad School of Engineering, Pune",
    board: "Relevant Coursework: Computer Networks, Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Operating System, Microprocessors",
    period: "Aug 2023 – May 2027",
  },
];

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function SectionHead({ index, kicker, title }) {
  return (
    <header className="reveal mb-12 lg:mb-16">
      <p className="micro-cap text-mute">
        {index} · {kicker}
      </p>
      <h2 className="display-xl mt-2 text-white">{title}</h2>
    </header>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path d="M5 11L11 5M11 5H6M11 5V10" strokeLinecap="square" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <SiteNav resumeHref={LINKS.resume} />

      <MotionRoot>
        <main>
        {/* ================= HERO — full-viewport band ================= */}
        <section id="home" className="band overflow-hidden">
          {/* Portrait, full-bleed off the left edge (desktop) */}
          <div className="hero-portrait pointer-events-none absolute inset-y-0 left-0 hidden w-[40vw] max-w-[600px] lg:block">
            <Image
              src="/me.jpeg"
              alt=""
              fill
              priority
              sizes="40vw"
              className="-translate-x-[8%] object-contain object-bottom"
            />
          </div>

          <div className="wrap relative flex min-h-[92svh] flex-col justify-center pb-16 pt-32 lg:min-h-[100svh] lg:pb-24 lg:pt-40">
            <div className="hero-copy max-w-[720px] lg:ml-auto lg:max-w-[540px]">
              <p className="hero-anim micro-cap text-mute">
                Pune, Maharashtra, India
              </p>

              <h1 className="hero-anim display-xxl mt-6 text-white">
                Niranjan Jagtap
              </h1>

              {/* Total experience — emphasized with a hairline rule and the
                  display tier, per DESIGN.md (monochrome, no accent color).
                  flex-wrap so the two labels stack instead of overflowing
                  on narrow phones. */}
              <div className="hero-anim mt-7 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-hairline pt-5">
                <p className="display-md text-white">Full Stack Intern</p>
                <p className="micro-cap text-mute">Coding Savvy</p>
              </div>

              <p className="hero-anim body-lg mt-8 max-w-[560px] text-white/75">
                Full stack developer skilled in React, Next.js, Express and
                Node.js. Built and deployed a Placement Portal and an AI Resume
                Analyzer with Supabase. B.E. in Computer Engineering from RMD
                Sinhgad School of Engineering, Pune.
              </p>

              <div className="hero-anim mt-10">
                <a className="btn-ghost" href={LINKS.resume} download>
                  Download CV
                </a>
              </div>
            </div>

            {/* Portrait (mobile / tablet) */}
            <div className="hero-portrait relative mt-12 h-[340px] sm:h-[420px] lg:hidden">
              <Image
                src="/me.jpeg"
                alt="Niranjan Jagtap - Full Stack Developer"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* ================= 01 EXPERIENCE ================= */}
        <section id="experience" className="band section-space">
          <div className="wrap">
            <SectionHead index="01" kicker="Where I've worked" title="Experience" />

            <div className="border-t border-hairline">
              {experience.map((job) => (
                <article
                  key={job.title}
                  className="reveal grid gap-6 border-b border-hairline py-10 lg:grid-cols-[190px_1fr] lg:gap-12"
                >
                  <div className="flex flex-wrap items-baseline gap-4 lg:block">
                    <p className="micro-cap text-mute">{job.period}</p>
                    {job.current && (
                      <p className="micro-cap text-white lg:mt-2">Current</p>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <h3 className="display-md text-white">{job.title}</h3>
                      <p className="micro-cap text-mute">{job.company}</p>
                    </div>

                    {job.href && (
                      <a
                        className="link body-md mt-3 inline-flex items-center gap-2"
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.linkText}
                        <Chevron />
                      </a>
                    )}

                    <ul className="body-md mt-6 list-disc space-y-4 pl-5 text-white/75 marker:text-white/50">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 02 PROJECTS ================= */}
        <section id="projects" className="band band--soft band--ruled section-space">
          <div className="wrap">
            <SectionHead index="02" kicker="Things I've built" title="Projects" />

            <div className="border-t border-hairline">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="reveal grid gap-6 border-b border-hairline py-10 lg:grid-cols-[1fr_240px] lg:gap-12"
                >
                  <div>
                    <h3 className="display-lg text-white">{project.title}</h3>
                    <p className="micro-cap mt-4 text-mute">{project.tech}</p>

                    <ul className="body-md mt-6 list-disc space-y-4 pl-5 text-white/75 marker:text-white/50">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:pt-2 lg:text-right">
                    {project.href && (
                      <a
                        className="link body-md inline-flex items-center gap-2"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel}
                        <Chevron />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 03 SKILLS ================= */}
        <section id="skills" className="band section-space">
          <div className="wrap">
            <SectionHead
              index="03"
              kicker="Toolkit"
              title="Skills and Abilities"
            />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16">
              {skillGroups.map((group) => (
                <div key={group.title} className="reveal">
                  <h3 className="micro-cap eyebrow-rule text-mute">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 04 EDUCATION ================= */}
        <section id="education" className="band band--soft band--ruled section-space">
          <div className="wrap">
            <SectionHead index="04" kicker="Academics" title="Education" />

            <div className="grid gap-5 md:max-w-[860px]">
              {education.map((item) => (
                <article key={item.degree} className="surface reveal flex flex-col">
                  <p className="micro-cap text-mute">{item.period}</p>
                  <h3 className="display-md mt-4 text-white">{item.degree}</h3>
                  <p className="body-md mt-4 text-white/75">{item.school}</p>
                  <p className="caption mt-2 text-white/60">{item.board}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </main>

        {/* ================= CONTACT / FOOTER ================= */}
        <footer id="contact" className="band band--ruled section-space">
        <div className="wrap">
          <p className="micro-cap text-mute">05 · Contact</p>
          <h2 className="display-xl reveal mt-2 text-white">Get in touch</h2>

          <div className="reveal mt-10">
            <a className="btn-ghost" href={LINKS.email}>
              {LINKS.emailText}
            </a>
          </div>

          <div className="reveal mt-14 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="micro-cap text-mute">Phone</p>
              <a className="link body-md mt-2 inline-block" href={LINKS.phone}>
                {LINKS.phoneText}
              </a>
            </div>

            <div>
              <p className="micro-cap text-mute">Profiles</p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                <a
                  className="link body-md"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="link body-md"
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="link body-md"
                  href={LINKS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </div>
            </div>

            <div>
              <p className="micro-cap text-mute">Location</p>
              <p className="body-md mt-2 text-white/75">Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="mt-12 border-t border-hairline pt-6">
            <p className="caption text-white/60">
              © 2026 Niranjan Jagtap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </MotionRoot>
    </>
  );
}
