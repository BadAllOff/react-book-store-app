import React, {Component} from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import BookList from "./components/Book/List/BookList";
import ScrollButton from "./components/helpers/ScrollButton";
import Layout from "./components/Layout";
// import SimilarBooksList from "./components/SimilarBooks/SimilarBooksList";


class App extends Component {
  render() {
    const { books } = this.props;
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
  }
}

export default App;
