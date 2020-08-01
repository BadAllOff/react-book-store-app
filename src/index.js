import ReactDOM from "react-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'
import books from './books.json';
import App from './App'

ReactDOM.render(
  <App books={books}/>,
  document.getElementById('root')
);
