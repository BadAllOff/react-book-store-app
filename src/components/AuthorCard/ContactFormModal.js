import React, { Component } from "react";
import Field from "../helpers/Field";
import { Button, Modal, Form } from "react-bootstrap";

class ContactFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "unknown",
      email: "unknown@example.com",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(({ show }) => ({
      show: !show,
    }));
  }

  handleChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value });
  }

  handleSubmit(event) {
    console.log({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    event.preventDefault();
    this.toggleShow();
  }

  render() {
    const { author } = this.props;
    const { show } = this.state;

    return (
      <>
        <Button onClick={this.toggleShow}>
          Write to author
        </Button>

        <Modal
          show={show}
          onHide={this.toggleShow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{`Write to ${author.name}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Field
                name="email"
                label="Email address"
                value={this.state.email}
                type="email"
                inputType="input"
                handleChange={(name, e) => this.handleChange(name, e)}
                hint="We'll never share your email with anyone else."
              />
              <Field
                name="name"
                label="Your Name"
                value={this.state.name}
                type="input"
                inputType="input"
                handleChange={(name, e) => this.handleChange(name, e)}
              />
              <Field
                name="message"
                label="Your message"
                value={this.state.message}
                type="textarea"
                inputType="textarea"
                handleChange={(name, e) => this.handleChange(name, e)}
                options={{ as: "textarea", rows: "3", cols: "40" }}
              />
              <Button type="submit">
                Send message
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ContactFormModal;
