import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";
import { Formik } from "formik";
import { withAuthors, withLoader } from "../../HOC";

const NewBook = ({ authors }) => {
  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <Formik
          initialValues={{
            title: "Book title",
            description: "Write short description for the book",
            pages_count: "",
            language: "esperanto",
            progress: "",
            min_price: "",
            main_price: "",
            total_sum: "",
            expected_sum: "",
            subscribers_count: "",
            authors: [],
          }}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Book title
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && errors.title}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    sm="10"
                    size="sm"
                    type="textarea"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Pages count
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="pages_count"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pages_count}
                  />
                  {errors.pages_count &&
                    touched.pages_count &&
                    errors.pages_count}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Language
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    as="select"
                    sm="10"
                    size="sm"
                    type="text"
                    name="language"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.language}
                  >
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                    <option value="Latin">Latin</option>
                    <option value="esperanto">Esperanto</option>
                  </Form.Control>
                  {errors.language && touched.language && errors.language}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Progress
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="progress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.progress}
                  />
                  {errors.progress && touched.progress && errors.progress}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Minimal price
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="min_price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.min_price}
                  />
                  {errors.min_price && touched.min_price && errors.min_price}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Main price
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="main_price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.main_price}
                  />
                  {errors.main_price && touched.main_price && errors.main_price}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Total sum
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="total_sum"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.total_sum}
                  />
                  {errors.total_sum && touched.total_sum && errors.total_sum}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Expected sum
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="expected_sum"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expected_sum}
                  />
                  {errors.expected_sum &&
                    touched.expected_sum &&
                    errors.expected_sum}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Subscribers Count
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="subscribers_count"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subscribers_count}
                  />
                  {errors.subscribers_count &&
                    touched.subscribers_count &&
                    errors.subscribers_count}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Authors
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    as="select"
                    sm="10"
                    size="sm"
                    type="text"
                    name="authors"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.authors}
                    multiple
                  >
                    {authors.map((author) => {
                      return (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  {errors.authors && touched.authors && errors.authors}
                </Col>
              </Form.Group>

              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default withAuthors(withLoader(NewBook));
