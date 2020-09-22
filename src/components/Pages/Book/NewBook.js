import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";
import { Formik } from "formik";
import { withAuthors, withLoader } from "../../HOC";

const NewBook = ({ authors }) => {
  const [validated, setValidated] = useState(false);

  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <Formik
          initialValues={{
            book_cover: "",
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
            [
              "book_cover",
              "title",
              "description",
              "pages_count",
              "language",
              "progress",
              "min_price",
              "main_price",
              "total_sum",
              "expected_sum",
              "subscribers_count",
              "authors",
            ].map((variant) => {
              if (!values[`${variant}`]) {
                errors[variant] = "Required";
              }
            });

            errors && setValidated(true);
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
            <Form validated={validated} onSubmit={handleSubmit}>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Book cover
                </Form.Label>
                <Col sm="10">
                  <Form.File
                    name="book_cover"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.book_cover}
                    required
                    sm="10"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.book_cover &&
                      touched.book_cover &&
                      errors.book_cover}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

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
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.title && touched.title && errors.title}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.pages_count &&
                      touched.pages_count &&
                      errors.pages_count}
                  </Form.Control.Feedback>
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
                    required
                  >
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                    <option value="Latin">Latin</option>
                    <option value="esperanto">Esperanto</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.language && touched.language && errors.language}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.progress && touched.progress && errors.progress}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.min_price && touched.min_price && errors.min_price}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.main_price &&
                      touched.main_price &&
                      errors.main_price}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.total_sum && touched.total_sum && errors.total_sum}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.expected_sum &&
                      touched.expected_sum &&
                      errors.expected_sum}
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subscribers_count &&
                      touched.subscribers_count &&
                      errors.subscribers_count}
                  </Form.Control.Feedback>
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
                    required
                  >
                    {authors.map((author) => {
                      return (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.authors && touched.authors && errors.authors}
                  </Form.Control.Feedback>
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
