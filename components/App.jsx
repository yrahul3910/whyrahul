import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage.jsx";
import NotFound from "./NotFound.jsx";
import { Main as SendToFuture } from "./sendtofuture/Main.jsx";
import Privacy from "./sendtofuture/Privacy.jsx";

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
                <Route exact path='/sendtofuture' component={SendToFuture} />
                <Route exact path="/sendtofuture/privacy" component={Privacy} />
                <Route path="/*" render={() =>
                    <NotFound />
                } />
            </Switch>
        );
    }
}
