import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bookPath } from "../../helpers/routes";
import AddToWishListBtn from "../../AddToWishListBtn/AddToWishListBtn";

const StyledCardFooter = styled(Card.Footer)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

class ShortBookCard extends React.Component {
  render() {
    const {
      book: {
        id,
        description,
        authorList,
        coverImage,
        title,
        subscribersCount,
      },
    } = this.props;
    const authorNames = authorList.map((author) => author.name).join(", ");
    return (
      <Card key={id}>
        <Card.Img variant="top" src={coverImage} alt={title} />
        <Card.Body>
          {subscribersCount > 50 ? (
            <Badge pill variant="warning">
              Bestseller
            </Badge>
          ) : null}{" "}
          <Card.Title as={Link} to={bookPath(id)} className="text-uppercase">
            {title}
          </Card.Title>
          <p>{description}</p>
          <AddToWishListBtn book={this.props.book}></AddToWishListBtn>
        </Card.Body>
        <StyledCardFooter>
          {authorList.length === 0 ? (
            "No author"
          ) : (
            <p>Author(s): {authorNames}</p>
          )}
        </StyledCardFooter>
      </Card>
    );
  }
}

export default ShortBookCard;
