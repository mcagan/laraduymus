import React from "react";
import "./App.sass";
import "./App.css";
import Homepage from "./components/Homepage";
import Who from "./components/Who";
import What from "./components/What";
import How from "./components/How";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/who">
          <Who />
        </Route>
        <Route path="/what">
          <What />
        </Route>
        <Route path="/how">
          <How />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
