import React from "react";

class AuthorCard extends React.Component {
  render() {
    const { author } = this.props;

    return (
      <div className="card border-dark">
        <img className="card-img-top" src={author.avatar} alt={author.name} />
        <div className="card-body">
          <h5 className="card-title">{author.name}</h5>
          <p className="card-text">{author.about}</p>
          <p className="card-text">
            <small className="text-muted">{author.email}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default AuthorCard;