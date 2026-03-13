import React, { useEffect, useState, useRef } from "react";

const HINT_CHARACTERS = "asdfjklghweruiovmcn";
const SCROLL_STEP = 5; // Initial pixels per frame
const SCROLL_ACCEL = 1.02; // Acceleration per frame
const SCROLL_MAX = 80;  // Maximum speed

const VimController: React.FC = () => {
    const [hintMode, setHintMode] = useState(false);
    const [hints, setHints] = useState<{ element: HTMLElement; key: string; rect: DOMRect }[]>([]);
    const [inputBuffer, setInputBuffer] = useState("");
    const lastKeyRef = useRef<string | null>(null);
    const [showHelp, setShowHelp] = useState(false);

    // Smooth scroll state
    const scrollDir = useRef<number>(0); // 1 for down, -1 for up, 0 for stop
    const scrollSpeed = useRef<number>(SCROLL_STEP);
    const requestRef = useRef<number | null>(null);

    const animateScroll = () => {
        if (scrollDir.current !== 0) {
            window.scrollBy(0, scrollDir.current * scrollSpeed.current);
            scrollSpeed.current *= SCROLL_ACCEL;
            if (scrollSpeed.current > SCROLL_MAX) scrollSpeed.current = SCROLL_MAX;
            requestRef.current = requestAnimationFrame(animateScroll);
        } else {
            requestRef.current = null;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (hintMode) {
                if (e.key === "Escape" || e.key === "f") {
                    setHintMode(false);
                    setInputBuffer("");
                    return;
                }
                const char = e.key.toLowerCase();
                if (HINT_CHARACTERS.includes(char)) {
                    const newInputBuffer = inputBuffer + char;
                    const matchingHints = hints.filter(h => h.key.startsWith(newInputBuffer));
                    if (matchingHints.length === 1 && matchingHints[0].key === newInputBuffer) {
                        matchingHints[0].element.click();
                        setHintMode(false);
                        setInputBuffer("");
                    } else if (matchingHints.length === 0) {
                        setInputBuffer("");
                    } else {
                        setInputBuffer(newInputBuffer);
                    }
                }
                e.preventDefault();
                return;
            }

            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
                return;
            }

            if (showHelp) {
                if (e.key === "Escape" || e.key === "?") {
                    setShowHelp(false);
                }
                return;
            }

            switch (e.key) {
                case "j":
                    if (scrollDir.current !== 1) {
                        scrollDir.current = 1;
                        scrollSpeed.current = SCROLL_STEP;
                        if (!requestRef.current) requestRef.current = requestAnimationFrame(animateScroll);
                    }
                    e.preventDefault();
                    break;
                case "k":
                    if (scrollDir.current !== -1) {
                        scrollDir.current = -1;
                        scrollSpeed.current = SCROLL_STEP;
                        if (!requestRef.current) requestRef.current = requestAnimationFrame(animateScroll);
                    }
                    e.preventDefault();
                    break;
                case "d":
                    if (!e.repeat) {
                        window.scrollBy({ top: window.innerHeight * 0.7, behavior: "smooth" });
                    }
                    e.preventDefault();
                    break;
                case "u":
                    if (!e.repeat) {
                        window.scrollBy({ top: -window.innerHeight * 0.7, behavior: "smooth" });
                    }
                    e.preventDefault();
                    break;
                case "g":
                    if (!e.repeat) {
                        if (lastKeyRef.current === "g") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            lastKeyRef.current = null;
                        } else {
                            lastKeyRef.current = "g";
                            setTimeout(() => { lastKeyRef.current = null; }, 400);
                        }
                    }
                    break;
                case "G":
                    if (!e.repeat) {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                    }
                    break;
                case "f":
                    if (!e.repeat) {
                        enterHintMode();
                        e.preventDefault();
                    }
                    break;
                case "?":
                    if (!e.repeat) {
                        setShowHelp(true);
                    }
                    break;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if ((e.key === "j" && scrollDir.current === 1) || (e.key === "k" && scrollDir.current === -1)) {
                scrollDir.current = 0;
                // Animation will stop itself on next frame because scrollDir is 0
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [hintMode, hints, inputBuffer, showHelp]);

    const enterHintMode = () => {
        const clickables = Array.from(document.querySelectorAll("a, button, .card-title, .nav-menu-sticky li, [onclick]")) as HTMLElement[];
        const visibleClickables = clickables.filter(el => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= -10 &&
                rect.left >= -10 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 10 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 10 &&
                rect.width > 0 && rect.height > 0
            );
        });

        const newHints = visibleClickables.map((el, i) => {
            let key = "";
            let n = i;
            const chars = HINT_CHARACTERS;
            if (n < chars.length) {
                key = chars[n];
            } else {
                key = chars[Math.floor(n / chars.length) % chars.length] + chars[n % chars.length];
            }
            return { element: el, key, rect: el.getBoundingClientRect() };
        });

        setHints(newHints);
        setHintMode(true);
    };

    return (
        <>
            <div className="vim-status-hint">Vim motions enabled. Press ? for help.</div>

            {hintMode && (
                <div className="vim-hints-container">
                    <div className="vim-mode-indicator">HINT MODE</div>
                    {hints.map((h, i) => (
                        <div
                            key={i}
                            className={`vim-hint ${h.key.startsWith(inputBuffer) ? "active" : "inactive"}`}
                            style={{
                                top: h.rect.top + window.scrollY,
                                left: h.rect.left + window.scrollX,
                            }}
                        >
                            <span className="match">{inputBuffer}</span>
                            <span className="remaining">{h.key.slice(inputBuffer.length)}</span>
                        </div>
                    ))}
                </div>
            )}

            {showHelp && (
                <div className="vim-help-overlay" onClick={() => setShowHelp(false)}>
                    <div className="vim-help-dialog" onClick={e => e.stopPropagation()}>
                        <h2>Vim Motions</h2>
                        <ul>
                            <li><span>j</span> Scroll Down (Hold to accelerate)</li>
                            <li><span>k</span> Scroll Up (Hold to accelerate)</li>
                            <li><span>d</span> Page Down</li>
                            <li><span>u</span> Page Up</li>
                            <li><span>gg</span> Top of Page</li>
                            <li><span>G</span> Bottom of Page</li>
                            <li><span>f</span> Follow Link (Hint Mode)</li>
                            <li><span>?</span> Show this help</li>
                            <li><span>Esc</span> Exit Mode</li>
                        </ul>
                        <div className="footer">Press any key to close</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VimController;
