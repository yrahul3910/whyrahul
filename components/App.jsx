import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./MainPage.jsx";
import NotFound from "./NotFound.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={(props) =>
                    <MainPage {...props} />
                } />
                <Route exact path="/publications" render={() =>
                    <Redirect to="https://scholar.google.com/citations?user=d7HqEBcAAAAJ&hl=en" />
                }/>
                <Route path="/*" render={() =>
                    <NotFound />
                } />
            </Switch>
        );
    }
}
