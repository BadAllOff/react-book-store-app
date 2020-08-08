import React from "react";

class AuthorCommission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_offer: this.props.book.min_price,
      authors_revenue: 0,
    };
  }

  componentDidMount() {
    this.calculateAuthorRevenue(this.state.user_offer);
    this.userOfferInput.focus(); 
  }

  handleChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value });
  }

  //Чую связь между двумя ниже функциями calculate - но уловить как в одну соединить не смог :)
  // пробовал через if-ыб но одно мешает стейту другого после запуска componentDidMount
  calculateAuthorRevenue(value) {
    let authors_revenue = ((value / 100) * 90).toFixed(2);
    let user_offer = value;

    this.setState({
      user_offer: user_offer,
      authors_revenue: authors_revenue,
    });
  }

  calculateUserOffer(authors_revenue) {
    let user_offer = ((authors_revenue / 90) * 100).toFixed(2);
    this.setState({
      user_offer: user_offer,
      authors_revenue: authors_revenue,
    });
  }

  render() {
    const { book } = this.props;
    const authors_revenue = this.state.authors_revenue;
    const user_offer = this.state.user_offer;

    return (
      <>
        <span className="form-group row">
          <small className="col-sm-7 col-form-label">If you pay:</small>
          <span className="col-sm-5">
            <input
              step="0.01"
              value={user_offer}
              className="form-control"
              name="user_offer"
              type="number"
              min={book.min_price}
              onChange={(e) => this.calculateAuthorRevenue(e.target.value)}
              ref={(input) => { this.userOfferInput = input; }}
            />
            <small className="form-text text-muted">
              Minimum ${book.min_price}
            </small>
          </span>
        </span>

        <span className="form-group row">
          <small className="col-sm-7 col-form-label">Author will get:</small>
          <span className="col-sm-5">
            <input
              step="0.01"
              value={authors_revenue}
              className="form-control"
              name="user_offer"
              type="number"
              onChange={(e) => this.calculateUserOffer(e.target.value)}
            />
          </span>
        </span>
      </>
    );
  }
}

export default AuthorCommission;
