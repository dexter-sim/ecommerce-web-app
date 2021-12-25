import React, { useState, createContext, useEffect } from "react";
import { productItems } from "../Data";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [items, setItems] = useState(() => {
    const stickyValue = window.localStorage.getItem("CartItems");
    return stickyValue !== null ? JSON.parse(stickyValue) : productItems;
  });

  useEffect(() => {
    window.localStorage.setItem("CartItems", JSON.stringify(items));
  }, ["CartItems", items]);

  return (
    <CartContext.Provider value={[items, setItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
