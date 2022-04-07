import styled from "styled-components";
export const Container = styled.div`
  height: 60px;
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
`;
export const CentreHeader = styled.div`
  flex: 1;
  text-align: center;
`;
export const SiteLogo = styled.h1`
  font-weight: bold;
`;
export const Rightheader = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const MenuItems = styled.ul`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Links = styled.li`
  margin-left: 15px;

  list-style: none;
`;
