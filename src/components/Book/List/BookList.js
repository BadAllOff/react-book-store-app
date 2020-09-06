import React from "react";
import ShortBookCard from "../Card/ShortBookCard";
import withBooks from "../../HOC/withBooks";
import withLoader from "../../HOC/withLoader";
import { CardColumns, CardGroup, CardDeck } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <CardColumns>
      {books.map((book) => (
        <ShortBookCard key={book.id} book={book} />
      ))}
    </CardColumns>
  );
};

export default withBooks(withLoader(BookList));
