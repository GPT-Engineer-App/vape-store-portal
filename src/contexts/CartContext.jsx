import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};
