import React from "react";

class AuthorCommission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOffer: this.props.book.min_price,
      authorsRevenue: 0,
    };
  }

  componentDidMount() {
    this.calculateAuthorRevenue(this.state.userOffer);
    this.userOfferInput.focus();
  }

  handleChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value });
  }

  //Чую связь между двумя ниже функциями calculate - но уловить как в одну соединить не смог :)
  // пробовал через if-ыб но одно мешает стейту другого после запуска componentDidMount
  calculateAuthorRevenue(value) {
    let min_price = this.props.book.min_price;
    let authorsRevenue = ((value / 100) * 90).toFixed(2);
    let userOffer = value;

    if (userOffer >= min_price) {
      this.setState({
        userOffer: userOffer,
        authorsRevenue: authorsRevenue,
      });
    }
  }

  calculateUserOffer(value) {
    let min_price = this.props.book.min_price;
    let userOffer = ((value / 90) * 100).toFixed(2);

    if (userOffer >= min_price) {
      this.setState({
        userOffer: userOffer,
        authorsRevenue: value,
      });
    }
  }

  render() {
    const { book } = this.props;
    const authorsRevenue = this.state.authorsRevenue;
    const userOffer = this.state.userOffer;

    return (
      <>
        <span className="form-group row">
          <small className="col-sm-4 col-form-label">If you pay:</small>
          <span className="col-sm-8">
            <input
              step="0.01"
              value={userOffer}
              className="form-control slider"
              name="userOffer"
              type="range"
              min={book.min_price}
              max={book.main_price + 100}
              onChange={(e) => this.calculateAuthorRevenue(e.target.value)}
              ref={(input) => {
                this.userOfferInput = input;
              }}
            />
            <small className="form-text text-muted">
              Current ${userOffer} - Minimum ${book.min_price}
            </small>
          </span>
        </span>

        <span className="form-group row">
          <small className="col-sm-4 col-form-label">Author will get:</small>
          <span className="col-sm-8">
            <input
              step="0.01"
              value={authorsRevenue}
              className="form-control slider"
              name="userOffer"
              type="range"
              min={book.min_price}
              max={book.main_price + 100}
              onChange={(e) => this.calculateUserOffer(e.target.value)}
            />
            <small className="form-text text-muted">${authorsRevenue}</small>
          </span>
        </span>
      </>
    );
  }
}

export default AuthorCommission;
