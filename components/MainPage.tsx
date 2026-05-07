// MainPage — terminal-A direction.
// Replaces the existing card-grid layout with a single dark dev-formal theme.

import React, { useEffect } from "react";
import StickyNav from "./StickyNav.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Hero from "./Hero.jsx";
import NowPlaying from "./NowPlaying.jsx";
import CoffeeNow from "./CoffeeNow.jsx";

import publications from "../src/publications.jsx";

const RESEARCH = [
    {
        slug: "ai-for-se",
        title: "AI for SE",
        body: "I work at the intersection of artificial intelligence and software engineering. My work includes a novel SOTA hyper-parameter optimization method that requires 25% of the runtime and a novel oversampling method that improves defect prediction by up to 123%. My dissertation focused on better, faster deep learning for SE by using feedforward networks over static code features with theoretically-driven novel methods that outperform the prior state-of-the-art at a fraction of the cost.",
    },
    {
        slug: "theory-driven-dl",
        title: "Theory-Driven Deep Learning",
        body: "I work on theoretical and applied deep learning, especially with loss functions. A lot of my applied deep learning work involves using recent results from the theoretical literature, bridging the gap between the two. Examples of this can be seen in my work on automated microservice partitioning and hyper-parameter optimization. Much of my work involves optimizing for more favorable loss landscapes.",
    },
];

const PROJECTS = [
    {
        name: "Zotero RAG System",
        org: "rust",
        blurb: "RAG system for my Zotero library, with a custom academic-PDF parser that extracts text and equations.",
        link: "https://github.com/zotero-rag/zotero-rag",
        stack: ["Rust"],
    },
    {
        name: "Programmable Resumes",
        org: "DSL",
        blurb: "A syntax for modular resumes that allows generating multiple targeted CVs in parallel.",
        link: "https://github.com/yrahul3910/programmable-resumes/",
        stack: ["Python", "LaTeX"],
    },
    {
        name: "raise-utils",
        org: "lab tooling · 70k+ dl",
        blurb: "Centralized Python implementations of our lab's algorithms.",
        link: "https://pypi.org/project/raise-utils/",
        stack: ["Python"],
    },
    {
        name: "pysh",
        org: "language",
        blurb: "Superset of Python that allows inline shell command evaluation. Includes a transpiler and a VS Code extension.",
        link: "https://github.com/yrahul3910/pysh",
        stack: ["Python", "C++"],
    },
    {
        name: "JournalBear",
        org: "desktop",
        blurb: "Cross-platform journal app built with Electron, encrypted with AES-256.",
        link: "https://github.com/yrahul3910/journal",
        stack: ["Electron", "React", "shadcn/ui"],
    },
    {
        name: "Activity Data Analysis",
        org: "personal data",
        blurb: "Collected 10 months of activity data across 30 categories, then trained a 2-layer LSTM to predict the next activity from the previous five.",
        link: "https://github.com/yrahul3910/atracker-analysis",
        stack: ["Python"],
    },
];

const RESUME = [
    {
        years: "2024 → present",
        role: "Senior Data Scientist",
        org: "LexisNexis · Protégé",
        body: "Deep learning for legal document understanding at production scale.",
    },
    {
        years: "2019 — 2024",
        role: "Research Assistant",
        org: "RAISE Lab, NC State",
        body: "Loss functions, hyper-parameter optimization, defect prediction, AI for SE",
    },
];

