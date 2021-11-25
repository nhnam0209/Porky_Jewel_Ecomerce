import React from 'react'
import styled from 'styled-components';
import picture from './bamboo.jpg';
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
    text-shadow: 1px 1px 2px purple;
  
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
const JadeCareContent = () => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <Container>
            <Wrapper>
                <Slide>
                <InfoContainer>
                    <SmoothList>    
                        <Title> JADE CARE</Title>
                        <Desc>Jade care and cleaning requires soft damp cloth.  NO ultrasonic cleaners. No detergents as it is way too abrasive for jades</Desc>
                    </SmoothList>
                </InfoContainer>
                </Slide>
            </Wrapper>
        </Container>
        </ScrollAnimation>
    )
}

export default JadeCareContent
