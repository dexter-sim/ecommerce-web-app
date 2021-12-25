import React from "react";
import Products from "../components/Products";
import FilterCat from "../components/FilterCat";
import styled from "styled-components";
import FilterPrice from "../components/FilterPrice";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 0px;
  text-align: center;
`;

const Shop = () => {
  return (
    <Container>
      <Left>
        <h2>FILTER BY</h2>
        <FilterCat />
        <FilterPrice />
      </Left>
      <Products />
    </Container>
  );
};

export default Shop;
