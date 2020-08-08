import React from "react";
import BookList from "./BookCard/BookList";

class BookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: null,
    };
  }

  render() {
    const {records} = this.state; 

    return records ? (
      <div>
        <h4>book container</h4>
        <BookList books={this.props.books} />
      </div>
    ) : (
      <div> Books not yet arrived.</div>
    );
  }
}

export default BookContainer;
