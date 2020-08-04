import React from "react";
import SimilarBookCard from "./SimilarBookCard";

class SimilarBooksList extends React.Component {
  render() {
    const similarBooks = this.props.similarBooks;

    return (
      <div>
        {/* Ne renderit elementy. Ne mogu ponyat v 4em delo */}
        {similarBooks.map((b) => {
          <SimilarBookCard similarBooks={b} />;
        })}
      </div>
    );
  }
}

export default SimilarBooksList;
