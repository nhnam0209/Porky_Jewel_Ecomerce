import SmoothList from 'react-smooth-list';
import React from 'react'
import styled from 'styled-components';
import picture from './img/bgpicture.png';



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-color: #FC766AFF;
    position: relative;
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
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 70%;
    width: 100%; 
    margin-top: 30%;  
    margin: auto;
 
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 40px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;

`;

const Slider = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                <ImgContainer>
                    <Image src= {picture}/>
                </ImgContainer>
                <InfoContainer>
                    <SmoothList>    
                        <Title>WELCOME TO JADE EMPORIUM</Title>
                        <Desc>Where a jewelry is standard of the beauty</Desc>
                        <Button>SHOP NOW</Button>
                    </SmoothList>
                </InfoContainer>
                </Slide>
            </Wrapper>

        </Container>
    )
}

export default Slider
