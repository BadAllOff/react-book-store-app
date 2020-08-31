import React, { Component } from "react";
import Row from "./Row";
import BookDetailsModal from "./BookDetailsModal";
import { Badge, Card } from "react-bootstrap";

class BookCard extends Component {
  render() {
    const {
      book: {
        description,
        authorList,
        coverImage,
        title,
        subscribersCount,
        pageCount,
        language,
        progress,
        mainPrice,
        minPrice,
        totalSum,
        expectedSum,
      },
    } = this.props;
    const authorNames = authorList.map((author) => author.name).join(", ");

    return (
      <Card>
        <Card.Img variant="top" src={coverImage} alt={title} />
        <Card.Body>
          <Card.Title className="text-uppercase">{title}</Card.Title>
          {subscribersCount > 50 ? (
            <Badge pill variant="warning">
              Bestseller!
            </Badge>
          ) : null}
          <Row label="Description">{description}</Row>
          <Row label="Author">
            {authorList.length === 0 ? "No author" : authorNames}
          </Row>
          <Row label="Pages count"> {pageCount} pages</Row>
          <Row label="Language">{language}</Row>
          <Row label="Progress">{progress}%</Row>
          <Row label="Main price">${mainPrice}</Row>
          <Row label="Minimum price">${minPrice}</Row>
          <Row label="Total sum">${totalSum}</Row>
          <Row label="Expected revenue"> ${expectedSum}</Row>
          <Row label="Subscribers" delimeter={false}>
            {subscribersCount}
          </Row>
          <BookDetailsModal book={this.props.book} />
        </Card.Body>
      </Card>
    );
  }
}

export default BookCard;
