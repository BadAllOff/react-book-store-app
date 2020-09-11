import React from "react";
import ScrollButton from "../../helpers/ScrollButton";
import Layout from "../../Layout";
import BookCard from "../../Book/Card/BookCard";

const Book = ({ match: { params } }) => {
  return (
    <Layout>
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
