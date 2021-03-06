import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class ScrollButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      ShowAtPosition: 666,
      ToggleScrollUp: "",
    };

    this.HandleScroll = this.HandleScroll.bind(this);
  }

  componentDidMount() {
    this.HandleScroll();
    window.addEventListener("scroll", this.HandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.HandleScroll);
  }

  HandleScroll() {
    const { ShowAtPosition, TransitionClassName } = this.props;
    if (window.pageYOffset > ShowAtPosition) {
      this.setState({ ToggleScrollUp: TransitionClassName });
    } else {
      this.setState({ ToggleScrollUp: "invisible" });
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { ToggleScrollUp } = this.state;

    return (
      <Button
        style={styles.scrollUpBtn}
        onClick={() => {
          this.scrollToTop();
        }}
        className={`${ToggleScrollUp}`}
      >
        UP
      </Button>
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
};
