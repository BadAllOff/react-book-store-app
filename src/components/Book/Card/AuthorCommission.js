import React from "react";

class AuthorCommission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOffer: Number(this.props.book.minPrice),
      authorsRevenue: 0,
    };
  }

  componentDidMount() {
    this.calculate(this.state.userOffer);
    this.userOfferInput.focus();
  }

  handleChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value });
  }

  calculate(sourcePrice, direction) {
    const power = direction === "to" ? 1 : -1;
    const minPrice = this.props.book.minPrice;
    const comission = 0.1;

    let price;
    let convertedPrice;

    if (direction === "to") {
      price = Math.max(minPrice, sourcePrice);

      convertedPrice = (price * (1 - comission) * power).toFixed(2);
    } else {
      // вычисления полной суммы которую должен заплатить юзер если
      // хочет что бы автор получил конкретную сумму указанную на слайдере автора.
      // Из известных из слайдера 90% суммы узнаём сколько будет 100% цена.
      price = ((sourcePrice / 90) * 100).toFixed(2);

      convertedPrice = sourcePrice;
    }

    this.setState(({ userOffer, authorsRevenue }) => ({
      userOffer: price,
      authorsRevenue: Math.abs(convertedPrice),
    }));
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
              min={book.minPrice}
              max={book.mainPrice + 100}
              onChange={(e) => {
                this.calculate(e.target.value, "to");
              }}
              ref={(input) => {
                this.userOfferInput = input;
              }}
            />
            <small className="form-text text-muted">
              Current ${userOffer} - Minimum ${book.minPrice}
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
              min={book.minPrice}
              max={book.mainPrice + 100}
              onChange={(e) => {
                console.log("triggered");
                this.calculate(e.target.value);
              }}
            />
            <small className="form-text text-muted">${authorsRevenue}</small>
          </span>
        </span>
      </>
    );
  }
}

export default AuthorCommission;
