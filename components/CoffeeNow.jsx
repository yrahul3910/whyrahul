// Live coffee bench module. Click to add a cup.

import React, { useState } from "react";

export default function CoffeeNow() {
    const [cups, setCups] = useState(2);
    return (
        <div className="live-module live-module--coffee">
            <div className="live-module__head">
                <span><i className="fas fa-mug-hot"></i> on the bench</span>
                <span className="live-module__meta">Orea v3</span>
            </div>
            <div className="live-module__title">Panama Geisha</div>
            <div className="live-module__sub">15g · 240g · 2:45 brew</div>
            <div className="live-module__cups">
                <span>cups today</span>
                <button onClick={() => setCups((c) => c + 1)}>
                    {"●".repeat(Math.min(cups, 8))}
                    <span className="live-module__plus">+</span>
                </button>
            </div>
        </div>
    );
}
