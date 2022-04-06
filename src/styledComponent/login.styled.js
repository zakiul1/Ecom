import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcfdec;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Span = styled.span`
  color: red;
  padding: 5px 0px 0px 0px;
`;
