import React from "react";
import ScrollButton from "../../helpers/ScrollButton";
import Layout from "../../Layout";

const WishList = () => {
  return (
    <Layout>
      <h1>Wish Listwith Local Storage!</h1>
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="16.66"
        ShowAtPosition={window.innerHeight / 3}
        TransitionClassName="visible"
      />
    </Layout>
  );
};

export default WishList;