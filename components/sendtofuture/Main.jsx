import React from "react";
import Header from "./Header.jsx";

class Main extends React.Component {
    render() {
        return (
            <div style={{margin: "50px", height: "100vh"}}>
                <Header />
            </div>
        );
    }
}

module.exports = {
    Main
};