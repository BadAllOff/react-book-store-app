import React, { Component } from "react";
import AuthorCommission from "./AuthorCommission";
import { Button, Modal, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledModalBody = styled(Modal.Body)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
const StyledModalHeader = styled(Modal.Header)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
const StyledModalFooter = styled(Modal.Footer)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const StyledCardImgOverlay = styled(Card.ImgOverlay)`
  background-color: "rgba(255, 255, 255, 0.7)";
`;

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
        <Button onClick={this.toggleShow} block>
          Show book details
        </Button>

        <Modal show={show} onHide={this.toggleShow}>
          <StyledModalHeader closeButton>
            <Modal.Title>Close modal</Modal.Title>
          </StyledModalHeader>
          <StyledModalBody>
            <Card>
              <Card.Img
                style={{ opacity: 0.5 }}
                src={coverImage}
                className="card-img"
                alt={title}
              />
              <StyledCardImgOverlay>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}.</Card.Text>
                  {authorNames ? (
                    <Card.Text>
                      <small className="text-muted">{authorNames}</small>
                    </Card.Text>
                  ) : null}
                </Card.Body>
              </StyledCardImgOverlay>
            </Card>
            <hr />
            <AuthorCommission book={this.props.book} />
          </StyledModalBody>
          <StyledModalFooter>
            <Button onClick={this.toggleShow}>Close</Button>
          </StyledModalFooter>
        </Modal>
      </>
    );
  }
}

export default BookDetailsModal;
