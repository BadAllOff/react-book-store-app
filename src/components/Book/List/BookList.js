import React from "react";
import ShortBookCard from "../Card/ShortBookCard";
import withBooks from "../../HOC/withBooks";
import withLoader from "../../HOC/withLoader";
import { Container, CardColumns } from "react-bootstrap";
import HeaderJumbotron from "../../Layout/HeaderJumbotron";
import { Helmet } from "react-helmet";

const BookList = ({ books }) => {
  return (
    <>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <HeaderJumbotron />
      <Container style={{ marginTop: "30px" }}>
        <CardColumns>
          {books.map((book) => (
            <ShortBookCard key={book.id} book={book} />
          ))}
        </CardColumns>
      </Container>
    </>
  );
};

export default withBooks(withLoader(BookList));
