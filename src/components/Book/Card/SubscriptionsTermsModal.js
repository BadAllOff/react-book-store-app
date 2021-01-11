import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModalBody = styled(Modal.Body)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
const StyledModalHeader = styled(Modal.Header)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const SubscriptionsTermsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        Subscribe and get free merch from the writer! Click to know more!
      </Button>

      <Modal show={show} size="lg" onHide={handleClose} centered>
        <StyledModalHeader closeButton>
          <Modal.Title>Subscribe to get Merch</Modal.Title>
        </StyledModalHeader>
        <StyledModalBody>
          <p>
            Depending on the amount of the transfer, you can get a book with
            personal signature of the author, merch (T-shirts, cups and many
            others), and honorable mention in gratitude.
          </p>
          <p>Subscribe and get it all for free!</p>
          <Button onClick={handleClose}>
            STFU and take my $$$ now!
          </Button>
        </StyledModalBody>
      </Modal>
    </>
  );
};

export default SubscriptionsTermsModal;
