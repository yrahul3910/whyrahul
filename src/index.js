// App entry point
import "../sass/globals.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../components/App.tsx";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app"),
);
