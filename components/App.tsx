import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import NotFound from "./NotFound.jsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
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
      <Route path="/*" render={() => <NotFound />} />
    </Routes>
  );
};

export default App;
