import React from "react";
import Card from "react-bootstrap/Card"

const Row = (props) => {
  const { label, delimeter=true, children } = props;

  return (
    <>
      <Card.Text className="card-text text-primary">{label}</Card.Text>
      <p className="pull-right text-right">{children}</p>
      {delimeter && <hr />}
    </>
  );
};

export default Row;
