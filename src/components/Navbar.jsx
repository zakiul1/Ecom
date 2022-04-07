import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge, Button } from "@mui/material";
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
  Links,
} from "../styledComponent/navbar.style";
import { Link, useNavigate } from "react-router-dom";

import Notiflix from "notiflix";
import axios from "axios";

const Navbar = () => {
  const history = useNavigate();
  const logOuthandle = (e) => {
    e.preventDefault();

    Notiflix.Confirm.show(
      "Notiflix Confirm",
      "Do you want to Logout?",
      "Yes",
      "No",
      function okCb() {
        axios.post(`/api/logout`).then((res) => {
          if (res.data.status === 200) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_name");
            history("/");
          }
        });
      },
      function cancelCb() {},
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };
  var authbutton = "";
  if (!localStorage.getItem("auth_token")) {
    authbutton = (
      <>
        <Links>
          <Link style={{ textDecoration: "none" }} to="/registation">
            REGISTATION
          </Link>
        </Links>
        <Links>
          <Link style={{ textDecoration: "none" }} to="/login">
            LOGIN
          </Link>
        </Links>
      </>
    );
  } else {
    authbutton = (
      <>
        <Button onClick={logOuthandle} size="small">
          Log Out
        </Button>
      </>
    );
  }

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
            <Links>
              <Link style={{ textDecoration: "none" }} to="/">
                HOME
              </Link>
            </Links>

            <Links>
              <Link style={{ textDecoration: "none" }} to="/cart">
                CART
              </Link>
            </Links>
            {authbutton}
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
