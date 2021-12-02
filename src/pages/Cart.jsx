import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import img1 from '../img/Product1.jpeg'
import { Remove } from '@material-ui/icons';


const Container = styled.div``;

const Wrapper  = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center; 
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;

const ProductId = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
  padding: 10px;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props =>props.type === "total" && "500"};
  font-size: ${props =>props.type === "total" && "24px"}
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: black;
  font-weight: 600;
`;



const Cart = () => {
  return (
    <Container>
      <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type = "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                  <Product>
                    <ProductDetail>
                      <Image src ={img1}/>
                      <Details>
                        <ProductName><b>Product:</b> ABC</ProductName>
                        <ProductId><b>ID:</b> ABC</ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$20</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr/>
                  <Product>
                    <ProductDetail>
                      <Image src ={img1}/>
                      <Details>
                        <ProductName><b>Product:</b> ABC</ProductName>
                        <ProductId><b>ID:</b> ABC</ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$20</ProductPrice>
                    </PriceDetail>
                  </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimate Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Summary>
            </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
