import styled from "styled-components";
import React, { useContext } from "react";
import { productItems } from "../Data";
import { Link } from "react-router-dom";
import { FilterCatContext } from "../context/FilterCatContext";
import { FilterPriceContext } from "../context/FilterPriceContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  flex: 4;
`;

const ImgContainer = styled.div`
  height: 60%;
`;

const Image = styled.img`
  width: 18em;
`;

const Item = styled.div`
  padding: 2%;
`;

const Title = styled.h2`
  text-align: left;
  margin: 8px 0px;
`;

const Price = styled.h3`
  text-align: left;
  margin: 8px 0px;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  font-weight: 700;
  font-size: 13px;
  padding: 8px;
  cursor: pointer;
  vertical-align: middle;

  background-color: white;
  border-radius: 5px;
  border: 2px black solid;

  transition-duration: 0.4s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Products = () => {
  const [catState] = useContext(FilterCatContext);
  const [priceState] = useContext(FilterPriceContext);

  return (
    <Container>
      {productItems
        .filter((item) => catState[item.cat])
        .filter(
          (item) => item.price >= priceState[0] && item.price <= priceState[1]
        )
        .map((item) => (
          <Item key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <Title>{item.title}</Title>
            <Price>${item.price}</Price>
            <Link to={`/ecommerce-web-app/shop/${item.id}`}>
              <Button>VIEW DETAILS ➜</Button>
            </Link>
          </Item>
        ))}
    </Container>
  );
};

export default Products;
