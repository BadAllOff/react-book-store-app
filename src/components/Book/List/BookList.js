import React from 'react'
import BookContainer from './BookContainer';

const BookList = ({books}) => {
    return(
      <div>
        {books.map(book => (
          <BookContainer key={book.id} book={book} />
        ))}
      </div>
    );
}

export default BookList;