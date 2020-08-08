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
    let min_price = this.props.book.min_price;
    let authors_revenue = ((value / 100) * 90).toFixed(2);
    let user_offer = value;

    if (user_offer >= min_price) {
      this.setState({
        user_offer: user_offer,
        authors_revenue: authors_revenue,
      });
    }
  }

  calculateUserOffer(value) {
    let min_price = this.props.book.min_price;
    let user_offer = ((value / 90) * 100).toFixed(2);

    if (user_offer >= min_price) {
      this.setState({
        user_offer: user_offer,
        authors_revenue: value,
      });
    }
  }

  render() {
    const { book } = this.props;
    const authors_revenue = this.state.authors_revenue;
    const user_offer = this.state.user_offer;

    return (
      <>
        <span className="form-group row">
          <small className="col-sm-4 col-form-label">If you pay:</small>
          <span className="col-sm-8">
            <input
              step="0.01"
              value={user_offer}
              className="form-control"
              name="user_offer"
              type="range"
              min={book.min_price}
              max={book.main_price + 100}
              onChange={(e) => this.calculateAuthorRevenue(e.target.value)}
              ref={(input) => {
                this.userOfferInput = input;
              }}
            />
            <small className="form-text text-muted">
              Current ${user_offer} - Minimum ${book.min_price}
            </small>
          </span>
        </span>

        <span className="form-group row">
          <small className="col-sm-4 col-form-label">Author will get:</small>
          <span className="col-sm-8">
            <input
              step="0.01"
              value={authors_revenue}
              className="form-control"
              name="user_offer"
              type="range"
              onChange={(e) => this.calculateUserOffer(e.target.value)}
            />
            <small className="form-text text-muted">${authors_revenue}</small>
          </span>
        </span>
      </>
    );
  }
}

export default AuthorCommission;
