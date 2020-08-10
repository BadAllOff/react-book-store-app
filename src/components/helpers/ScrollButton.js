import React from "react";

class ScrollButton extends React.Component {
  render() {
    return (
      <div style={styles.scrollUpBtn}>
        <button className='btn btn-outline-secondary'> UP</button>
      </div>
    );
  }
}

export default ScrollButton;

const styles = {
  scrollUpBtn: {
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
  },
}