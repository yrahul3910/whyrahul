// "Live" "now playing" Taylor Swift module
// No external API; ticks through a static playlist locally.

import React, { useEffect, useState } from "react";

const TRACKS = [
    { title: "CANCELLED!", album: "The Life of a Showgirl", dur: 211 },
    { title: "Hits Different", album: "Midnights (3am)", dur: 234 },
    { title: "illicit affairs", album: "folklore", dur: 191 },
    { title: "You're On Your Own, Kid", album: "Midnights", dur: 194 },
    { title: "I Can Do It With a Broken Heart", album: "TTPD", dur: 218 },
    { title: "Cruel Summer", album: "Lover", dur: 178 },
    { title: "Nothing New", album: "Red (Taylor's Version)", dur: 259 },
    { title: "Treacherous", album: "Red", dur: 243 },
];

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;

export default function NowPlaying() {
    const [i, setI] = useState(() => Math.floor(Math.random() * TRACKS.length));
    const [t, setT] = useState(() => Math.floor(Math.random() * 60));

    useEffect(() => {
        const id = setInterval(() => {
            setT((p) => {
                if (p + 1 >= TRACKS[i].dur) {
                    setI((idx) => (idx + 1) % TRACKS.length);
                    return 0;
                }
                return p + 1;
            });
        }, 1000);
        return () => clearInterval(id);
    }, [i]);

    const tr = TRACKS[i];
    const pct = (t / tr.dur) * 100;

    return (
        <div className="live-module live-module--audio">
            <div className="live-module__head">
                <span><i className="fas fa-music"></i> now playing</span>
                <span className="live-module__live"><span className="live-module__dot"></span>LIVE</span>
            </div>
            <div className="live-module__title">{tr.title}</div>
            <div className="live-module__sub">{tr.album} — Taylor Swift</div>
            <div className="live-module__bar">
                <div className="live-module__bar-fill" style={{ width: `${pct}%` }}></div>
            </div>
            <div className="live-module__times">
                <span>{fmt(t)}</span>
                <span>{fmt(tr.dur)}</span>
            </div>
        </div>
    );
}
