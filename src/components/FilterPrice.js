import React, { useContext } from "react";
import styled from "styled-components";
import { Slider } from "@material-ui/core";
import { FilterPriceContext } from "../context/FilterPriceContext";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h3`
  padding-bottom: 45px;
`;

const FilterPrice = () => {
  const [state, setState] = useContext(FilterPriceContext);

  const updateRange = (event, newData) => setState(newData);

  return (
    <Container>
      <Header>PRICE</Header>
      <Slider
        value={state}
        min={0}
        max={1499}
        step={100}
        style={{ width: "80%" }}
        valueLabelDisplay="on"
        onChange={updateRange}
      />
    </Container>
  );
};

export default FilterPrice;
