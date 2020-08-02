import React from "react";

const Field = (props) => {
  const { name, label, value, type, handleChange, hint } = props;

  return (
    <>
      <label>{label}</label>
      <input
        className="form-control"
        name={name}
        value={value}
        type={type}
        onChange={(e) => handleChange(name, e)}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </>
  );
};

export default Field;
