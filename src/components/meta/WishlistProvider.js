import React, { createContext } from "react";

export const WishListContext = createContext();

class WishListProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    };

    this.toggleBook = this.toggleBook.bind(this);
    this.bookIsInList = this.bookIsInList.bind(this);
  }

  bookIsInList(book) {
    return !!this.state.favoriteBooks[book.id];
  }

  toggleBook(book) {
    let { favoriteBooks } = this.state;

    if (favoriteBooks[book.id]) {
      delete favoriteBooks[book.id];
    } else {
      favoriteBooks = Object.assign(favoriteBooks, { [book.id]: book.title });
    }
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

    this.setState(() => ({
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    }));
  }

  render() {
    const { favoriteBooks } = this.state;
    return (
      <WishListContext.Provider
        value={{
          favoriteBooks,
          bookIsInList: this.bookIsInList,
          toggleBook: this.toggleBook,
        }}
      >
        {this.props.children}
      </WishListContext.Provider>
    );
  }
}

export default WishListProvider;
