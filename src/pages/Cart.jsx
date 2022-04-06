import React from "react";
import {
  Container,
  Wrapper,
  Tittle,
  Top,
  TopButton,
  TopTexts,
  Toptext,
  Bottom,
  Info,
  Product,
  Summary,
} from "../styledComponent/card.styled";

const Cart = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Cart;
