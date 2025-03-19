import React from "react";

export default class StickyNav extends React.Component {
    publications() {
        let el = document.getElementById("pubs");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    research() {
        let el = document.getElementById("research");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    project() {
        let el = document.getElementById("projects");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    interests() {
        let el = document.getElementById("interests");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    contact() {
        let el = document.getElementById("contact");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    showMenu() {
        let el = document.getElementsByClassName("nav-menu-sticky")[0];
        el.classList.toggle("expanded");
    }

    resume() {
        let el = document.getElementById("resume");
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    render() {
        return <ul className="nav-menu-sticky">
            <li onClick={this.showMenu} id="hamburger"><i className="fas fa-bars"></i></li>
            <li onClick={this.resume}>Resume</li>
            <li onClick={this.research}>Research</li>
            <li onClick={this.publications}> Publications</li>
            <li onClick={this.project}>Projects</li>
            <li onClick={this.interests}>Interests</li>
            <li onClick={this.contact}>Contact</li>
        </ul>;
    }
}
