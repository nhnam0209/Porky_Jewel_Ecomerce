import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import { Remove } from '@material-ui/icons';
import { useNavigate  } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { removeProduct } from '../redux/cartRedux';



const Container = styled.div`

`;

const Wrapper  = styled.div`
    padding: 20px;
    @media only screen and (max-width:380px){
      padding: 10px;
    }
    @media only screen and (max-width:768px){
      padding: 10px;
    }
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

const TopTexts = styled.div`
  @media only screen and (max-width:380px){
    display: none;
  }
  @media only screen and (max-width:768px){
    padding: none;
  }
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:380px){
    flex-direction: column;
  }
  @media only screen and (max-width:768px){
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (max-width:380px){
    flex-direction: column;
  }
  @media only screen and (max-width:768px){
    justify-content: space-between;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  @media only screen and (max-width:380px){
    width: 120px;
    height: 100px;
  }
  @media only screen and (max-width:768px){
    width: 180px;
    height: 120px;
  }
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width:380px){
    padding: 10px;

  }
  @media only screen and (max-width:768px){
    padding: 10px;

  }
`;
const ProductName = styled.div``;

const ProductId = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:380px){
    padding: 5px;
    margin: 5px;
    justify-content: right;
    display: flex-end;
  }
  @media only screen and (max-width:768px){
    padding: 10px;  
    margin: 10px;
  }
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
  const navigate  = useNavigate();
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();


  const handleRemove = ()=>{
    dispatch(
      removeProduct({...cart})
    )
    // alert("Button Clicked!");
  }

  return (
    <Container>
      <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton onClick={()=>navigate("/")}>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag({cart.quantity})</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type = "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                  {cart.product.map((product)=>(<Product>
                    <ProductDetail>
                      <Image src ={product.img}/>
                      <Details>
                        <ProductName><b>Product:</b> {product.title}</ProductName>
                        <ProductId><b>ID:</b> {product._id}</ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <button onClick={handleRemove}>
                        <Remove /></button>
                      </ProductAmountContainer>
                      <ProductPrice>${product.price*product.quantity}</ProductPrice>
                    </PriceDetail>
                  </Product>))}
                  <Hr/>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                </SummaryItem>
                {/* <SummaryItem>
                  <SummaryItemText>Estimate Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.80</SummaryItemPrice>
                </SummaryItem> */}
                <SummaryItem type = "total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton >CHECKOUT NOW</SummaryButton>
              </Summary>
            </Bottom>
        </Wrapper>                                                    
      <Footer/>
    </Container>
  )
}

export default Cart
