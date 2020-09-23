import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { withAuthors, withLoader } from "../../HOC";
import { createBook } from "../../../lib/client";
import { useHistory } from "react-router-dom";
import { bookPath } from "../../helpers/routes";

const NewBookSchema = Yup.object().shape({
  cover_image: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  page_count: Yup.number()
    .typeError("must be a number")
    .integer("Must be an integer")
    .required("Required")
    .moreThan(0, "Should be more than 0"),
  language: Yup.string().required("Required"),
  progress: Yup.number()
    .typeError("must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  min_price: Yup.number()
    .typeError("must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  main_price: Yup.number()
    .typeError("must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  total_sum: Yup.number()
    .typeError("must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  expected_sum: Yup.number()
    .typeError("must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  subscribers_count: Yup.number()
    .typeError("must be a number")
    .integer("Must be an integer")
    .required("Required")
    .positive("Should be more than 0"),
  // авторы всё еще не обязательны?
  authors: Yup.array(),
});

const NewBook = ({ authors }) => {
  const history = useHistory();
  return (
    <Layout>
      <Container>
        <h1>Add book:</h1>
        <Formik
          initialValues={{
            cover_image:
              "https://www.bookcoversclub.com/wp-content/uploads/2018/02/book-cover-352.jpg",
            title: "Awesome title for bestseller!",
            description: "Write short description for the book",
            page_count: "200",
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
            const data = formatData(values);
            console.log(JSON.stringify(data, null, 2));
            return createBook(data).then((res) => {
              const bookId = res.records[0].id;
              const redirectUri = bookPath(bookId);
              history.push(redirectUri);
            });
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
              {/* <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Book cover
                </Form.Label>
                <Col sm="10">
                  <Form.File
                    name="cover_image"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cover_image}
                    sm="10"
                    isValid={touched.cover_image && !errors.cover_image}
                    isInvalid={touched.cover_image && !!errors.cover_image}
                    feedback={errors.cover_image}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.cover_image}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group> */}

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Book cover
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    sm="10"
                    size="sm"
                    type="text"
                    name="cover_image"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cover_image}
                    isInvalid={touched.cover_image && !!errors.cover_image}
                    isValid={touched.cover_image && !errors.cover_image}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
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
                    name="page_count"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.page_count}
                    isInvalid={touched.page_count && !!errors.page_count}
                    isValid={touched.page_count && !errors.page_count}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.page_count}
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

const formatData = (values) => {
  return {
    fields: {
      title: values.title,
      description: values.description,
      page_count: Number(values.page_count),
      language: values.language,
      progress: Number(values.progress),
      cover_image: [
        {
          url: values.cover_image,
        },
      ],
      main_price: Number(values.main_price),
      min_price: Number(values.min_price),
      total_sum: Number(values.total_sum),
      expected_sum: Number(values.expected_sum),
      subscribers_count: Number(values.subscribers_count),
      authors: values.authors,
    },
  };
};
