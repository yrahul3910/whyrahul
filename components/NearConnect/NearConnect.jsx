import React from "react";


export default class NearConnect extends React.Component {
    render() {
        return (
            <div>
                <main style={{display: "flex"}}>
                    <section style={{width: "50vw"}} className="nearconnect">
                        <h1>NearConnect</h1>
                        <p>
                        NearConnect lets you discover people around you, and connects you together in a group chat. No setup is needed: the app handles people coming and leaving your neighborhood. You can add people as friends by sending them a request; you can also simply scan the QR code on their profile page to add them as a friend automatically.
                        </p>
                    </section>
                    <section>
                        <img style={{height: "80vh"}} src="screenshot.png" />
                    </section>
                </main>
            </div>
        );
    }
}

