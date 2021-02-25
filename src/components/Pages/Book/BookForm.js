import React from "react";
import { withAuthors, withLoader } from "../../HOC";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Row, Col } from "react-bootstrap";
import { createBook } from "../../../lib/client";
import { useHistory } from "react-router-dom";
import { bookPath } from "../../helpers/routes";
import Dropzone from "react-dropzone";

const formatValuesToSend = (values) => {
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

const NewBookSchema = Yup.object().shape({
  cover_image: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  page_count: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .required("Required")
    .moreThan(0, "Should be more than 0"),
  language: Yup.string().required("Required"),
  progress: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  min_price: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  main_price: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  total_sum: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  expected_sum: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Should be more than 0"),
  subscribers_count: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .required("Required")
    .positive("Should be more than 0"),
  // авторы всё еще не обязательны?
  authors: Yup.array(),
});

const BookForm = ({ authors = [], initialValues = {} }) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        cover_image: initialValues.cover_image || "",
        title: initialValues.title || "",
        description: initialValues.description || "",
        page_count: initialValues.page_count || "",
        language: initialValues.language || "",
        progress: initialValues.progress || "",
        min_price: initialValues.min_price || "",
        main_price: initialValues.main_price || "",
        total_sum: initialValues.total_sum || "",
        expected_sum: initialValues.expected_sum || "",
        subscribers_count: initialValues.subscribers_count || "",
        authors: initialValues.authors || [],
      }}
      validationSchema={NewBookSchema}
      onSubmit={async (values) => {
        const image = new FormData();
        image.append("file", values.cover_image);
        image.append("upload_preset", "reactuploads");
        values.cover_image = await fetch(
          "https://api.cloudinary.com/v1_1/react-test-app/image/upload",
          {
            method: "post",
            body: image,
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((img) => {
            return img.secure_url;
          });

        return createBook(formatValuesToSend(values)).then((res) => {
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
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Book cover
            </Form.Label>
            <Col sm="10">
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setFieldValue("cover_image", acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <section>
                    <div {...getRootProps()}>
                      <Form.File
                        name="cover_image_mock"
                        value={values.cover_image_mock}
                        sm="10"
                        {...getInputProps()}
                      />
                      {isDragActive ? (
                        <p>Drop the files here ...</p>
                      ) : (
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      )}
                      <Form.Control.Feedback
                        style={{ display: "block" }}
                        type="invalid"
                      >
                        {errors.cover_image}
                      </Form.Control.Feedback>
                      <Form.File
                        style={{ display: "none" }}
                        className="invisible"
                        name="cover_image"
                      />
                    </div>
                  </section>
                )}
              </Dropzone>
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
                isValid={touched.subscribers_count && !errors.subscribers_count}
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
                <option disabled> -- select authors -- </option>
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
  );
};

export default withAuthors(withLoader(BookForm));
