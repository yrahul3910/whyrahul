import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            window.location.replace("/");
        }, 5000);
    }

    render() {
        return (
            <main>
                <h1>404</h1>
                <p style={{textAlign: "center"}}>You will be redirected to the main page in 5 seconds.</p>
                <p style={{textAlign: "center"}}>Or, <Link to="/">click here</Link> to redirect now.</p>
            </main>
        );
    }
}