import React from "react";
import BookList from "../Book/List/BookList";
import ScrollButton from "../helpers/ScrollButton";
import Layout from "../Layout";
// import SimilarBooksList from "./components/SimilarBooks/SimilarBooksList";

const Main = () => {
  return (
    <Layout>
      {/* <SimilarBooksList similarBooks={this.props.similarBooks} /> */}
      <BookList />
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="16.66"
        ShowAtPosition={window.innerHeight / 3}
        TransitionClassName="visible"
      />
    </Layout>
  );
};

export default Main;
