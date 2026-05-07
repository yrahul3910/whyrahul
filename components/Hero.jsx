// Boot sequence + hero. Hides itself after a short typed lead-in.

import React, { useEffect, useState } from "react";

const BOOT = [
    { t: "$ ", body: "whoami", kind: "cmd" },
    { t: "", body: "rahul", kind: "out" },
    { t: "$ ", body: "cat /etc/hostname", kind: "cmd" },
    { t: "", body: "ryedida.me", kind: "out" },
    { t: "$ ", body: "./welcome --formal --dev", kind: "cmd" },
    { t: "→ ", body: "initializing...", kind: "info" },
    { t: "→ ", body: "ready.", kind: "ok" },
];

export default function Hero() {
    const [step, setStep] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (step >= BOOT.length) {
            const t = setTimeout(() => setDone(true), 350);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => setStep((s) => s + 1), 180);
        return () => clearTimeout(t);
    }, [step]);

    return (
        <header id="hero" className="hero">
            <div className="hero__grid">
                <div className="hero__left">
                    {!done ? (
                        <div className="hero__boot">
                            {BOOT.slice(0, step).map((l, i) => (
                                <div key={i} className={`hero__line hero__line--${l.kind}`}>
                                    <span className="hero__line-prompt">{l.t}</span>
                                    {l.body}
                                </div>
                            ))}
                            <span className="hero__caret"></span>
                        </div>
                    ) : (
                        <>
                            <div className="hero__cmd">
                                <span className="hero__line-prompt">$ </span>./identify
                            </div>
                            <h1 className="name">Rahul Yedida</h1>
                            <ul className="hero__kv">
                                <li><span>role</span><span>Senior Data Scientist</span></li>
                                <li><span>org</span><span>LexisNexis</span></li>
                                <li><span>product</span><span>Protégé</span></li>
                                <li><span>phd</span><span>NC State, 2024</span></li>
                                <li><span>loc</span><span>Raleigh, NC</span></li>
                            </ul>
                            <p className="hero__bio">
                                I work at the intersection of artificial intelligence and software
                                engineering. My dissertation, completed at NC State, focused on
                                theory-driven deep learning for SE — including a hyper-parameter
                                optimization method that runs in 25% of the runtime of prior SOTA,
                                and an oversampling method that improves defect prediction by up to
                                123%.
                            </p>
                            <p className="hero__bio hero__bio--muted">
                                <span className="hero__comment">// </span>
                                Outside of work, I geek out on coffee and listen to Taylor Swift.
                            </p>
                        </>
                    )}
                </div>
                <aside className="hero__right">
                    <figure className="hero__portrait">
                        <img src="/portrait.jpg" alt="Rahul Yedida" />
                        <figcaption>
                            <span>portrait.jpg</span>
                            <span>1.2 MB</span>
                        </figcaption>
                    </figure>
                    {/* Live modules slot in via parent */}
                </aside>
            </div>
        </header>
    );
}
