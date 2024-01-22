import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav">
                    <img
                        fetchpriority="high"
                        id="background-picture"
                        srcSet="profile-400w.webp 400w, profile-600w.webp 600w, profile-800w.webp 800w, profile-1000w.webp 1000w, profile-1200w.webp 1200w, profile-1600w.webp 1600w, profile-2000w.webp 2000w"
                        sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                        src="profile.jpg"
                        alt=""
                    />
                </div>
                <div className="nav">
                    <div id="banner-profile" className="profile-details">
                        <h3>About</h3>
                        <p>
                            I am a 5<sup>th</sup> year Ph.D. candidate in CS at NC State University, specializing in deep learning applied to SE.
                            In my free time, I geek out on coffee and
                            listen to Taylor Swift.
                        </p>
                        <ul>
                            <li>
                                <a style={{textDecoration: "none"}} href="mailto:hello@ryedida.me">
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
