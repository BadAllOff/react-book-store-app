import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import books from "./data/books.json";
import App from "./components/Layout/App";
import user from "./data/user.json";
import AuthContext from "./components/meta/AuthContext";

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <App books={books} />
  </AuthContext.Provider>,
  document.getElementById("root")
);
