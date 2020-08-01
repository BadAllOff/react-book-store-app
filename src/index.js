import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import books from "./books.json";
import App from "./App";
import user from "./user.json";
import AuthContext from "./AuthContext";

console.log(user);

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <App books={books} />
  </AuthContext.Provider>,
  document.getElementById("root")
);
