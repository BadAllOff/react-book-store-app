import React, { createContext } from "react";

export const WishListContext = createContext();

class WishListProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteBooks: JSON.parse(localStorage.getItem("favoriteBooks")) || {},
    };
  }

  render() {
    const { favoriteBooks } = this.state;
    return (
      <WishListContext.Provider value={favoriteBooks}>
        {this.props.children}
      </WishListContext.Provider>
    );
  }
}

export default WishListProvider;
