import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  Container,
  LeftFooter,
  Logo,
  Descriptaion,
  SocicalContainer,
  SocialIcon,
  CenterFooter,
  List,
  ListItem,
  RightFooter,
  Title,
  ContactItem,
  Payment,
} from "../styledComponent/footer.styled";

const Footer = () => {
  return (
    <Container>
      <LeftFooter>
        <Logo>E Com..</Logo>
        <Descriptaion>
          If you are still getting the same error, execute the below command and
          see whether it able to solve the error. The audit fix returns exit
          code 0 if there are no issues or it successfully fixed all errors.
        </Descriptaion>
        <SocicalContainer>
          <SocialIcon color="#3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#1d9bf0">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocicalContainer>
      </LeftFooter>
      <CenterFooter>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms And Condition</ListItem>
        </List>
      </CenterFooter>
      <RightFooter>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> House No-08 ,Road
          no-06, Nikaton, Gulshan-01
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +8801611360040
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          sales.ecom@za.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightFooter>
    </Container>
  );
};

export default Footer;
