import React from "react";

import BooksList from "./BooksList";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img
                style={style.headerLogo}
                src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
              />
              Amazon Book Store
            </a>
          </nav>
        </header>
        <main className="container" style={{ marginTop: "30px" }}>
          <BooksList books={this.props.books} />
        </main>
        <footer>
          <div className="container">
            &copy; {new Date().getFullYear()}, Amazon Books
          </div>
        </footer>
      </>
    );
  }
}

export default App;

const style = {
  headerLogo: {
    height: "50px",
    marginRight: "20px",
  },
};
