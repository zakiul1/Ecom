import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: #fcf5f5;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 70px;
margin-bottom: 20px;
`
const Description=styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

`
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input=styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button=styled.button`
    flex: 1;
    border: none;
    color: #fff;
    background-color: teal;
    cursor: pointer;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Gets timely updates from your favorite products.</Description>
        <InputContainer>
        <Input placeholder='Your Email'></Input>
        <Button>
            <SendIcon/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter