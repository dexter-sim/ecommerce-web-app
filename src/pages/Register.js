import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: whitesmoke;
  padding: 2%;
`;

const Wrapper = styled.div`
  padding: 1%;
  margin: 2% 20%;

  border: 2px black solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Header = styled.h1`
  margin: 2% 20%;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  border: 1px black solid;
  margin: 2% 20%;
`;

const Button = styled.button`
  width: 100px;
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  padding: 8px;
  cursor: pointer;
  vertical-align: middle;
  margin: 2% 20%;

  background-color: white;
  border-radius: 8px;
  border: 2px black solid;

  transition-duration: 0.4s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Text = styled.p`
  cursor: pointer;
  margin: 1% 20%;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Header>REGISTER NEW ACCOUNT</Header>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Re-enter Password" />
        <Button>SIGN UP</Button>
        <Link
          to="/ecommerce-web-app/signin"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Text>Already have an account? Sign in</Text>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
