import React from "react";
// import SimilarBooksList from "./components/SimilarBooks/SimilarBooksList";
import BookContainer from "./components/BookContainer/BookContainer";
import ScrollButton from "./components/helpers/ScrollButton";
import "./styles/styles.css";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
        <Layout>
          {/* <SimilarBooksList similarBooks={this.props.similarBooks} /> */}
          <BookContainer books={this.props.books} />
          <ScrollButton
            scrollStepInPx="50"
            delayInMs="16.66"
            ShowAtPosition={window.innerHeight / 3}
            TransitionClassName="visible"
          />
        </Layout>
    );
  }
}

export default App;
