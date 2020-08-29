import React, { useState } from "react";
import UserInfo from "./UserInfo";
import { Container, Navbar, Button } from "react-bootstrap";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GlobalStyles } from "../../styles/global";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header>
        <Navbar bg={theme === "light" ? "dark" : "light"} expand="lg">
          <Navbar.Brand href="#">
            <img
              className="d-inline-block align-top"
              width="30"
              height="30"
              src="https://www.pinclipart.com/picdir/big/345-3450811_free-png-download-helping-hands-png-images-background.png"
            />{" "}
            Amazon Book Store
          </Navbar.Brand>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            onClick={toggleTheme}
          >
            Toggle theme
          </Button>
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
    </ThemeProvider>
  );
};

export default Layout;
