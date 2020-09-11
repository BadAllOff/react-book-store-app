import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as EmptyHart } from "@fortawesome/free-regular-svg-icons";

class AddToWishListBtn extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBook = this.toggleBook.bind(this);
    this.bookIsInList = this.bookIsInList.bind(this);

    this.state = {
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    };
  }

  toggleBook(book) {
    let favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || {};
    if (favoriteBooks[book.id]) {
      delete favoriteBooks[book.id];
    } else {
      favoriteBooks = Object.assign(favoriteBooks, { [book.id]: book.title });
    }
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

    this.setState(() => ({
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    }));
  }

  bookIsInList(book) {
    return this.state.favoriteBooks[book.id] ? true : false;
  }

  render() {
    const { book } = this.props;
    return (
      <OverlayTrigger
        key={"top"}
        placement={"top"}
        overlay={
          <Tooltip id={`tooltip-top`}>
            {this.bookIsInList(book)
              ? "Remove from wish list"
              : "Add to wish list"}
          </Tooltip>
        }
      >
        <Button
          className="my-1"
          size="sm"
          onClick={() => this.toggleBook(book)}
        >
          {this.bookIsInList(book) ? (
            <FontAwesomeIcon icon={FullHeart} />
          ) : (
            <FontAwesomeIcon icon={EmptyHart} />
          )}
        </Button>
      </OverlayTrigger>
    );
  }
}

export default AddToWishListBtn;
