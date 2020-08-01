import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav" id="background-picture">
                    
                </div>
                <div className="nav">
                    <div id="banner-profile" className="profile-details">
                        <h1>Rahul Yedida</h1>
                        <h2>Ph.D. Student</h2>
                        <h2>Department of Computer Science</h2>
                        <h2 style={{ marginBottom: "10vh" }}>
                            <a href="https://csc.ncsu.edu">
                                North Carolina State University
                            </a>
                        </h2>
                        <h1>About Me</h1>
                        <ul>
                            <li><b>Experience:</b> Machine learning, web development, .NET</li>
                            <li><b>Open to:</b> Research scientist / data scientist / software engineer intern </li>
                        </ul>

                        <div style={{ fontSize: 18 }}>
                            I convert coffee to 
                            <div className="rotating">
                                <span>code.</span>
                                <span>research.</span>
                                <span>less coffee.</span>
                            </div>
                            <p>So what can I help you with?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}