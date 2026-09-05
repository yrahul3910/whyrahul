import React from "react";

export default function Hero() {
    return (
        <header id="hero" className="hero">
            <div className="hero__grid">
                <div className="hero__left">
                    <h1 className="name">Rahul Yedida</h1>
                    <p className="hero__role">
                        Senior Data Scientist I at LexisNexis
                    </p>
                    <p className="hero__bio">
                        I lead development of an agentic legal drafting system.
                        I work on retrieval, evaluation, and making LLM-based products
                        faster, and build tools to inspect and debug their behavior.
                        My PhD at NC State focused on theory-driven deep learning for
                        software engineering. I&apos;m also a Google Developer Expert
                        in ML and Google Cloud.
                    </p>
                    <p className="hero__bio">
                        Outside of work, I enjoy writing and configuring tools that I need and use,
                        and just writing code for fun.
                        These include a journaling app, a Q&amp;A system for my
                        Zotero library, and most recently, a DreamBerd interpreter.
                    </p>
                    <div className="hero__links">
                        <a href="https://github.com/yrahul3910">GitHub</a>
                        <a href="mailto:hello@ryedida.me">Email</a>
                    </div>
                </div>
                <figure className="hero__portrait">
                    <img src="/portrait.jpg" alt="Rahul Yedida" />
                </figure>
            </div>
        </header>
    );
}
