import styled from "@emotion/styled";

import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const CentreHeader = styled.div`
  flex: 1;
  text-align: center;
`;
const SiteLogo = styled.h1`
  font-weight: bold;
`;
const Rightheader = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftHeader>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </LeftHeader>
        <CentreHeader>
          <SiteLogo>E Com...</SiteLogo>
        </CentreHeader>
        <Rightheader>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItems>
        </Rightheader>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
