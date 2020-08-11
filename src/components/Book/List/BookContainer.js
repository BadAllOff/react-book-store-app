import React from "react";
import { render } from "react-dom";
import BookCard from "../Card/BookCard";
import AuthorsList from "../../AuthorCard/AuthorList";
import SignUpToBook from "../../BookCard/SignUpToBook";
import BookDetailsModal from "../../BookCard/BookDetailsModal";

class BookContainer extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div className="card-columns">
        <BookCard book={book} />
        <AuthorsList authors={book.author_list} />
        <SignUpToBook book={book} />
        <BookDetailsModal book={book} />
      </div>
    );
  }
}

export default BookContainer;
