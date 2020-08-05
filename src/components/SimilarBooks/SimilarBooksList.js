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
          {result.map((b) => {
            return (
              <SimilarBookCard
                key={b.id}
                book={b}
                removeBookById={() => {
                  this.removeBookById(b.id);
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
