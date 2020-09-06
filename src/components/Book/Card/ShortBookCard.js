import React from "react";
import Row from "./Row";
import { Badge, Card } from "react-bootstrap";
import styled from "styled-components";


const StyledCardFooter = styled(Card.Footer)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

class ShortBookCard extends React.Component {
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
      <Card >
        <Card.Img variant="top" src={coverImage} alt={title} />
        <Card.Body>
          <Card.Title className="text-uppercase">{title}</Card.Title>
          {subscribersCount > 50 ? (
            <Badge pill variant="warning">
              Bestseller
            </Badge>
          ) : null}
          <p>{description}</p>
            
        </Card.Body>
        <StyledCardFooter>{authorList.length === 0 ? "No author" : (<p>Author(s): {authorNames}</p>)}</StyledCardFooter>
      </Card>
    );
  }
}

export default ShortBookCard;
