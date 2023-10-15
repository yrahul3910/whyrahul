import React from "react";

export default class Birthday26 extends React.Component {
    render() {
        const fontColor = "#5B5B66";
        const fontFamily = "sans-serif";
        const pagePadding = "40px";
        const backgroundColor = "#9EC2E2";

        return (
            <div style={{ backgroundColor, padding: pagePadding, height: "100%" }}>
                <h1 style={{ color: fontColor, textAlign: "center", fontFamily, fontWeight: "bold" }}>
                    1989 (Rahul&apos;s Version)
                </h1>
                <p style={{ color: fontColor, fontFamily }}>
                    Welcome to my 26th birthday website! I&apos;m glad you could make it.
                    I&apos;ve been working on this for a while now, and I&apos;m excited to share it with you.
                    Here, you will find all the resources you will need. The entire party is themed around
                    1989 by Taylor Swift.
                </p>
                <h1 style={{ color: fontColor, textAlign: "center", fontFamily, fontWeight: "bold" }}>
                    ~~ Menu ~~
                </h1>
                <h2 style={{ color: fontColor, textAlign: "center", fontFamily, fontWeight: "bold" }}>
                    Food
                </h2>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Welcome to New York
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    New York-style pizza, ordered from a local pizzeria.
                </p>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Fall
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    Get your hats, and scarves, and knee socks--it's Fall! We'll celebrate with
                    Taylor&apos;s chai tea sugar cookies with cinnamon eggnog glaze.
                </p>
                <h2 style={{ color: fontColor, textAlign: "center", fontFamily, fontWeight: "bold" }}>
                    Beverages
                </h2>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Blank Space
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    A half-caff cappuccino. Keeps your evening caffeine consumption low.
                </p>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Style
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    Coffee in style, with my ultimate mocha recipe. Premium chocolate sauce, espresso, and
                    steamed, freeze-distilled milk.
                </p>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Clean
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    A decaf ("clean") drink: a blue raspberry lemonade, served over ice in a Collins glass.
                </p>
                <h3 style={{ color: fontColor, fontFamily, fontWeight: "bold" }}>
                    Coffee at Midnight
                </h3>
                <p style={{ color: fontColor, fontFamily }}>
                    A mocha frappe, with midnight vibes. Among the caffeinated options, this has the least caffeine.
                </p>
            </div>
        );
    }
}
