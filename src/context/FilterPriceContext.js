import React, { useState, createContext, useEffect } from "react";

export const FilterPriceContext = createContext();

export const FilterPriceProvider = (props) => {
  const [state, setState] = useState(() => {
    const stickyValue = window.localStorage.getItem("FilterPrice");
    return stickyValue !== null ? JSON.parse(stickyValue) : [0, 1999];
  });

  useEffect(() => {
    window.localStorage.setItem("FilterPrice", JSON.stringify(state));
  }, ["FilterPrice", state]);

  return (
    <FilterPriceContext.Provider value={[state, setState]}>
      {props.children}
    </FilterPriceContext.Provider>
  );
};
