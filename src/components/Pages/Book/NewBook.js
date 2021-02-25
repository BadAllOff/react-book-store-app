import React from "react";
import Layout from "../../Layout";
import { Container } from "react-bootstrap";

import BookForm from "./BookForm";

const NewBook = () => {
  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <BookForm />
      </Container>
    </Layout>
  );
};

export default NewBook;
