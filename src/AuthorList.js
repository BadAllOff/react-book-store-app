import React from "react";
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showAllAuthors: false };
  }

  toggleShowAll() {
    this.setState({ showAllAuthors: !this.state.showAllAuthors });
  }

  render() {
    const showAllAuthors = this.state.showAllAuthors;
    const { authors } = this.props;
    const showBtnText = `Show all ` + authors.length + ` Authors`;
    const hideBtnText = `Show anly 3 Authors`;

    // возможно не самое элегантное решение но работает. поэтому жду комментариев по улучшению.
    // например сменить логику отображения - рендерить всё и играться с классами visible\invisible
    // ну или дождаться следующих уроков где буду соображать получше.
    const visibleAuthors = authors.filter(function (a, index) {
      if (showAllAuthors) {
        return a;
      } else if (index < 3) {
        return a;
      }
    });

    return (
      <>
        {authors.length > 3 && (
          <div className="card border-primary">
            <div className="card-body">
              <button
                className="btn btn-block btn-primary"
                onClick={() => this.toggleShowAll()}
              >
                {showAllAuthors ? hideBtnText : showBtnText}
              </button>
            </div>
          </div>
        )}
        {visibleAuthors.map((author, index) => (
          <AuthorCard key={author.id} author={author} className="invisible" />
        ))}
      </>
    );
  }
}

export default AuthorsList;
