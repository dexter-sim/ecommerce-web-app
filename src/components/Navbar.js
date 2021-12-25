import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Container = styled.div`
  background-color: #dddddd;
`;

const Wrapper = styled.div`
  padding: 1% 2%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Mid = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 8%;
`;

export const Navbar = () => {
  const [items] = useContext(CartContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" style={{ fontSize: 16 }} />
            <Search style={{ fontSize: 16, cursor: "pointer" }} />
          </SearchContainer>
        </Left>
        <Mid>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              M I C R O V E R S E
            </Link>
          </Logo>
        </Mid>
        <Right>
          <MenuItem>
            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              CATALOGUE
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge
                badgeContent={items.filter((item) => item.count > 0).length}
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
