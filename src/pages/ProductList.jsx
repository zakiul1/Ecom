import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Ribbon from "../components/Ribbon";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background: transparent;
  border: 1px solid #e1dfdf;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Ribbon />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={"DEFAULT"}>
            <Option value="DEFAULT" disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select defaultValue={"DEFAULT"}>
            <Option value="DEFAULT" disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Short Product:</FilterText>
          <Select defaultValue={"DEFAULT"}>
            <Option value="DEFAULT" disabled>
              Newest
            </Option>
            <Option>Price(asc)</Option>
            <Option>Blue(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
