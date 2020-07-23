import React from "react";

class Signuptobook extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div className="card border-dark">
        <div className="card-body">
    <p className="card-text">Sign up and get latest information about "{book.title}" </p>
          <form>
            <div className="form-group row">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signuptobook;
