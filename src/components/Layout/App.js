import React from "react";
import UserInfo from "./UserInfo";
import SimilarBooksList from "../SimilarBooks/SimilarBooksList";
import BookContainer from "../BookContainer/BookContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img
                style={style.headerLogo}
                src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
              />
              Amazon Book Store
            </a>
            <div className="navbar-collapse">
              <UserInfo />
            </div>
          </nav>
        </header>
        <main className="container" style={{ marginTop: "30px" }}>
          <SimilarBooksList similarBooks={this.props.similarBooks} />
          <BookContainer books={this.props.books} />
        </main>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()}, Amazon Books</p>
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
