import React, {Component} from "react";
import BookCard from "../Card/BookCard";
import AuthorsContainer from "../../AuthorCard/AuthorsContainer";
import SignUpToBook from "../Card/SignUpToBook";
import CardColumns from "react-bootstrap/CardColumns";


class BookContainer extends Component {
  render() {
    const { book } = this.props;

    return (
      <CardColumns>
        <BookCard book={book} />
        <AuthorsContainer authors={book.authorList} />
        <SignUpToBook book={book} />
      </CardColumns>
    );
  }
}

export default BookContainer;
