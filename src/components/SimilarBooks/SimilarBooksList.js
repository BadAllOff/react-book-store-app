import React from "react";
import SimilarBookCard from "./SimilarBookCard";

class SimilarBooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notInterested: [],
    };
  }

  removeBookById(id) {
    this.setState(({ notInterested }) => {
      // Всё работвет но опять эта ошибка от Реакт Дев тула
      // Uncaught SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
      // Она вылазит из-за этой строки ниже но не могу понять в чём дело
      // Возможно виноват ретёрн, но без него пуш не вернет новый результат
      notInterested: return notInterested.push(id);
    });
  }

  render() {
    const similarBooks = this.props.similarBooks;
    const notInterested = this.state.notInterested;
    const result = similarBooks
      .filter((el) => -1 == notInterested.indexOf(el.id))
      .slice(0, 3);

    return (
      <div>
        <h2>Similar books</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {result.map((book) => {
            return (
              <SimilarBookCard
                key={book.id}
                book={book}
                removeBookById={() => {
                  this.removeBookById(book.id);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SimilarBooksList;
