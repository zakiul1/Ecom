import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';


const Container=styled.div`
    display: flex;
`
const LeftFooter=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo=styled.h1`
    
`
const Descriptaion=styled.p`
    margin: 20px 0px;
`
const SocicalContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    background-color: ${(props)=>props.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #fff;
`
const CenterFooter=styled.div`
    flex: 1;
`
const RightFooter=styled.div`
    flex: 1;
`
const Footer = () => {
  return (
    <Container>
        <LeftFooter>
            <Logo>E Com..</Logo>
            <Descriptaion>If you are still getting the same error, execute the below command and see whether it able to solve the error. The audit fix returns exit code 0 if there are no issues or it successfully fixed all errors.</Descriptaion>
            <SocicalContainer>
                <SocialIcon color="#3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='#1d9bf0'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='#E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='#E60023'> 
                    <PinterestIcon/>
                </SocialIcon>
            </SocicalContainer>
        </LeftFooter>
        <CenterFooter>

        </CenterFooter>
        <RightFooter>

        </RightFooter>
    </Container>
  )
}

export default Footer;