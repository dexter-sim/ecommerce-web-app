import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { productItems } from "../Data";
import { Link } from "react-router-dom";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { CartContext } from "../context/CartContext";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  background-color: whitesmoke;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  padding: 2%;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 2%;
  align-self: center;
`;

const Title = styled.h1`
  text-align: left;
  margin-bottom: 15px;
`;

const Desc = styled.h2`
  text-align: left;
  margin-bottom: 15px;
`;

const Price = styled.h2`
  text-align: left;
  margin-bottom: 15px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 15em;
  justify-content: space-between;
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
  border-radius: 8px;
  border: 2px black solid;

  transition-duration: 0.4s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Product = () => {
  let { id } = useParams();
  const [count, setCount] = useState(1);
  const [items, setItems] = useContext(CartContext);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      {productItems
        .filter((item) => item.id === id)
        .map((item) => (
          <Item key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Price>${item.price}</Price>
              <Row>
                <RemoveCircleOutline
                  onClick={decrement}
                  style={{ fontSize: 30, cursor: "pointer" }}
                />
                <h2>{count}</h2>
                <AddCircleOutline
                  onClick={increment}
                  style={{ fontSize: 30, cursor: "pointer" }}
                />
              </Row>
              <Link
                to="/cart"
                onClick={() => {
                  items[item.index].count += count;
                  setItems((items) => [...items]);
                }}
              >
                <Button>ADD TO CART ➜</Button>
              </Link>
            </InfoContainer>
          </Item>
        ))}
    </div>
  );
};

export default Product;
