import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcfdec;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Conform Password" />
          <Agrement>
            By creating an account , I consent to the processing of my personal
            data in accoradance with the <b>PRIVICY POLICY</b>
          </Agrement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
