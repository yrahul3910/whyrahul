import React, { useEffect } from "react";
import StickyNav from "./StickyNav.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Hero from "./Hero.jsx";

import publications from "../src/publications.jsx";

const RESEARCH = [
  {
    slug: "ai-for-se",
    title: "AI for SE",
    body: "My PhD work applied deep learning to defect prediction, code smell detection, and microservice partitioning. It improved defect prediction F1 scores by up to 123% over prior state-of-the-art methods. I also studied semi-supervised static analysis, achieving state-of-the-art results with 10% of the labels.",
  },
  {
    slug: "theory-driven-dl",
    title: "Theory-driven deep learning",
    body: "I'm interested in using learning theory to guide model and loss-function design. My hyper-parameter optimization method outperformed prior state-of-the-art methods and ran 36.4% faster. At LexisNexis, I developed a contrastive-loss-based passage filter with a median latency of 12ms.",
  },
];

const PROJECTS = [
  {
    name: "1 Billion Row Challenge",
    org: "performance",
    blurb:
      "A Zig implementation that processes a billion rows in 1.20 seconds on a 14-core M4 Pro, using mmap, Robin Hood hashing, and packed SIMD.",
    link: "https://github.com/yrahul3910/1brc",
    stack: ["Zig"],
  },
  {
    name: "Q&A for Zotero",
    org: "academic search",
    blurb:
      "Question answering and semantic search over a Zotero library, with a custom academic-PDF parser and a multi-provider RAG library supporting tool calls.",
    link: "https://github.com/zotero-rag/zotero-rag/",
    stack: ["Rust", "SQLite", "LanceDB"],
  },
  {
    name: "JournalBear",
    org: "journaling",
    blurb:
      "Cross-platform journaling with AES-256 encryption, an Electron desktop app, and separate native apps for iOS and macOS.",
    link: "https://github.com/yrahul3910/journal",
    stack: ["TypeScript", "React", "Zustand", "Electron", "SwiftUI"],
  },
  {
    name: "Programmable Resumes",
    org: "developer tools",
    blurb:
      "A specification and implementation for modular, customizable resumes, with support for two LaTeX templates. I use it to write my own resume.",
    link: "https://github.com/yrahul3910/programmable-resumes",
    stack: ["Python", "LaTeX"],
  },
  {
    name: "raise-utils",
    org: "research tooling / 73k+ downloads",
    blurb:
      "An ML utilities package I developed for reproducible experiments, used by multiple research groups.",
    link: "https://pypi.org/project/raise-utils/",
    stack: ["Python", "Keras"],
  },
  {
    name: "pysh",
    org: "language",
    blurb:
      "A superset of Python for running shell code natively, with a VS Code syntax-highlighting extension.",
    link: "https://github.com/yrahul3910/pysh",
    stack: ["C++", "TMLanguage"],
  },
];

const RESUME = [
  {
    years: "2024 - present",
    role: "Senior Data Scientist I",
    org: "LexisNexis Legal & Professional",
    body: "Reduced product runtime by 24.8%. On a three-person team, improved complaint drafting usefulness from 40% to 86% in attorney reviews. Built debugging tools in Rust and React.",
  },
  {
    years: "2019 - 2024",
    role: "PhD Student",
    org: "NC State / Advisor: Tim Menzies",
    body: "Completed a PhD in Computer Science. Teaching assistant for 830 students across five semesters, covering C and Software Tools, Software Engineering, and Automated Software Engineering.",
  },
];

const RESUME_DOWNLOADS = [
  {
    label: "Academic CV",
    href: "https://github.com/yrahul3910/resume/raw/master/pdf/RahulYedida_ResearchScientist.pdf",
  },
  {
    label: "ML Engineer CV",
    href: "https://github.com/yrahul3910/resume/raw/master/pdf/RahulYedida_MLEngineer.pdf",
  },
  {
    label: "SWE CV",
    href: "https://github.com/yrahul3910/resume/raw/master/pdf/RahulYedida_SoftwareEngineer.pdf",
  },
  {
    label: "Master CV",
    href: "https://github.com/yrahul3910/resume/blob/master/pdf/master.pdf",
  },
  {
    label: "Research statement",
    href: "https://github.com/yrahul3910/whyrahul/raw/master/assets/research_statement.pdf",
  },
  {
    label: "Teaching statement",
    href: "https://github.com/yrahul3910/whyrahul/raw/master/assets/teaching_statement.pdf",
  },
];