const RESUME_DOWNLOADS = [
    {
        label: "Academic CV",
        href: "https://github.com/yrahul3910/resume/raw/master/pdf/academic.pdf",
    },
    {
        label: "ML Engineer CV",
        href: "https://github.com/yrahul3910/resume/raw/master/pdf/ml.pdf",
    },
    {
        label: "SWE CV",
        href: "https://github.com/yrahul3910/resume/raw/master/pdf/sde.pdf",
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
        body: "I brew my pour overs using the Orea v3, and my espresso using the Breville Barista Express and a Sette 270Wi. My favorite coffee so far was a Panama Geisha from Black & White Coffee Roasters.",
    },
    {
        label: "Taylor Swift",
        body: "I've been a big fan of Taylor Swift since 2018! My favorite era is the Lover era, although I currently have Speak Now on repeat.",
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
        label: "rahul@ryedida.me",
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
            <aside className="floating-modules">
                <NowPlaying />
                <CoffeeNow />
            </aside>

            <main>
                <Section id="resume" cmd="resume">
                    <h2>Resume</h2>
                    <div className="resume-list">
                        {RESUME.map((r, i) => (
                            <div key={i} className="resume-row">
                                <div className="resume-row__years">
                                    {r.years}
                                </div>
                                <div>
                                    <div className="resume-row__role">
                                        {r.role}
                                    </div>
                                    <div className="resume-row__org">
                                        {r.org}
                                    </div>
                                    <div className="resume-row__body">
                                        {r.body}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="resume-downloads">
                        <div className="resume-downloads__head">
                            // targeted CVs
                        </div>
                        {RESUME_DOWNLOADS.map((d) => (
                            <a
                                key={d.href}
                                href={d.href}
                                className="resume-downloads__link"
                            >
                                {d.label} <span>↗</span>
                            </a>
                        ))}
                    </div>
                </Section>

                <Section id="research" cmd="research">
                    <h2>Research Interests</h2>
                    <div className="research-grid">
                        {RESEARCH.map((r) => (
                            <article key={r.slug} className="research-card">
                                <div className="research-card__tag">
                                    # {r.slug}
                                </div>
                                <h3>{r.title}</h3>
                                <p>{r.body}</p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="pubs" cmd="publications">
                    <h2>Recent Publications</h2>
                    <table className="pubs-table">
                        <tbody>
                            {publications.map((p, i) => (
                                <tr key={i}>
                                    <td className="pubs-table__year">
                                        {p.year}
                                    </td>
                                    <td className="pubs-table__venue">
                                        <em>{p.publication}</em>
                                    </td>
                                    <td className="pubs-table__title">
                                        <span>{p.title}</span>
                                        <span className="pubs-table__authors">
                                            {p.authors}
                                        </span>
                                        <span className="pubs-table__links">
                                            {p.link && (
                                                <a href={p.link}>paper ↗ </a>
                                            )}
                                            {p.code && (
                                                <a href={p.code}>code ↗</a>
                                            )}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Section>

                <Section id="projects" cmd="projects">
                    <h2>Projects</h2>
                    <div className="projects-grid">
                        {PROJECTS.map((p) => (
                            <a
                                key={p.name}
                                className="project-card"
                                href={p.link}
                            >
                                <div className="project-card__head">
                                    <span className="project-card__name">
                                        {p.name}
                                    </span>
                                    <span className="project-card__org">
                                        {p.org}
                                    </span>
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

                <Section id="interests" cmd="interests">
                    <h2>Personal Interests</h2>
                    <div className="interests-grid">
                        {INTERESTS.map((it) => (
                            <div key={it.label} className="interest">
                                <h3>{it.label}</h3>
                                <p>{it.body}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="contact" cmd="contact">
                    <h2>Contact</h2>
                    <div className="contact-list">
                        <div className="contact-list__cmd">
                            $ contact --pick
                        </div>
                        {CONTACTS.map((c) => (
                            <a
                                key={c.kind}
                                className="contact-row"
                                href={c.href}
                            >
                                <span className="contact-row__arrow">→</span>
                                <span className="contact-row__kind">
                                    {c.kind.padEnd(10, "\u00A0")}
                                </span>
                                <span className="contact-row__val">
                                    {c.label}
                                </span>
                                {c.note && (
                                    <span className="contact-row__note">
                                        {c.note}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="exit">
                        exit<span className="exit__caret"></span>
                    </div>
                </Section>
            </main>
        </div>
    );
};

const Section = ({ id, cmd, children }) => (
    <section id={id} className="term-section">
        <div className="term-section__head">
            <span className="term-section__prompt">$</span>
            <span className="term-section__cmd">bat ./{cmd}.md</span>
            <span className="term-section__rule"></span>
        </div>
        {children}
    </section>
);

export default MainPage;
