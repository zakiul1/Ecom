import axios from "axios";
import Notiflix from "notiflix";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Links,
  Span,
} from "../styledComponent/login.styled";

const Login = () => {
  const history = useNavigate();
  const [loginInput, setloginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setloginInput((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/login", data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          Notiflix.Notify.success(res.data.message);
          history("/");
        } else if (res.data.status === 401) {
          Notiflix.Notify.warning(res.data.message);
        } else {
          setloginInput((preVal) => {
            return {
              ...preVal,
              error_list: res.data.validation_error,
            };
          });
        }
      });
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={loginSubmit}>
          <Input
            placeholder="User Name Or Email"
            name="email"
            value={loginInput.email}
            onChange={handleInput}
          />
          <Span>{loginInput.error_list.email}</Span>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={loginInput.password}
            onChange={handleInput}
          />
          <Span>{loginInput.error_list.password}</Span>

          <Button type="submit">Login</Button>
          <Links>Forget Password?</Links>
          <Links as={Link} to="/registation">
            Create a New Account
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
