import React from "react";

class Author extends React.Component {
  render() {
    console.log(this.props);
    const { author } = this.props;

    return (
      <div className="card border-dark">
        <img class="card-img-top" src={author.avatar} alt={author.name} />
        <div class="card-body">
          <h5 class="card-title">{author.name}</h5>
          <p class="card-text">{author.about}</p>
          <p class="card-text">
            <small class="text-muted">{author.email}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Author;
