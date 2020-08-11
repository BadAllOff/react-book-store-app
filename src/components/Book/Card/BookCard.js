import React from "react";
import Row from "./Row";
import BookDetailsModal from "./BookDetailsModal";

class BookCard extends React.Component {
  render() {
    const { book } = this.props;
    const isBestseller = book.subscribersCount > 50 ? true : false;
    const authorNames = book.authorList
      .map((author) => author.name)
      .join(", ");

    return (
      <div className="card border-dark">
        <img src={book.coverImage} className="card-img-top" alt={book.title} />
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
            {book.authorList.length === 0 ? "No author" : authorNames}
          </Row>
          <Row label="Pages count"> {book.pageCount} pages</Row>
          <Row label="Language">{book.language}</Row>
          <Row label="Progress">{book.progress}%</Row>
          <Row label="Main price">${book.mainPrice}</Row>
          <Row label="Minimum price">${book.minPrice}</Row>
          <Row label="Total sum">${book.totalSum}</Row>
          <Row label="Expected revenue"> ${book.expectedSum}</Row>
          <Row label="Subscribers" delimeter={false}>
            {book.subscriberSount}
          </Row>
        <BookDetailsModal book={book} />
          
        </div>
      </div>
    );
  }
}

export default BookCard;
