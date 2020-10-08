import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import DemoOne from "./Demo/Demo1/DemoOne";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/demo1" component={DemoOne} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
