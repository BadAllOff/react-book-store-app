import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App";
import * as user from "./data/user.json";
import 'bootstrap/dist/css/bootstrap.min.css';
// import user from "./data/user";
import AuthContext from "./components/meta/AuthContext";

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <App />
  </AuthContext.Provider>,
  document.getElementById("root")
);
