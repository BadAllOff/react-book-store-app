import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
  background: transparent;
  color: ${({ theme }) => theme.text};
`;

const HeaderJumbotron = () => {
  return (
    <StyledJumbotron fluid>
      <Container>
        <h1>Keep reading...</h1>
      </Container>
    </StyledJumbotron>
  );
};

export default HeaderJumbotron;
