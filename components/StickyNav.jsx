import React from "react";
import {Link} from "react-router-dom";

export default class StickyNav extends React.Component {
    constructor() {
        super();
        this.research = this.research.bind(this);
        this.project = this.project.bind(this);
        this.contact = this.contact.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    research() {
        let el = document.getElementById("research");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    project() {
        let el = document.getElementById("projects");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    hobbies() {
        let el = document.getElementById("hobbies");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    contact() {
        let el = document.getElementById("contact");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    showMenu() {
        let el = document.getElementsByClassName("nav-menu-sticky")[0];
        el.classList.toggle("expanded");
    }

    render() {
        return <ul className="nav-menu-sticky">
            <li onClick={this.showMenu} id="hamburger"><i className="fas fa-bars"></i></li>
            <li onClick={this.research}>Research</li>
            <li onClick={this.project}>Projects</li>
            <li onClick={this.hobbies}>Miscellania</li>
            <li onClick={this.contact}>Contact</li>
            <li><a href="https://github.com/yrahul3910/resume/blob/master/business/resume.pdf">CV</a></li>
            <li><Link to="/tldr">TL;DR</Link></li>
        </ul>
    }
}