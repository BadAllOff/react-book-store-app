import React from "react";
import { Button } from "react-bootstrap";

class AddToWishListBtn extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBook = this.toggleBook.bind(this);
    this.bookIsInList = this.bookIsInList.bind(this);

    this.state = {
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    };
  }

  toggleBook(book) {
    let favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || {};
    if (favoriteBooks[book.id]) {
      delete favoriteBooks[book.id];
    } else {
      favoriteBooks = Object.assign(favoriteBooks, { [book.id]: book.title });
    }
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

    this.setState(() => ({
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    }));

    console.log(favoriteBooks);
  }

  bookIsInList(book) {
    return this.state.favoriteBooks[book.id] ? true : false;
  }

  render() {
    const { book } = this.props;
    console.log(this.bookIsInList(book));
    return (
      <Button className="my-1" onClick={() => this.toggleBook(book)}>
        {this.bookIsInList(book) ? "Remove" : "Add to wish list"}
      </Button>
    );
  }
}

export default AddToWishListBtn;
