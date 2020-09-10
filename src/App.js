import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/styles.css";
import Main from "./components/Pages/Main";
import Book from "./components/Pages/Book";
import NotFound from "./components/Pages/NotFound";
import {bookPath} from "./components/helpers/routes";
import WishList from "./components/Pages/WishList";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Book} path={bookPath()} strict exact />
          <Route component={WishList} path={"/wishlist"} strict exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
