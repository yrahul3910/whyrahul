import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage.jsx";
import NotFound from "./NotFound.jsx";
import Birthday26 from "./Birthday26.jsx";
import SendToFuture from "./sendtofuture/Main.jsx";
import Privacy from "./sendtofuture/Privacy.jsx";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage />} />
            <Route exact path="/sendtofuture" component={SendToFuture} />
            <Route exact path="/sendtofuture/privacy" component={Privacy} />
            <Route
                exact
                path="/coffee"
                component={() => {
                    window.location.href =
                        "https://github.com/yrahul3910/whyrahul/blob/master/assets/menu.pdf";
                    return null;
                }}
            />
            <Route
                exact
                path="/publications"
                component={() => {
                    window.location.href =
                        "https://scholar.google.com/citations?user=0lP2AvkAAAAJ&hl=en";
                    return null;
                }}
            />
            <Route exact path="/1989rv" component={Birthday26} />
            <Route path="/*" render={() => <NotFound />} />
        </Switch>
    );
};

export default App;
