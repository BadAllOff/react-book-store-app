import React from "react";
// import BookCard from "../../Book/Card/BookCard";
import ScrollButton from "../../helpers/ScrollButton";
import Layout from "../../Layout";
import BookCard from "../../Book/Card/BookCard";
// import withBook from '../../HOC/withBook';

const Book = ({ match: { params } }) => {
  return (
    <Layout>
      <h1>Book id: {params.id}</h1>
      <BookCard />
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="16.66"
        ShowAtPosition={window.innerHeight / 3}
        TransitionClassName="visible"
      />
    </Layout>
  );
};

export default Book;
