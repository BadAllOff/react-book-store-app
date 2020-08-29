import React from "react";
import UserInfo from "./UserInfo";
import { Container, Navbar } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="#">
            <img
              className="d-inline-block align-top"
              width="30"
              height="30"
              src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
            />{" "}
            Amazon Book Store
          </Navbar.Brand>
          <Navbar.Collapse>
            <UserInfo />
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Container style={{ marginTop: "30px" }}>{children}</Container>
      <footer>
        <Container>
          <p>&copy; {new Date().getFullYear()}, Amazon Books</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
