import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/styles.css";
import Main from "./components/Pages/Main";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
