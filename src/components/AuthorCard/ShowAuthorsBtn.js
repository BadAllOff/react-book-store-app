import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const ShowAuthorsBtn = ({ authors_count, showAllAuthors, toggleShowAll }) => {
  return (
    <Card border='secondary'>
      <Card.Body>
        <Button variant="dark" block onClick={toggleShowAll}>
          {showAllAuthors
            ? `Show only 3 Authors`
            : `Show all ${authors_count} Authors`}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShowAuthorsBtn;
