import React from "react";
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  render() {
    const { authors } = this.props;

    const visibleAuthors = authors.filter(function (a, index) {
      if (index < 3) {
        return a;
      }
    });
    const restAuthors = authors.filter(function (a, index) {
      if (index > 2) {
        return a;
      }
    });
    // console.log(restAuthors.length > 0);

    return (
      <>
        {visibleAuthors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
        {restAuthors.length > 0 && (
          <div className="card border-primary">
            <div className="card-body">
              <button className="btn btn-block btn-primary">
                Show all {authors.length} Authors
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default AuthorsList;
