import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Ribbon from "../components/Ribbon";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Tittle = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;
const Product = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Ribbon />
      <Navbar />
      <Wrapper>
        <Tittle>Your Bag</Tittle>
        <Top>
          <TopButton>Continue Shoping</TopButton>
          <TopTexts>
            <Toptext>Shoping Bag (2)</Toptext>
            <Toptext>Your Wish List (0)</Toptext>
          </TopTexts>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product></Product>
          </Info>
          <Summary>Summary </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
