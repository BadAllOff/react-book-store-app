import React from "react";

const withLoader = (EnhancedComponent) => (props) =>
  props.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <EnhancedComponent {...props} />
  );

export default withLoader;
