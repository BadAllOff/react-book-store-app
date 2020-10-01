import React, { useContext } from "react";
import UserInfo from "./UserInfo";
import { Button, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { newBookPath, newAuthorPath } from "../helpers/routes";

const HeaderNavigation = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Navbar bg={theme.body} variant={theme.variant} expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          className="d-inline-block align-top"
          width="30"
          height="30"
          src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
        />{" "}
        Amazon Book Store
      </Navbar.Brand>
      <Button onClick={props.toggleTheme}>
        Toggle theme
      </Button>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/wishlist">
          Wish List
        </Nav.Link>
        <Nav.Link as={Link} to={newBookPath()}>
          Add Book
        </Nav.Link>
        <Nav.Link as={Link} to={newAuthorPath()}>
          Add Author
        </Nav.Link>
      </Nav>
      <Navbar.Collapse>
        <UserInfo />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavigation;
