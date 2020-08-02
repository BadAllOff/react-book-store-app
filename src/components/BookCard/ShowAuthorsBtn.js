import React from "react";

class ShowAuthorsBtn extends React.Component {
  render() {
    const authors_count = this.props.authors_count;
    const showAllAuthors = this.props.showAllAuthors;

    return (
      <div className="card border-primary">
        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            onClick={this.props.toggleShowAll}
          >
            {showAllAuthors
              ? `Show only 3 Authors`
              : `Show all ${authors_count} Authors`}
          </button>
        </div>
      </div>
    );
  }
}

export default ShowAuthorsBtn;
