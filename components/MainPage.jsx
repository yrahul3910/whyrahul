import React from "react";

import NewBanner from "./NewBanner.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { Link } from "react-router-dom";

import researchInterests from "../src/research_interests.jsx";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";
import resumeCards from "../src/resumeCards.jsx";

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
                <main>
                    <div className="picture">
                        <img src="profile.jpg" alt="Profile" />
                    </div>
                    <div className="content">
                        <div className="intro">
                            Hi! I&apos;m Ranjani Ramanathan.
                        </div>
                        <div className="detail">
                            <p>
                                I am a graduate student in Management Information Systems at <a href="https://tamu.edu">Texas A&amp;M University</a>. My interests lie in XYZ.
                            </p>
                            <p>
                                Previously, I worked at Cisco as a Network Engineer for 2.5 years.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
