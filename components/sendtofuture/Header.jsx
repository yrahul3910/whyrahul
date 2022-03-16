import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <div style={{display: "flex", gap: "20px"}}>
                    <img src='/stf-logo.png' width='50px' />
                    <div>
                        <h2>SendToFuture</h2>
                        <h3 style={{color: "gray"}}>Send future you links you find interesting.</h3>
                    </div>
                </div>
                <p style={{textAlign: "justify"}}>
                    Picture this: you&apos;re in bed at night, browsing Reddit, and you see a link that you
                    think is interesting, or related to your work, but you&apos;re too tired to look at it 
                    <em> now</em>. You could save it to Pocket, but it wouldn&apos;t remind you to look at it
                    in the morning. SendToFuture is here to do exactly that. Share a link to it, and it will
                    remind you in an hour. Simple as that. You can change the delay in the settings, and
                    see a list of all the links you saved.
                </p>
                <p>Get it now on the App Store.</p>
                <div style={{display: "absolute", bottom: "20px"}}>
                    <Link to="/sendtofuture/privacy">Privacy Policy</Link>
                </div>
            </Fragment>
        );
    }
}