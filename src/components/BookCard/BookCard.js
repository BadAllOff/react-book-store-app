import React from "react";
import AuthorsList from "../AuthorCard/AuthorList";
import SignUpToBook from "./SignUpToBook";
import Row from "./Row";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const isBestseller = book.subscribers_count > 50 ? true : false;
    const authorNames =
      book.authors.length > 1
        ? book.authors.map((author) => author.name).join(", ")
        : book.authors.map((author) => author.name);

    return (
      <div className="card-columns">
        <div className="card border-dark">
          <img
            src={book.cover_image}
            className="card-img-top"
            alt={book.title}
          />
          <div className="card-body">
            <h5 className="card-title text-uppercase">
              {book.title}
              {isBestseller && (
                <>
                  <br />
                  <span className="badge badge-pill badge-warning">
                    Bestseller!
                  </span>
                </>
              )}
            </h5>
            <Row label="Description">{book.description}</Row>
            <Row label="Author">
              {book.authors.length === 0 ? "No author" : authorNames}
            </Row>
            <Row label="Pages count"> {book.page_count} pages</Row>
            <Row label="Language">{book.language}</Row>
            <Row label="Progress">{book.progress}%</Row>
            <Row label="Minimum price">${book.min_price}</Row>
            <Row label="Main price">${book.main_price}</Row>
            <Row label="Total sum">${book.total_sum}</Row>
            <Row label="Expected revenue"> ${book.expected_sum}</Row>
            <Row label="Subscribers" delimeter={false}>
              {book.subscribers_count}
            </Row>
          </div>
        </div>
        {book.authors.length != 0 && <AuthorsList authors={book.authors} />}
        <SignUpToBook book={book} />
      </div>
    );
  }
}

export default BookCard;
