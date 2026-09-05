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

    return (
        <nav aria-label="Main navigation" className={`term-nav ${open ? "expanded" : ""}`}>
            <a className="term-nav__brand" href="#hero" onClick={() => setOpen(false)}>
                ~/rahul
            </a>
            <button
                type="button"
                aria-expanded={open}
                aria-controls="section-navigation"
                className="term-nav__hamburger"
                onClick={() => setOpen((o) => !o)}
            >
                {open ? "Close" : "Menu"}
            </button>
            <ul id="section-navigation" className="term-nav__list">
                {SECTIONS.map((s) => (
                    <li key={s.id}>
                        <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                            {s.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
