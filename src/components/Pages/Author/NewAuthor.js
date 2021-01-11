import React, { useCallback } from "react";
import Layout from "../../Layout";
import { Container, Form, Button, Row, Col, Badge } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createAuthor } from "../../../lib/client";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const NewAuthorSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email(),
  about: Yup.string().required("Required"),
});

const formatValuesToSend = (values) => {
  return {
    fields: {
      name: values.name,
      email: values.email,
      about: values.about,
      avatar: [
        {
          url: values.avatar,
        },
      ],
    },
  };
};

const NewAuthor = () => {
  const history = useHistory();

  const { errors, register, handleSubmit, formState } = useForm({
    mode: "onTouched",
    resolver: yupResolver(NewAuthorSchema),
  });

  const { touched } = formState;

  const onSubmit = async (values) => {
    if (values.avatar[0]) {
      const image = new FormData();
      image.append("file", values.avatar[0]);
      image.append("upload_preset", "reactuploads");

      values.avatar = await fetch(
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
    }
    const data = formatValuesToSend(values);
    !values.avatar[0] && delete data.fields.avatar;

    return createAuthor(data).then((res) => {
      history.push("/");
    });
  };

  return (
    <Layout>
      <Container>
        <h1>Add author:</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Author photo
            </Form.Label>
            <Col sm="10">
              <Form.File
                name="avatar"
                sm="10"
                ref={register}
                isInvalid={!!errors.avatar}
                isValid={touched.avatar && !errors.avatar}
                feedback={errors.avatar && errors.avatar.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.avatar && errors.avatar.message}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Full Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="name"
                type="text"
                placeholder="ex. Jhon Doe"
                ref={register}
                isInvalid={!!errors.name}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name && errors.name.message}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                placeholder="jhon.doe@example.com"
                ref={register}
                isInvalid={!!errors.email}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email && errors.email.message}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              About the author
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                type="textarea"
                name="about"
                ref={register}
                isInvalid={!!errors.about}
                isValid={touched.about && !errors.about}
              />
              <Form.Control.Feedback type="invalid">
                {errors.about && errors.about.message}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default NewAuthor;
