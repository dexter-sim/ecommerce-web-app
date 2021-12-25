import React, { useState, createContext, useEffect } from "react";

export const FilterCatContext = createContext();

export const FilterCatProvider = (props) => {
  const [state, setState] = useState(() => {
    const stickyValue = window.localStorage.getItem("FilterCat");
    return stickyValue !== null ? JSON.parse(stickyValue) : [true, true, true];
  });

  useEffect(() => {
    window.localStorage.setItem("FilterCat", JSON.stringify(state));
  }, ["FilterCat", state]);

  return (
    <FilterCatContext.Provider value={[state, setState]}>
      {props.children}
    </FilterCatContext.Provider>
  );
};
