import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Comp from "./components";
import "./main.scss";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/" component={Comp.Home} />
      </Switch>
    </Router>
  );
}

export default App;
