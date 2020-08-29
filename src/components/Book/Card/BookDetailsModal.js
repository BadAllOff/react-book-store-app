import React, { Component } from "react";
import AuthorCommission from "./AuthorCommission";
import { Button, Modal, Card } from "react-bootstrap";

class BookDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(({ show }) => ({
      show: !show,
    }));
    this.forceUpdate();
  }

  render() {
    const {
      book: { description, authorList, coverImage, title },
    } = this.props;
    const { show } = this.state;
    const authorNames = authorList.map((author) => author.name).join(", ");

    return (
      <>
        <Button variant="dark" onClick={this.toggleShow} block>
          Show book details
        </Button>

        <Modal show={show} onHide={this.toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Close modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img
                style={{ opacity: 0.5 }}
                src={coverImage}
                className="card-img"
                alt={title}
              />
              <Card.ImgOverlay
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              >
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}.</Card.Text>
                  {authorNames ? (
                    <Card.Text>
                      <small className="text-muted">{authorNames}</small>
                    </Card.Text>
                  ) : null}
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
            <hr />
            <AuthorCommission book={this.props.book} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.toggleShow}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookDetailsModal;
