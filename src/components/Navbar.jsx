import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Container,
  Wrapper,
  LeftHeader,
  Language,
  SearchContainer,
  Input,
  CentreHeader,
  SiteLogo,
  Rightheader,
  MenuItems,
} from "../styledComponent/navbar.style";
import { Link } from "react-router-dom";

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
          <MenuItems>
            <Link to="/">HOME</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/cart">CART</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/registation">REGISTER</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/login">SIGN IN</Link>
          </MenuItems>

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
