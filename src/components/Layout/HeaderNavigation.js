import React, { useContext } from "react";
import UserInfo from "./UserInfo";
import { Button, Navbar } from "react-bootstrap";
import { ThemeContext } from "styled-components";

const HeaderNavigation = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Navbar bg={theme.bg} variant={theme.variant} expand="lg">
      <Navbar.Brand href="#">
        <img
          className="d-inline-block align-top"
          width="30"
          height="30"
          src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
        />{" "}
        Amazon Book Store
      </Navbar.Brand>
      <Button variant={theme.btn.variant} onClick={props.toggleTheme}>
        Toggle theme
      </Button>
      <Navbar.Collapse>
        <UserInfo />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavigation;
