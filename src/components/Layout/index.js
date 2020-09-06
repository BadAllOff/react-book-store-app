import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderNavigation from "./HeaderNavigation";
import Jumbotron from "./HeaderJumbotron";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GlobalStyles } from "../../styles/global";
import "bootswatch/dist/darkly/bootstrap.min.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");
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
        <HeaderNavigation toggleTheme={toggleTheme} />
      </header>
      <Jumbotron />
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
