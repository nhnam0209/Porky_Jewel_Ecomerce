import React from 'react'
import styled from 'styled-components';
import picture from './luckycat.jpg';
import SmoothList from 'react-smooth-list';
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

    @media only screen and (max-width:768px){
        display: flex;
        width: 100%;
        height: 100vh;
    }

`;

const Wrapper = styled.div`
    height: 100%;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;

`;

const Title = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Hurricane', cursive;
    text-shadow: 1px 1px 2px pink;
  
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    text-align: left;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
    text-shadow: 1px 1px 2px purple;
    display:1;

`;


const AboutUsContent = () => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <Container>
            <Wrapper>
                <Slide>
                <InfoContainer>
                    <SmoothList>    
                        <Title> ABOUT US</Title>
                        <Desc>We buy and sell natural untreated jadeite for the last 30 years. We buy from estate and antique shops from around the world. We work closely with jewelers to design jadeite pieces. Our store provide fine quality pieces at an affordable price.</Desc>
                    </SmoothList>
                </InfoContainer>
                </Slide>
            </Wrapper>
        </Container>
        </ScrollAnimation>
    )
}

export default AboutUsContent
