import React from "react";
import BookContainer from "./BookContainer";
import withBooks from "../../../HOC/withBooks";
import withLoader from "../../../HOC/withLoader";


const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookContainer key={book.id} book={book} />
      ))}
    </>
  );
};

export default withBooks(withLoader(BookList));
