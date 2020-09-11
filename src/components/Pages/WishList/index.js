import React from "react";
import ScrollButton from "../../helpers/ScrollButton";
import Layout from "../../Layout";
import AddToWishListBtn from "../../AddToWishListBtn/AddToWishListBtn";
import { Link } from "react-router-dom";
import { bookPath } from "../../helpers/routes";
import { Container } from "react-bootstrap";

const WishList = () => {
  const favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || {};
  const books = [];
  for (const [key, value] of Object.entries(favoriteBooks)) {
    books.push(
      <li key={key}>
        <Link to={bookPath(key)} className="text-uppercase">
          {value}
        </Link>
        <AddToWishListBtn book={{ id: key, title: value }} />
      </li>
    );
  }

  return (
    <Layout>
      <Container>
        <h1>My wish list</h1>
        <ul>{books}</ul>
      </Container>
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
