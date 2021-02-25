import React from "react";
import { Card, Form, Button } from "react-bootstrap";

import SubscriptionsTermsModal from "./SubscriptionsTermsModal";

const SignUpToBook = ({ book }) => {
  return (
    <Card>
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
            <Button size="lg" block>
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
