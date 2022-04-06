import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Tittle = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
export const TopTexts = styled.div``;
export const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Info = styled.div`
  flex: 3;
`;
export const Summary = styled.div`
  flex: 1;
`;
export const Product = styled.div``;
