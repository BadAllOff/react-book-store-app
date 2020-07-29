import React from "react";
import AuthorCard from "./AuthorCard";
import ShowAuthorsBtn from "./ShowAuthorsBtn";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showAllAuthors: false };
    this.toggleShowAll = this.toggleShowAll.bind(this);
  }

  toggleShowAll() {
    this.setState({ showAllAuthors: !this.state.showAllAuthors });
  }

  render() {
    const { authors } = this.props;
    const showAllAuthors = this.state.showAllAuthors;
    const authorsToShow = showAllAuthors ? authors : authors.slice(0, 3);

    return (
      <>
        <ShowAuthorsBtn
          authors={authors}
          showAllAuthors={showAllAuthors}
          toggleShowAll={this.toggleShowAll}
        />
        {authorsToShow.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </>
    );
  }
}

export default AuthorsList;
