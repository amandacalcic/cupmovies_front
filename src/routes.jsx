import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./pages/Movies";
import Results from "./pages/Results";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Movies} />
      <Route path="/results" component={Results} />
    </Switch>
  );
}
