// App entry point
import "../sass/globals.scss";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "../components/App";

const root = createRoot(document.getElementById("app")!);
root.render(
    <Router>
        <App />
    </Router>,
);
