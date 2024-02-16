import React from "react";

import NewBanner from "./NewBanner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { Link } from "react-router-dom";

import researchInterests from "../src/research_interests.jsx";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";
import resumeCards from "../src/resumeCards.jsx";
import personalInterests from "../src/personal_interests.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.onscroll = () => {
            let el = document.getElementById("scroll-button");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                el.classList.add("visible");
            }
            else {
                el.classList.remove("visible");
            }
        };
    }

    render() {
        return (
            <div>
                <ScrollToTop />
                <h1 className="name">Rahul Yedida</h1>
                <NewBanner />
                <StickyNav />
                <main>
                    <section id="resume" className="red-background">
                        <h1>Resume / CV</h1>
                        <h3 style={{color: "white"}}>
                            Looking to hire? I am qualified for the roles below. Click a card to expand/collapse.
                        </h3>
                        <CardGrid cards={resumeCards} />
                    </section>
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <h3>My publications are available at <Link style={{color: "white"}} to="/publications">ryedida.me/publications</Link>. Click a card to expand/collapse.</h3>
                        <CardGrid cards={researchInterests} />
                    </section>
                    <section id="projects" className="red-background">
                        <h1>Projects</h1>
                        <p>
                            Below is a sample of my projects. For a more comprehensive list of my notable projects, please view my <a style={{ color: "white" }} href="https://github.com/yrahul3910/resume/blob/master/pdf/master.pdf">master CV</a>.
                        </p>
                        <CardGrid cards={projects} />
                    </section>
                    <section id="interests" className="blue-background">
                        <h1>Personal Interests</h1>
                        <CardGrid cards={personalInterests} />
                    </section>
                    <section id="contact" className="darkgray-background">
                        <h1>Contact</h1>
                        <CardGrid active={true} cards={contacts} />
                    </section>
                </main>
            </div>
        );
    }
}
