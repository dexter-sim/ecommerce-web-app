import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 45vh;
  padding: 12%;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  padding: 1.5%;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 35px;
  padding: 1.5%;
`;

const InputContainer = styled.div`
  text-align: center;
  display: flex;
  padding: 1.5% 25%;
`;

const Input = styled.input`
  flex: 9;
  font-size: 20px;
  padding: 10px;
  border: 1px black solid;
`;

const Button = styled.button`
  border: 1px solid black;
  flex: 1;
  background-color: transparent;
  transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>SUBSCRIBE TO OUR NEWSLETTER</Title>
      <Subtitle>GET UPDATES ON NEW PRODUCTS AND DISCOUNTS</Subtitle>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send style={{ verticalAlign: "middle" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
