import React from 'react'
import BookCard from './BookCard';

class BookList extends React.Component {
  render() {
    return(
      <div>
        {this.props.books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }
}

export default BookList;