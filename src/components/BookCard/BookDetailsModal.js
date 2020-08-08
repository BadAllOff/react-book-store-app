import React from "react";
import ReactDOM from "react-dom";
import ModalContainer from "../ModalContainer/ModalContainer";
import AuthorCommission from "./AuthorCommission";

class BookDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  }

  render() {
    const { book } = this.props;
    const authorNames = book.author_list
      .map((author) => author.name)
      .join(", ");

    return (
      <div className="card">
        <div className="card-body">
          <a
            type="button"
            className="btn btn-block btn-info"
            onClick={() => this.toggle()}
          >
            Show book details
          </a>
          {this.state.isOpen &&
            ReactDOM.createPortal(
              <ModalContainer
                modalTitle={book.title}
                closeModal={() => this.toggle()}
              >
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={book.cover_image}
                        className="card-img"
                        alt={book.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}.</p>
                        {authorNames ? (
                          <p className="card-text">
                            <small className="form-text text-muted">
                              {authorNames}
                            </small>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <AuthorCommission book={book} />
              </ModalContainer>,
              document.getElementById("modal-root")
            )}
        </div>
      </div>
    );
  }
}

export default BookDetailsModal;
