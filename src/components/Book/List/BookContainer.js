import React from "react";
import { render } from "react-dom";
import BookCard from "../Card/BookCard";
import AuthorsContainer from "../../AuthorCard/AuthorsContainer";
import SignUpToBook from "../../BookCard/SignUpToBook";
import BookDetailsModal from "../../BookCard/BookDetailsModal";

class BookContainer extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div className="card-columns">
        <BookCard book={book} />
        <AuthorsContainer authors={book.author_list} />
        <SignUpToBook book={book} />
        <BookDetailsModal book={book} />
      </div>
    );
  }
}

export default BookContainer;
