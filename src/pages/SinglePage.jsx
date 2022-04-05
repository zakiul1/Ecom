import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Ribbon from "../components/Ribbon";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FinterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: center;
`;
const Amount = styled.span`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:hover {
    background-color: teal;
    color: #fff;
  }
`;

const SinglePage = () => {
  return (
    <Container>
      <Ribbon />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://static-01.daraz.com.bd/p/6901a02f795e95919cc3b09cc7e70215.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Round Neck T-Shirt</Title>
          <Description>
            But in my latest React form (a small modal), I'm passing the values
            for the form as props and then using a useEffect to populate the
            associated Context. So the FIRST time the Select is rendered,
            default_value is set to null. Then when the Context is populated and
            the Select is supposed to be re-rendered, default_value cannot be
            changed and thus the initial default value is not set.
          </Description>
          <Price>$50</Price>
          <FinterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="pink" />
              <FilterColor color="yellow" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FinterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add To Card</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SinglePage;
