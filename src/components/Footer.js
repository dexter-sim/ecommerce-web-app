import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  MailOutline,
  LocationOn,
  LocalPhone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  background-color: #dfcfbe;
`;

const Left = styled.div`
  flex: 3;
`;
const Middle = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 4;
`;

const Header = styled.h1`
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 20px;
  padding: 8px 0px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0px;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Header>Made By Dexter</Header>
        <h3 style={{ padding: 10 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.
        </h3>
        <Icons>
          <Icon>
            <Facebook style={{ fontSize: 50, cursor: "pointer" }} />
          </Icon>
          <Icon>
            <Instagram style={{ fontSize: 50, cursor: "pointer" }} />
          </Icon>
          <Icon>
            <Twitter style={{ fontSize: 50, cursor: "pointer" }} />
          </Icon>
          <Icon>
            <a
              href="https://github.com/dexter-sim"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <GitHub style={{ fontSize: 45, cursor: "pointer" }} />
            </a>
          </Icon>
        </Icons>
      </Left>
      <Middle>
        <Header>Useful Links</Header>
        <List>
          <ListItem>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              Catalogue
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              Cart
            </Link>
          </ListItem>

          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Middle>
      <Right>
        <Header>Contact Us</Header>
        <List>
          <ListItem>
            <LocationOn
              style={{ fontSize: "1.5em", verticalAlign: "middle" }}
            />
            {`  `}21 Lower Kent Ridge Rd, Singapore 119077
          </ListItem>
          <ListItem>
            <LocalPhone
              style={{ fontSize: "1.5em", verticalAlign: "middle" }}
            />
            {`  `}+65 6516 6666
          </ListItem>
          <ListItem>
            <MailOutline
              style={{ fontSize: "1.5em", verticalAlign: "middle" }}
            />
            {`  `}contact@mail.com
          </ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
