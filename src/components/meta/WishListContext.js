import {createContext} from 'react';

const WishListContext = JSON.parse(localStorage.getItem("favoriteBooks")) || {};

export default createContext({}); 