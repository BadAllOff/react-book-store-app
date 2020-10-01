import React from "react";
import Layout from "../../Layout";
import { Container } from "react-bootstrap";

import BookForm from "./BookForm";

const NewBook = () => {
  const initialValues = {
    cover_image: "",
    title: "Awesome title for bestseller!",
    description: "Write short description for the book",
    page_count: "200",
    language: "esperanto",
    progress: "10",
    min_price: "19.99",
    main_price: "12.21",
    total_sum: "1000",
    expected_sum: "12.21",
    subscribers_count: "100",
    authors: [],
  };

  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <BookForm initialValues={initialValues} />
      </Container>
    </Layout>
  );
};

export default NewBook;
