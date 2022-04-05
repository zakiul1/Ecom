import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const LeftFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1``;
export const Descriptaion = styled.p`
  margin: 20px 0px;
`;
export const SocicalContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #fff;
`;
export const CenterFooter = styled.div`
  flex: 1;
`;
export const Title = styled.h3`
  margin: 30px 0px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
export const RightFooter = styled.div`
  flex: 1;
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const Payment = styled.img`
  width: 50%;
`;
