import React from "react";
import Row from "./Row";
import BookDetailsModal from "./BookDetailsModal";

class BookCard extends React.Component {
  render() {
    const { book } = this.props;
    const isBestseller = book.subscribers_count > 50 ? true : false;
    const authorNames = book.author_list
      .map((author) => author.name)
      .join(", ");

    return (
      <div className="card border-dark">
        <img src={book.cover_image} className="card-img-top" alt={book.title} />
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
            {book.author_list.length === 0 ? "No author" : authorNames}
          </Row>
          <Row label="Pages count"> {book.page_count} pages</Row>
          <Row label="Language">{book.language}</Row>
          <Row label="Progress">{book.progress}%</Row>
          <Row label="Main price">${book.main_price}</Row>
          <Row label="Minimum price">${book.min_price}</Row>
          <Row label="Total sum">${book.total_sum}</Row>
          <Row label="Expected revenue"> ${book.expected_sum}</Row>
          <Row label="Subscribers" delimeter={false}>
            {book.subscribers_count}
          </Row>
        <BookDetailsModal book={book} />
          
        </div>
      </div>
    );
  }
}

export default BookCard;
