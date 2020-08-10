import React from "react";

import NewBanner from "./NewBanner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import SkillSet from "./SkillSet.jsx";

import researchInterests from "../src/research_interests.jsx";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";
import skills from "../src/skills.jsx";
import hobbies from "../src/hobbies.jsx";

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
                <NewBanner />
                <StickyNav />
                <main>
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <h3>Click a card to expand.</h3>
                        <p>
                            My research work can be found on <a style={{ color: "white" }} href="https://scholar.google.com/citations?user=0lP2AvkAAAAJ&hl=en">my Google Scholar profile</a>. Below are the fields that I am in, in no particular order.
                        </p>
                        <CardGrid cards={researchInterests} />
                    </section>
                    <section id="projects" className="green-background">
                        <h1>Projects</h1>
                        <p>
                            I consider myself fluent in the MERN stack, Python/Flask, and to some extent, C# and VB.NET. I work well in Agile teams with people who can pick up work independently and discuss any trouble they have with their share of the work.
                        </p>
                        <p>
                            Below is a sample of my projects. For a more comprehensive list of my notable projects, please view my CV.
                        </p>
                        <CardGrid cards={projects} />

                        <div id="skills-section">
                            <h1>Skills</h1>
                            <SkillSet skills={skills} />
                        </div>
                    </section>
                    <section id="hobbies">
                        <h1>Miscellania</h1>
                        <p>
                            A major hobby of mine is experimenting with different ways of brewing better coffee. I learned a lot of what I know from watching <a href="https://www.youtube.com/channel/UCMb0O2CdPBNi-QqPk5T3gsQ">James Hoffmann's channel on YouTube</a>.  
                        </p>
                        <CardGrid cards={hobbies} />
                    </section>
                    <section id="contact" className="red-background">
                        <h1>Contact</h1>
                        <p>
                            Please contact me by clicking on any of the following links.
                        </p>
                        <CardGrid active={true} cards={contacts} />
                    </section>
                </main>
            </div>
        );
    }
}