import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import img1 from '../img/Product1.jpeg'


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    padding: 20px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
      background-color: #f8f4f4;   
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar/>
                <Wrapper>
                    <ImgContainer>
                        <Image src={img1}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>ABC</Title>
                        <Desc>This is the product</Desc>
                        <Price>$ 20</Price>
                        <AddContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
