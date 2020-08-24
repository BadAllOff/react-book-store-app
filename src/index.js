import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import user from "./data/user.json";
import AuthContext from "./components/meta/AuthContext";

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <App />
  </AuthContext.Provider>,
  document.getElementById("root")
);
