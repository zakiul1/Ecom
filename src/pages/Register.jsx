import axios from "axios";
import Notiflix from "notiflix";
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agrement,
  Button,
  Span,
} from "../styledComponent/registation.styled";
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const history = useNavigate();
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setinputValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: inputValue.name,
      email: inputValue.email,
      password: inputValue.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/registation`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          Notiflix.Notify.success(res.data.message);
          history("/login");
        } else {
          setinputValue({
            ...inputValue,
            error_list: res.data.validation_error,
          });
        }
      });
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={registerSubmit}>
          <Input
            placeholder="Name"
            name="name"
            value={inputValue.name}
            onChange={handleChangeInput}
          />
          <Span>{inputValue.error_list.name}</Span>
          <Input
            placeholder="Email"
            name="email"
            value={inputValue.email}
            onChange={handleChangeInput}
          />
          <Span>{inputValue.error_list.email}</Span>
          <Input
            placeholder="Password"
            name="password"
            value={inputValue.password}
            onChange={handleChangeInput}
          />
          <Span>{inputValue.error_list.password}</Span>
          <Agrement>
            By creating an account , I consent to the processing of my personal
            data in accoradance with the <b>PRIVICY POLICY</b>
          </Agrement>
          <Button type="submit">Create</Button>
          <Links as={Link} to="/login">
            Already you have account?
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
