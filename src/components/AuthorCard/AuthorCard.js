import React from "react";
import ContactFormModal from "./ContactFormModal";
import Card from "react-bootstrap/Card";

const AuthorCard = ({ author }) => {
  return (
    <Card>
      <Card.Img variant="top" src={author.avatar} alt={author.name} />
      <Card.Body>
        <Card.Title>{author.name}</Card.Title>
        <Card.Text>{author.about}</Card.Text>
        <Card.Text>
          <small className="text-muted">{author.email}</small>
        </Card.Text>
        <ContactFormModal author={author} />
      </Card.Body>
    </Card>
  );
};

export default AuthorCard;
