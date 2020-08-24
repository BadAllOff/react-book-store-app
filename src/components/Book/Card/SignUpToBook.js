import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SubscriptionsTermsModal from "./SubscriptionsTermsModal";

const SignUpToBook = ({ book }) => {
  return (
    <Card border="dark">
      <Card.Body>
        <Card.Text>
          Sign up and get latest information about "{book.title}"
        </Card.Text>
        <Form>
          <Form.Group>
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Button  variant="dark" size="lg" block >
              Sign up
            </Button>
          </Form.Group>
        </Form>
        <Card.Text>
          <SubscriptionsTermsModal />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SignUpToBook;
