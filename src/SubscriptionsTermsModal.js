import React from "react";
import ReactDOM from 'react-dom';

class SubscriptionsTermsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <a className="btn btn-light" onClick={() => this.toggle()}>Subscribe and get free merch from the writer! Click to know more!</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Benefits from subscribing</h5>
                      <button type="button" onClick={() => this.toggle()} className="close">
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Depending on the amount of the transfer, you can get a book with personal signature of the author, merch (T-shirts, cups and many others), and honorable mention in gratitude.</p>
                      <p>Subscribe and get it all for free!</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={() => this.toggle()} className="btn btn-secondary">Not interested</button>
                      <button type="button" onClick={() => this.toggle()} className="btn btn-primary">STFU and take my $$$ now!</button>
                    </div>
                  </div>
                </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    );
  }
}

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default SubscriptionsTermsModal;
