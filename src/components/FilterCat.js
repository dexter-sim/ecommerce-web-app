import { Checkbox } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { FilterCatContext } from "../context/FilterCatContext";

const Container = styled.div`
  text-align: center;
  margin: 30px 0px;
`;

const Category = styled.div`
  margin: 20px 0px;
`;

const Header = styled.h3``;

const FilterCat = () => {
  const [state, setState] = useContext(FilterCatContext);

  const updateState = (i) => {
    state[i] = !state[i];
    setState((items) => [...items]);
  };

  return (
    <Container>
      <Header>CATEGORY</Header>
      <Category>
        <Checkbox
          id="0"
          checked={state[0]}
          onChange={() => updateState(0)}
          style={{ color: "blue" }}
        />
        <label
          htmlFor="0"
          style={{ verticalAlign: "middle", cursor: "pointer" }}
        >
          CPU
        </label>
      </Category>
      <Category>
        <Checkbox
          id="1"
          checked={state[1]}
          onChange={() => updateState(1)}
          style={{ color: "blue" }}
        />
        <label
          htmlFor="1"
          style={{ verticalAlign: "middle", cursor: "pointer" }}
        >
          GPU
        </label>
      </Category>
      <Category>
        <Checkbox
          id="2"
          checked={state[2]}
          onChange={() => updateState(2)}
          style={{ color: "blue" }}
        />
        <label
          htmlFor="2"
          style={{ verticalAlign: "middle", cursor: "pointer" }}
        >
          RAM
        </label>
      </Category>
    </Container>
  );
};

export default FilterCat;
