import SmoothList from 'react-smooth-list';
import React from 'react'
import styled from 'styled-components';
import picture from './img/bgpicture.png';
import ScrollAnimation from 'react-animate-on-scroll';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-color: #FC766AFF;
    position: relative;
    background: url(${picture});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1920px 1080px;
    margin: auto;

    @media only screen and (max-width:380px){
        display: flex;
        width: 100%;
        height: 100vh;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    @media only screen and (max-width:380px){
        display: flex;
        height: auto;
        width: 100%;
    }
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    @media only screen and (max-width:380px){
        display: flex;
        height: auto;
        width: 100%;
    }
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width:380px){
        display: flex;
        height: auto;
        width: 100%;
    }

`;

const Title = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Hurricane', cursive;
    text-shadow: 1px 1px 2px pink;
    @media only screen and (max-width:380px){
        font-size: 50px;
    }
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;


`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #FC766AFF;
    color: white;
    cursor: pointer;
    border-radius: 12px;
    padding: 20px;
    border: none;
`;

const Slider = () => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <Container>
            <Wrapper>
                <Slide>
                <InfoContainer>
                    <SmoothList>    
                        <Title> JADE EMPORIUM</Title>
                        <Desc>Where a jewelry is standard of the beauty</Desc>
                        <Button>SHOP NOW</Button>
                    </SmoothList>
                </InfoContainer>
                </Slide>
            </Wrapper>
        </Container>
        </ScrollAnimation>

    )
}

export default Slider
