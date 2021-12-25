import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../Data";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: beige;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "2%"};
  right: ${(props) => props.direction === "right" && "2%"};

  margin: auto;
  cursor: pointer;
  opacity: 0.75;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.page * -100}vw);
  transition-duration: 1.25s;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 100px;
  color: white;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  width: 150px;
  cursor: pointer;
  margin-right: 60%;
  color: white;
  border: 2px white solid;
  background-color: transparent;
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Slider = () => {
  const [page, updatePage] = useState(0);

  const clickArrowButton = (direction) => {
    if (direction === "left") {
      updatePage(page === 0 ? sliderItems.length - 1 : page - 1);
    } else {
      updatePage(page === sliderItems.length - 1 ? 0 : page + 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => clickArrowButton("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper page={page}>
        {sliderItems.map((item) => (
          <Slide key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/ecommerce-web-app/shop">
                <Button>ORDER NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => clickArrowButton("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
