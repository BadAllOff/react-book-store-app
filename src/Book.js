import React from "react";
import Author from './Author';
import Signuptobook from './SIgnUpToBook'
class Book extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {book} = this.props;
    const authors = book.authors.filter(function(a, index) {if (index < 3){ return a; }});
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
            <h5 className="card-title text-uppercase">{book.title} 
            {isBestseller && 
            <>
              <br />
              <span className="badge badge-pill badge-warning">Bestseller!</span>
            </>}
            </h5>
            <p className="card-text "><span className="text-primary">Description</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">{book.description}</span> </p>
            <hr/>
            <p className="card-text "><span className="text-primary">Authors</span></p>
            {book.authors.map(author => (        
            <p key={author.id} className="pull-right text-right"> <span className="pull-right text-right">{author.name}</span> </p>
            ))}
            <hr/>
            <p className="card-text"><span className="text-primary">Pages count</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">{book.page_count} pages</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Language</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">{book.language}</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Progress</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">{book.progress}%</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Minimum price</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">${book.min_price}</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Main price</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">${book.main_price}</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Total sum</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">${book.total_sum}</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Expected revenue</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">${book.expected_sum}</span> </p>
            <hr/>
            <p className="card-text"><span className="text-primary">Subscribers</span></p>
            <p className="pull-right text-right"> <span className="pull-right text-right">{book.subscribers_count}</span> </p>
          </div>
        </div>
        {
          authors.map(author => (
            <Author key={author.id} author={author} />
          ))
        }
        <Signuptobook book={book} />
      </div>
    );
  }
}

export default Book;
