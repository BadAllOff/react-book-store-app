import React from "react";
import Form from "react-bootstrap/Form";

const Field = (props) => {
  const {
    name,
    label,
    value,
    type,
    inputType: InputType,
    handleChange,
    hint,
    options = {},
  } = props;

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...options}
        name={name}
        value={value}
        type={type}
        onChange={(e) => handleChange(name, e)}
      />
      {hint && <Form.Text className="text-muted">{hint}</Form.Text>}
    </Form.Group>
  );
};

export default Field;
