import React from "react";

export default class ScrollToTop extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }

    click() {
        let el = document.getElementById("hero");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    render() {
        return (
            <a style={{ cursor: "pointer" }} id="scroll-button" onClick={this.click}>
                <i style={{ color: "white" }} className="fas fa-arrow-up"></i>
            </a>
        );
    }
}
