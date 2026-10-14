import Image from "next/image";
import SiteNav from "@/components/site-nav";
import MotionRoot from "@/components/motion/motion-root";

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

const LINKS = {
  email: "mailto:vivekjpatil1357@gmail.com",
  emailText: "vivekjpatil1357@gmail.com",
  phone: "tel:+917249099856",
  phoneText: "7249099856",
  linkedin: "https://linkedin.com/in/vivekjpatil1357",
  github: "https://github.com/vivekjpatil1357",
  leetcode: "https://leetcode.com/vivekjpatil1357",
  veltos: "https://veltos.ai",
  resume: "/VivekPatilResume.pdf",
  noorvic: "https://noorviclothing.com",
  virtualAssistant: "https://github.com/vivekjpatil1357/Virtual_AI_assistant_for_PC",
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const experience = [
  {
    period: "Jun 2025 – Present",
    title: "Software Developer Intern",
    company: "Veltos AI",
    href: LINKS.veltos,
    linkText: "veltos.ai",
    current: true,
    bullets: [
      "Led end-to-end development of Veltos.ai, designing NestJS backend services, DynamoDB schemas, S3 storage, authentication, WebSockets, and AWS infrastructure for a production platform.",
      "Migrated the backend from Next.js to NestJS and implemented persistent client-backend WebSocket communication with ping-pong heartbeats for connection health and reconnection handling.",
      "Designed a patch-based game versioning system, storing incremental changes instead of complete game snapshots, significantly reducing storage and payload overhead while supporting game version management and publishing.",
      "Implemented concurrency-safe subscription credit allocation, preventing duplicate or inconsistent credit grants during simultaneous active/renewal operations.",
      "Built a Redis-buffered Gamezone view counter with atomic operations and scheduled DynamoDB synchronization, reducing database write amplification and maintaining accurate counts under concurrent updates.",
      "Developed guest-to-user leaderboard migration, persisting anonymous scores against secure guest identifiers and automatically synchronizing them after authentication without trusting client-submitted scores.",
      "Built artifact-based GitHub Actions CI/CD with automated deployment to AWS Lightsail, configuring Nginx, Let's Encrypt TLS, and PM2 for production process management.",
      "Engineered game publishing, moderation, resource management, payment/subscription workflows, and performance optimizations including Redis caching, pagination, lazy loading, and SSR/CSR tuning.",
    ],
  },
  {
    period: "Jun 2023 – Aug 2023",
    title: "Python Django Trainee",
    company: "Sumago Infotech Pvt. Ltd.",
    current: false,
    bullets: [
      "Worked on Django while learning full-stack development.",
      "Gained experience in REST APIs, models and frontend-backend integration.",
    ],
  },
];

const projects = [
  {
    title: "E-Commerce Platform for Clothing Brand",
    tech: "Next.js, AWS S3, Razorpay",
    href: LINKS.noorvic,
    linkLabel: "noorviclothing.com",
    bullets: [
      "Designed, developed and deployed a production-grade e-commerce platform for a live fashion brand (noorviclothing.com) using Next.js deployed on Vercel with Cloudflare CDN, DNS, and caching, ensuring global low-latency content delivery.",
      "Designed a scalable architecture leveraging Redis for high-speed caching, and Neon PostgreSQL with Prisma ORM for optimized and reliable relational data management.",
      "Implemented cost-efficient S3 object storage with CDN-backed static delivery, built a complete admin panel for product and order management, and optimized media loading (preview GIFs, video poster fallback, lazy-loaded videos) to enhance performance under high traffic.",
    ],
  },
  {
    title: "Personal Virtual Assistant for PC",
    tech: "Electron.js, Flask, Gemini API",
    href: LINKS.virtualAssistant,
    linkLabel: "GitHub repository",
    bullets: [
      "Created an AI assistant with song playback, news, and weather, along with code error resolution.",
      "Designed a cross-platform desktop app with Electron.js and Flask.",
      "Added Gemini API (by Google) for live Q&A, news, weather, and music integration.",
    ],
  },
  {
    title: "Admission Process Tracking System",
    tech: "Next.js, PostgreSQL, Prisma, Upstash Redis",
    bullets: [
      "Led the development of coordinator-facing modules in a 4-team admission workflow platform, streamlining student movement across 12+ verification desks.",
      "Designed queue management and workflow orchestration systems to track student progress, processing status, and stage transitions throughout the admission process.",
      "Implemented near real-time synchronization using Redis caching, cache invalidation, polling, and database fallback mechanisms for low-latency updates across coordinator dashboards.",
      "Engineered scalable APIs and data models with Next.js, PostgreSQL, Prisma, and Upstash Redis, incorporating cache stampede prevention and background refresh strategies for high-concurrency workloads.",
    ],
  },
];

const skillGroups = [
  { title: "Programming Languages", items: ["C++", "Java", "Python", "JavaScript"] },
  { title: "Frameworks and Libraries", items: ["React.js", "Next.js", "Express.js", "Node.js"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    title: "AWS Services",
    items: [
      "EC2",
      "DynamoDB",
      "RDS",
      "S3",
      "ELB",
      "ASG",
      "SQS",
      "SNS",
      "CloudFront",
      "Lightsail",
    ],
  },
  {
    title: "Others",
    items: ["Data Structures and Algorithms (500+ LeetCode)", "Redis", "Docker", "GitHub Actions", "CI/CD"],
  },
];

const education = [
  {
    degree: "B.E. in Computer Engineering",
    school: "RMD Sinhgad School of Engineering, Pune",
    board: "Savitribai Phule Pune University, Pune · Full time",
    period: "Aug 2024 – May 2027",
    scoreLabel: "CGPA",
    score: "9.13",
    count: 9.13,
    decimals: 2,
    suffix: "",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "KCE's College of Engineering, Jalgaon",
    board: "Maharashtra State Board of Technical Education · Full time",
    period: "Jun 2021 – May 2024",
    scoreLabel: "Percentage",
    score: "87.77%",
    count: 87.77,
    decimals: 2,
    suffix: "%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Raosabheb Rupchand Lathi Vidyalaya, Jalgaon",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education · Full time",
    period: "Jun 2020 – Apr 2021",
    scoreLabel: "Percentage",
    score: "87.40%",
    count: 87.4,
    decimals: 2,
    suffix: "%",
  },
];

const achievements = [
  "Led the organizing team of an Inter-College Hackathon.",
  "Awarded Best Trainee at Sumago Infotech (2023).",
  "Winner of Zonal Level Inter-College Cricket Tournament (2024).",
  "Winner of Codechef 2025, RMD SSOE, Warje.",
  "Runner-ups in Avishkar SPPU Poster presentation Competition (2026).",
];

const certifications = [
  { name: "Data Structures and Algorithms in Python", issuer: "NPTEL", status: "Completed" },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "In progress · expected December 2026",
  },
];

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function SectionHead({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <header className="reveal mb-12 lg:mb-16">
      <p className="micro-cap text-mute">
        {index} · {kicker}
      </p>
      <h2 className="display-xl mt-2 text-white">{title}</h2>
    </header>
  );
}

function Chevron({ className = "" }: { className?: string }) {
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
              src="/me.JPG"
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
                Vivek Patil
              </h1>

              {/* Total experience — emphasized with a hairline rule and the
                  display tier, per DESIGN.md (monochrome, no accent color) */}
              <div className="hero-anim mt-7 flex items-baseline gap-x-5 border-t border-hairline pt-5">
                <p className="display-md text-white">1Y 4M</p>
                <p className="micro-cap text-mute">Total Experience</p>
              </div>

              <p className="hero-anim body-lg mt-8 max-w-[560px] text-white/75">
                Software Developer Intern at Veltos AI, Pune. B.E. in Computer
                Engineering from RMD Sinhgad School of Engineering, 9.13 CGPA.
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
                src="/me.JPG"
                alt="Vivek Patil - Software Developer"
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

            <div className="grid gap-5 md:grid-cols-3">
              {education.map((item) => (
                <article key={item.degree} className="surface reveal flex flex-col">
                  <p className="micro-cap text-mute">{item.period}</p>
                  <h3 className="display-md mt-4 text-white">{item.degree}</h3>
                  <p className="body-md mt-4 text-white/75">{item.school}</p>
                  <p className="caption mt-2 text-white/60">{item.board}</p>

                  <div className="mt-auto flex items-baseline justify-between gap-4 border-t border-hairline pt-6">
                    <span className="micro-cap text-mute">{item.scoreLabel}</span>
                    <span
                      className="text-2xl font-bold tabular-nums text-white"
                      data-count={item.count}
                      data-decimals={item.decimals}
                      data-suffix={item.suffix}
                    >
                      {item.score}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 05 ACHIEVEMENTS ================= */}
        <section id="achievements" className="band section-space">
          <div className="wrap">
            <SectionHead
              index="05"
              kicker="Recognition"
              title="Achievements and Extracurricular"
            />

            <ul className="border-t border-hairline">
              {achievements.map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-baseline gap-6 border-b border-hairline py-6"
                >
                  <span className="micro-cap w-8 shrink-0 text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="body-lg text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= 06 POSITIONS OF RESPONSIBILITY ================= */}
        <section id="positions" className="band band--ruled section-space">
          <div className="wrap grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
            <p className="micro-cap text-mute">Positions of Responsibility</p>
            <div className="reveal">
              <h2 className="display-lg text-white">Head of TECH CLUB</h2>
              <p className="body-lg mt-4 text-white/75">
                RMD Sinhgad School of Engineering, Warje
              </p>
            </div>
          </div>
        </section>

        {/* ================= 07 CERTIFICATIONS ================= */}
        <section id="certifications" className="band band--soft band--ruled section-space">
          <div className="wrap">
            <SectionHead index="07" kicker="Always learning" title="Certifications" />

            <ul className="border-t border-hairline">
              {certifications.map((item) => (
                <li
                  key={item.name}
                  className="reveal flex flex-col gap-2 border-b border-hairline py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="body-lg text-white">{item.name}</span>
                  <span className="micro-cap shrink-0 text-mute">
                    {item.issuer} · {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </main>

        {/* ================= CONTACT / FOOTER ================= */}
        <footer id="contact" className="band band--ruled section-space">
        <div className="wrap">
          <p className="micro-cap text-mute">08 · Contact</p>
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
              © 2026 Vivek Patil. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </MotionRoot>
    </>
  );
}