const INTERESTS = [
  {
    label: "Coffee",
    body: "I brew pour overs using a V60, and espresso using the Breville Barista Express and a Sette 270Wi. My favorite coffee so far was a Panama Geisha from Black & White Coffee Roasters.",
  },
  {
    label: "Taylor Swift",
    body: "I've been a big fan of Taylor Swift since 2018! My favorite era is the Lover era, although I currently have TTPD on repeat.",
  },
  {
    label: "Digital Privacy & OSS",
    body: "I annually donate to organizations that actively fight for users' rights online and popular open-source projects I use and believe in. This includes the EFF, Mozilla Foundation, Software in the Public Interest, core-js, and neovim.",
  },
  {
    label: "Reading",
    body: "I enjoy reading well-written technical material for leisure. Right now, I'm reading Designing Data-Intensive Applications, The Staff Engineer's Path, and The ABCs of How We Learn.",
  },
];

const CONTACTS = [
  {
    kind: "email",
    label: "hello@ryedida.me",
    href: "mailto:hello@ryedida.me",
    note: "preferred",
  },
  {
    kind: "scholar",
    label: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=0lP2AvkAAAAJ&hl=en",
  },
  {
    kind: "github",
    label: "github.com/yrahul3910",
    href: "https://github.com/yrahul3910",
  },
  {
    kind: "linkedin",
    label: "linkedin.com/in/rahul-yedida",
    href: "https://www.linkedin.com/in/rahul-yedida/",
  },
  {
    kind: "google",
    label: "g.dev/ryedida",
    href: "https://g.dev/ryedida",
  },
  {
    kind: "twitter",
    label: "@rahulyedida13",
    href: "https://twitter.com/rahulyedida13",
  },
];

const MainPage = () => {
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("scroll-button");
      if (!el) return;
      if (window.scrollY > 200) el.classList.add("visible");
      else el.classList.remove("visible");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="term">
      <ScrollToTop />
      <StickyNav />
      <Hero />

      <main>
        <Section id="resume">
          <h2 id="resume-heading">Resume</h2>
          <div className="resume-list">
            {RESUME.map((r, i) => (
              <div key={i} className="resume-row">
                <div className="resume-row__years">{r.years}</div>
                <div>
                  <div className="resume-row__role">{r.role}</div>
                  <div className="resume-row__org">{r.org}</div>
                  <div className="resume-row__body">{r.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="resume-downloads">
            {RESUME_DOWNLOADS.map((d) => (
              <a key={d.href} href={d.href} className="resume-downloads__link">
                {d.label} <span>↗</span>
              </a>
            ))}
          </div>
        </Section>

        <Section id="research">
          <h2 id="research-heading">Research interests</h2>
          <div className="research-grid">
            {RESEARCH.map((r) => (
              <article key={r.slug} className="research-card">
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="pubs">
          <h2 id="pubs-heading">Publications</h2>
          <table className="pubs-table">
            <tbody>
              {publications.map((p, i) => (
                <tr key={i}>
                  <td className="pubs-table__year">{p.year}</td>
                  <td className="pubs-table__venue">
                    <em>{p.publication}</em>
                  </td>
                  <td className="pubs-table__title">
                    <span>{p.title}</span>
                    <span className="pubs-table__authors">{p.authors}</span>
                    <span className="pubs-table__links">
                      {p.link && <a href={p.link}>paper ↗ </a>}
                      {p.code && <a href={p.code}>code ↗</a>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section id="projects">
          <h2 id="projects-heading">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <a key={p.name} className="project-card" href={p.link}>
                <div className="project-card__head">
                  <span className="project-card__name">{p.name}</span>
                  <span className="project-card__org">{p.org}</span>
                </div>
                <p>{p.blurb}</p>
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section id="interests">
          <h2 id="interests-heading">Personal interests</h2>
          <div className="interests-grid">
            {INTERESTS.map((it) => (
              <div key={it.label} className="interest">
                <h3>{it.label}</h3>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <h2 id="contact-heading">Contact</h2>
          <div className="contact-list">
            {CONTACTS.map((c) => (
              <a key={c.kind} className="contact-row" href={c.href}>
                <span className="contact-row__kind">{c.kind}</span>
                <span className="contact-row__val">{c.label}</span>
                {c.note && <span className="contact-row__note">{c.note}</span>}
              </a>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
};

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => (
  <section id={id} className="term-section" aria-labelledby={`${id}-heading`}>
    {children}
  </section>
);

export default MainPage;
