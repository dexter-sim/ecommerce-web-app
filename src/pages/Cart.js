import React, { useContext } from "react";
import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 3%;
  background-color: whitesmoke;
  flex: 1;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  flex: 3;
`;

const Image = styled.img`
  width: 25em;
`;

const InfoContainer = styled.div`
  flex: 2;
  align-self: center;
  padding: 1%;
`;

const Title = styled.h2`
  min-width: 15em;
  margin-bottom: 10px;
`;

const Price = styled.h2`
  margin-bottom: 10px;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Icon = styled.div`
  flex: 1;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  cursor: pointer;
  vertical-align: middle;
  margin-left: 10px;

  background-color: white;
  border-radius: 8px;
  border: 2px black solid;

  transition-duration: 0.4s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Total = styled.div`
  flex: 1;
  align-self: center;
`;

const GrandTotal = styled.h1`
  text-align: right;
  padding-right: 5%;
  margin-bottom: 10px;
`;

const Bottom = styled.div`
  text-align: right;
  padding-right: 5%;
`;

const Cart = () => {
  const [items, setItems] = useContext(CartContext);

  return (
    <Container>
      <h1 style={{ marginBottom: 15, textAlign: "center" }}>
        Your Shopping Cart
      </h1>
      {items
        .filter((item) => item.count > 0)
        .map((item) => (
          <Item key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Price>${item.price}</Price>
              <Quantity>
                <Icon>
                  <RemoveCircleOutline
                    style={{
                      fontSize: 30,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      items[item.index].count--;
                      setItems((items) => [...items]);
                    }}
                  />
                </Icon>
                <div style={{ flex: 1 }}>
                  <h2>{item.count}</h2>
                </div>
                <Icon>
                  <AddCircleOutline
                    style={{ fontSize: 30, cursor: "pointer" }}
                    onClick={() => {
                      items[item.index].count++;
                      setItems((items) => [...items]);
                    }}
                  />
                </Icon>
              </Quantity>
            </InfoContainer>
            <Total>
              <Price>${item.price * item.count}</Price>
              <p>Shipping: Free</p>
            </Total>
          </Item>
        ))}
      <GrandTotal>
        Subtotal: $
        {items.reduce((prev, curr) => prev + curr.count * curr.price, 0)}
      </GrandTotal>
      <Bottom>
        <Link to="/ecommerce-web-app/shop">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
        <Button>CHECKOUT ➜</Button>
      </Bottom>
    </Container>
  );
};

export default Cart;
