import React from "react";
import Header from "./common/elements/Header";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import Home from "./user-cases/Home";
import NotFound from "./user-cases/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
