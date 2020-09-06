import React from "react";
import Layout from "../../Layout";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <Container>
        Sorry, we didn't found anything by this adress. Try to use navigation
        links on <Link to='/'>main page</Link>
      </Container>
    </Layout>
  );
};

export default NotFound;
