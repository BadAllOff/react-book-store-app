import React from "react";

class ShowAuthorsBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleBtn() {
    this.props.toggleShowAll();
  }

  render() {
    const authors = this.props.authors;
    const showAllAuthors = this.props.showAllAuthors;

    return (
      <>
        {authors.length > 3 && (
          <div className="card border-primary">
            <div className="card-body">
              <button
                className="btn btn-block btn-primary"
                onClick={() => {
                  this.toggleBtn();
                }}
              >
                {showAllAuthors
                  ? `Show only 3 Authors`
                  : `Show all ${authors.length} Authors`}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ShowAuthorsBtn;
