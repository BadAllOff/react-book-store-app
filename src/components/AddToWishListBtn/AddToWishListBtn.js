import React, { useContext } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as EmptyHart } from "@fortawesome/free-regular-svg-icons";
import { WishListContext } from "../meta/WishlistProvider";

const AddToWishListBtn = (props) => {
  const { bookIsInList, toggleBook } = useContext(WishListContext);
  const { book } = props;

  return (
    <OverlayTrigger
      key={"top"}
      placement={"top"}
      overlay={
        <Tooltip id={`tooltip-top`}>
          {bookIsInList(book) ? "Remove from wish list" : "Add to wish list"}
        </Tooltip>
      }
    >
      <Button className="my-1" size="sm" onClick={() => toggleBook(book)}>
        {bookIsInList(book) ? (
          <FontAwesomeIcon icon={FullHeart} />
        ) : (
          <FontAwesomeIcon icon={EmptyHart} />
        )}
      </Button>
    </OverlayTrigger>
  );
};

export default AddToWishListBtn;
