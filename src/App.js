import React from "react";
// import SimilarBooksList from "./components/SimilarBooks/SimilarBooksList";
import BookList from "./components/Book/List/BookList";
import ScrollButton from "./components/helpers/ScrollButton";
import "./styles/styles.css";
import Layout from "./components/Layout";
import useBooks from "./hooks/useBooks";

const App = () => {
  const books = useBooks();
  return (
    <Layout>
      {/* <SimilarBooksList similarBooks={this.props.similarBooks} /> */}
      <BookList books={books} isLoading={!books} />
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="16.66"
        ShowAtPosition={window.innerHeight / 3}
        TransitionClassName="visible"
      />
    </Layout>
  );
};

export default App;
