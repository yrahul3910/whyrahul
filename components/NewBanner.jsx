import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav">
                    <div id="banner-profile" className="profile-details">
                        <img id="background-picture" src="/profile.jpg" />
                        <h1>Rahul Yedida</h1>
                        <h3>Ph.D. Student</h3>
                        <h4>Department of Computer Science, North Carolina State University</h4>
                        <ul>
                            <li>
                                <a style={{textDecoration: "none", color: "black"}}href="mailto:r.yedida@pm.me">
                                    E-mail
                                </a>
                                <i className="fas fa-arrow-right"></i>
                            </li>
                            <li>
                                <a style={{textDecoration: "none", color: "black"}} href="https://scholar.google.com/citations?user=0lP2AvkAAAAJ&hl=en">
                                    Google Scholar
                                </a>
                                <i className="fas fa-arrow-right"></i></li>
                            <li>
                                <a style={{textDecoration: "none", color: "black"}}href="https://github.com/yrahul3910">
                                    GitHub
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
