import React from "react";
import { Button } from "react-bootstrap";

class AddToWishListBtn extends React.Component {
  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
  }

  addBook(book) {
    let favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || {};

    favoriteBooks = Object.assign(favoriteBooks, { [book.id]: book.title });
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    console.log(favoriteBooks);

  }

  getBookFromLS(book) {}

  render() {
    return (
      <Button className="my-1" onClick={() => this.addBook(this.props.book)}>
        Add to wish list
      </Button>
    );
  }
}

export default AddToWishListBtn;
