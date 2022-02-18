import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import picture from './img/Newsletter.jpg';
import ScrollAnimation from 'react-animate-on-scroll';



const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    background: url(${picture});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    margin: auto;

    @media only screen and (max-width:380px){
        display: flex;
        width: 100%;
        height: 100vh;
    }
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;  
    @media only screen and (max-width:380px){
        font-size: 50px;
    }  
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    @media only screen and (max-width:380px){
        font-size: 20px;
        align-items: center;
        text-align: center;
        text-shadow: 0px 2px pink;
    } 
`;
const InputContainer = styled.div`
    width: 25%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;   
     @media only screen and (max-width:380px){
        display: flex;
        justify-content: center;

    }
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;

`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #F9A12EFF;
    color: white;

`;


const Newsletter = () => {
    return (
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                <Container>
                    <Title>Newsletter</Title>
                    <Description>Get timely updates from your favorite products</Description>
                    <InputContainer>
                        <Input placeholder ="Your email"/>
                        <Button>
                            <SendIcon/>
                        </Button>
                    </InputContainer>
                </Container>
            </ScrollAnimation>

    )
    
}

export default Newsletter