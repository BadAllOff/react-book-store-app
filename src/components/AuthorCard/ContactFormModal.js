import React from "react";
import ReactDOM from "react-dom";

import Field from "../helpers/Field";

class ContactFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "unknown",
      email: "unknown@example.com",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
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
    this.toggle();
  }

  render() {
    const { author } = this.props;

    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.toggle()}
        >
          Write to author
        </button>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Write to {author.name}</h5>
                    <button
                      type="button"
                      onClick={() => this.toggle()}
                      className="close"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <Field
                          name="email"
                          label="Email address"
                          value={this.state.email}
                          type="email"
                          handleChange={(name, e) => this.handleChange(name, e)}
                          hint="We'll never share your email with anyone else."
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          name="name"
                          label="Your Name"
                          value={this.state.name}
                          type="input"
                          handleChange={(name, e) => this.handleChange(name, e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Your message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows="3"
                          value={this.state.message}
                          onChange={(e) => this.handleChange("message", e)}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Send message
                      </button>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={() => this.toggle()}
                      className="btn btn-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById("modal-root")
          )}
      </>
    );
  }
}

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ContactFormModal;
