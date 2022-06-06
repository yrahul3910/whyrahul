import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav">
                    <img id="background-picture" src="/profile.jpg" />
                </div>
                <div className="nav">
                    <div id="banner-profile" className="profile-details">
                        <h3>About</h3>
                        <p>
                            I am a 4th year Ph.D. candidate in CS at NC State University, specializing in feedforward networks applied to SE. 
                            I am currently an SDE Intern at Amazon, Bellevue. In my free time, I geek out on coffee and 
                            listen to Taylor Swift.
                        </p>
                        <ul>
                            <li>
                                <a style={{textDecoration: "none"}} href="mailto:r.yedida@pm.me">
                                    E-mail
                                </a>
                                <i className="fas fa-arrow-right"></i>
                            </li>
                            <li>
                                <a style={{textDecoration: "none"}} href="https://scholar.google.com/citations?user=0lP2AvkAAAAJ&hl=en">
                                    Google Scholar
                                </a>
                                <i className="fas fa-arrow-right"></i></li>
                            <li>
                                <a style={{textDecoration: "none"}} href="https://github.com/yrahul3910">
                                    GitHub
                                </a>
                                <i className="fas fa-arrow-right"></i>
                            </li>
                            <li>
                                <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/rahul-yedida/">
                                    LinkedIn
                                </a>
                                <i className="fas fa-arrow-right"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
