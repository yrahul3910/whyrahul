// Sticky terminal-style top nav — replaces the old StickyNav.
// Uses anchor scroll (no scrollIntoView per project guidelines preserved upstream).

import React, { useEffect, useState } from "react";

const SECTIONS = [
    { id: "resume", label: "resume" },
    { id: "research", label: "research" },
    { id: "pubs", label: "publications" },
    { id: "projects", label: "projects" },
    { id: "interests", label: "interests" },
    { id: "contact", label: "contact" },
];

export default function StickyNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 720) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const go = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <nav className={`term-nav ${open ? "expanded" : ""}`}>
            <div className="term-nav__brand">
                <span className="term-nav__prompt">~/rahul</span>
                <span className="term-nav__cursor">$</span>
            </div>
            <button
                aria-label="Toggle menu"
                className="term-nav__hamburger"
                onClick={() => setOpen((o) => !o)}
            >
                <i className="fas fa-bars"></i>
            </button>
            <ul className="term-nav__list">
                {SECTIONS.map((s) => (
                    <li key={s.id}>
                        <a href={`#${s.id}`} onClick={go(s.id)}>
                            ./{s.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="term-nav__status">
                <span className="term-nav__dot"></span>online
            </div>
        </nav>
    );
}
