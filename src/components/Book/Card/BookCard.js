import React, { Component } from "react";
import CardRow from "./Row";
import {
  Badge,
  Card,
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import AuthorsContainer from "../../AuthorCard/AuthorsContainer";
import AuthorCommission from "../../Book/Card/AuthorCommission";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import withBook from "../../HOC/withBook";
import withLoader from "../../HOC/withLoader";
import styled from "styled-components";
import { Helmet } from "react-helmet";


const StyledJumbotron = styled(Jumbotron)`
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  filter: blur(8px);
  z-index: 1;
  background-size: cover;
  height: 350px;
  background-position: center center;
`;

const StyledRow = styled(Row)`
  position: relative;
  top: -300px;
  margin-bottom: -275px;
`;

class BookCard extends Component {
  render() {
    const {
      book: {
        description,
        authorList,
        coverImage,
        title,
        subscribersCount,
        pageCount,
        language,
        progress,
        mainPrice,
        minPrice,
        totalSum,
        expectedSum,
      },
    } = this.props;
    const authorNames = authorList.map((author) => author.name).join(", ");

    return (
      <>
        <Helmet>
          <title>Book - {title}</title>
        </Helmet>
        <StyledJumbotron
          style={{ backgroundImage: `url(${coverImage})` }}
        ></StyledJumbotron>
        <Container>
          <StyledRow>
            <Col
              className="justify-content-center"
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 8, offset: 2 }}
              md={{ span: 3, offset: 0 }}
              lg={{ span: 3, offset: 0 }}
              xl={{ span: 3, offset: 0 }}
            >
              <Image fluid src={coverImage} alt={title}></Image>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8, offset: 1 }}
              lg={{ span: 8, offset: 1 }}
              xl={{ span: 8, offset: 1 }}
            >
              <h2
                style={{
                  height: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                {title}
              </h2>
            </Col>
          </StyledRow>
          <Row>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
            >
              <Card>
                <Card.Body>
                  <Card.Title className="text-uppercase">{title}</Card.Title>
                  {subscribersCount > 50 ? (
                    <Badge pill variant="warning">
                      Bestseller!
                    </Badge>
                  ) : null}
                  <CardRow label="Description">{description}</CardRow>
                  <CardRow label="Author">
                    {authorList.length === 0 ? "No author" : authorNames}
                  </CardRow>
                  <CardRow label="Pages count"> {pageCount} pages</CardRow>
                  <CardRow label="Language">{language}</CardRow>
                  <CardRow label="Progress">{progress}%</CardRow>
                  <CardRow label="Main price">${mainPrice}</CardRow>
                  <CardRow label="Minimum price">${minPrice}</CardRow>
                  <CardRow label="Total sum">${totalSum}</CardRow>
                  <CardRow label="Expected revenue"> ${expectedSum}</CardRow>
                  <CardRow label="Subscribers" delimeter={false}>
                    {subscribersCount}
                  </CardRow>
                </Card.Body>
              </Card>
              <BackButton />
            </Col>
            <Col
              className="justify-content-center"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
              xl={{ span: 3 }}
            >
              <AuthorCommission book={this.props.book} />
              <AuthorsContainer authors={authorList} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(withBook(withLoader(BookCard)));

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    if (history.action === "PUSH") {
      history.goBack();
    } else {
      history.push("/");
    }
  };
  return <Button onClick={goBack}>Back</Button>;
};
