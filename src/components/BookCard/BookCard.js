import React from "react";
import AuthorsList from "../AuthorCard/AuthorList";
import SignUpToBook from "./SignUpToBook";
class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const isBestseller = book.subscribers_count > 50 ? true : false;

    return (
      <div className="card-columns">
        <div className="card border-dark">
          <img
            src={book.cover_image}
            className="card-img-top"
            alt={book.title}
          />
          <div className="card-body">
            <h5 className="card-title text-uppercase">
              {book.title}
              {isBestseller && (
                <>
                  <br />
                  <span className="badge badge-pill badge-warning">
                    Bestseller!
                  </span>
                </>
              )}
            </h5>
            <p className="card-text text-primary">Description</p>
            <p className="pull-right text-right"> {book.description}</p>
            <hr />
            <p className="card-text text-primary">Authors</p>
            {console.log(book.authors.length)}
            {book.authors.length === 0 && (
              <p className="pull-right text-right">No author</p>
            )}
            {book.authors.map((author) => (
              <p key={author.id} className="pull-right text-right">
                {author.name}
              </p>
            ))}
            <hr />
            <p className="card-text text-primary">Pages count</p>
            <p className="pull-right text-right"> {book.page_count} pages</p>
            <hr />
            <p className="card-text text-primary">Language</p>
            <p className="pull-right text-right"> {book.language}</p>
            <hr />
            <p className="card-text text-primary">Progress</p>
            <p className="pull-right text-right"> {book.progress}%</p>
            <hr />
            <p className="card-text text-primary">Minimum price</p>
            <p className="pull-right text-right"> ${book.min_price}</p>
            <hr />
            <p className="card-text text-primary">Main price</p>
            <p className="pull-right text-right"> ${book.main_price}</p>
            <hr />
            <p className="card-text text-primary">Total sum</p>
            <p className="pull-right text-right"> ${book.total_sum}</p>
            <hr />
            <p className="card-text text-primary">Expected revenue</p>
            <p className="pull-right text-right"> ${book.expected_sum}</p>
            <hr />
            <p className="card-text text-primary">Subscribers</p>
            <p className="pull-right text-right"> {book.subscribers_count}</p>
          </div>
        </div>
        {/* логично же не тратить ресурсы на этот блок если авторов нет и читатель уже был уведомлён выше */}
        {book.authors.length != 0 && <AuthorsList authors={book.authors} />}
        <SignUpToBook book={book} />
      </div>
    );
  }
}

export default BookCard;
