import React, { useContext } from "react";
import ScrollButton from "../../helpers/ScrollButton";
import Layout from "../../Layout";
import AddToWishListBtn from "../../AddToWishListBtn/AddToWishListBtn";
import { Link } from "react-router-dom";
import { bookPath } from "../../helpers/routes";
import { Container } from "react-bootstrap";
import { WishListContext } from "../../meta/WishlistProvider";

const WishList = () => {
  const { favoriteBooks } = useContext(WishListContext);
  const books = [];
  for (const [key, value] of Object.entries(favoriteBooks)) {
    books.push(
      <li key={key}>
        <AddToWishListBtn book={{ id: key, title: value }} />{" "}
        <Link to={bookPath(key)} className="text-uppercase">
          {value}
        </Link>
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
