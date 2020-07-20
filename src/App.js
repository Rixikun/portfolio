import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Comp from "./components";
import "./main.scss";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={Comp.Home} />
        <Route path="/about" component={Comp.About} />
        <Route path="/contact" component={Comp.Contact} />
        <Route path="/works" component={Comp.Works} />
      </Switch>
    </Router>
  );
}

export default App;
