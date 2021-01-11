import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import user from "./data/user.json";
import AuthContext from "./components/meta/AuthContext";
import WishListProvider from "./components/meta/WishlistProvider";

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <WishListProvider>
      <App />
    </WishListProvider>
  </AuthContext.Provider>,
  document.getElementById("root")
);
