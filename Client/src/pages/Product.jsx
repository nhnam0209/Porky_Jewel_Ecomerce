import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation, useNavigate  } from 'react-router-dom';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from "react-redux";


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    @media only screen and (max-width:380px){
        padding: 10px;
        flex-direction: column;
    }
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
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
    margin-top: 10px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    &:hover{
      background-color: #f8f4f4;   
    }
    @media only screen and (max-width:380px){
        width: 0px 20px;
        display: flex;
        flex-direction: column;
    }
`;
const Button2 = styled.button`
    padding: 15px;
    margin-right: 10px;
    border: 2px solid red;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    &:hover{
      background-color: #f8f4f4;   
    }
    @media only screen and (max-width:380px){
        width: 0px 20px;
        display: flex;
        flex-direction: column;
    }
`;

const Product = () => {
    const navigate  = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    useEffect(()=>{
        const getProduct= async() =>{
            try{
                const res = await publicRequest.get("/product/find/"+id);
                setProduct(res.data);
            }catch{

            }
        }; 
        getProduct();
    },[id]);


    const handleClick =()=>{
        //update cart
        dispatch(
            addProduct({ ...product,quantity})
        );
    }

    return (
        <Container>
            <Navbar/>
            <Categories/>
                <Wrapper>
                    <ImgContainer>
                        <Image src={product.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>{product.desc}</Desc>
                        <Price>{product.price}</Price>
                        <AddContainer>
                            <Button2 onClick={()=>navigate(-1)}>CONTINUTE SHOPPING</Button2>
                            <Button onClick={handleClick}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
