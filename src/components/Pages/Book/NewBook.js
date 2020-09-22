import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { withAuthors, withLoader } from "../../HOC";

const NewBookSchema = Yup.object().shape({
  book_cover: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  pages_count: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  language: Yup.string().required("Required"),
  progress: Yup.number().required("Required").positive("Should be more than 0"),
  min_price: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  main_price: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  total_sum: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  expected_sum: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  subscribers_count: Yup.number()
    .required("Required")
    .positive("Should be more than 0"),
  authors: Yup.array().of(Yup.string().required("Required")),
});

const NewBook = ({ authors }) => {
  const [validated, setValidated] = useState(false);

  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <Formik
          initialValues={{
            book_cover: '',
            title: "",
            description: "Write short description for the book",
            pages_count: "200",
            language: "esperanto",
            progress: "10",
            min_price: "19.99",
            main_price: "12.21",
            total_sum: "1000",
            expected_sum: "12.21",
            subscribers_count: "100",
            authors: [],
          }}
          validationSchema={NewBookSchema}
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
            isValid,
          }) => (
            <Form onSubmit={handleSubmit}>
              {console.log(isValid)}
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
                    sm="10"
                    isValid={touched.book_cover && !errors.book_cover}
                    isInvalid={touched.book_cover && !!errors.book_cover}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.book_cover}
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
                    className={touched.name && errors.name ? "error" : null}
                    isInvalid={touched.title && !!errors.title}
                    isValid={touched.title && !errors.title}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
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
                    isInvalid={touched.description && !!errors.description}
                    isValid={touched.description && !errors.description}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
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
                    isInvalid={touched.pages_count && !!errors.pages_count}
                    isValid={touched.pages_count && !errors.pages_count}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.pages_count}
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
                    isInvalid={touched.language && !!errors.language}
                    isValid={touched.language && !errors.language}
                  >
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                    <option value="Latin">Latin</option>
                    <option value="esperanto">Esperanto</option>
                  </Form.Control>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.language}
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
                    isInvalid={touched.progress && !!errors.progress}
                    isValid={touched.progress && !errors.progress}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.progress}
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
                    isInvalid={touched.min_price && !!errors.min_price}
                    isValid={touched.min_price && !errors.min_price}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.min_price}
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
                    isInvalid={touched.main_price && !!errors.main_price}
                    isValid={touched.main_price && !errors.main_price}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.main_price}
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
                    isInvalid={touched.total_sum && !!errors.total_sum}
                    isValid={touched.total_sum && !errors.total_sum}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.total_sum}
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
                    isInvalid={touched.expected_sum && !!errors.expected_sum}
                    isValid={touched.expected_sum && !errors.expected_sum}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.expected_sum}
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
                    isInvalid={
                      touched.subscribers_count && !!errors.subscribers_count
                    }
                    isValid={
                      touched.subscribers_count && !errors.subscribers_count
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.subscribers_count}
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
                    isInvalid={touched.authors && !!errors.authors}
                    isValid={touched.authors && !errors.authors}
                  >
                    <option disabled> -- select an option -- </option>
                    {authors.map((author) => {
                      return (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.authors}
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
