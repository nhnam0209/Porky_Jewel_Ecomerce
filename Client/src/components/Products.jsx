import {useState,React,useEffect} from 'react'
import styled from 'styled-components';
import {popularProducts} from "../data";
import Product from "./Product";
import axios from "axios"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

const Products = ({cat,filter,sort}) => {
    const [products,setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();
    useEffect(() => {
        const getProducts = async () =>{
            try{
                const res = await axios.get("http://localhost:500/api/products"); 
            }catch(err){};
        }
    }, [cat]) 

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/> 
            ))}
        </Container>
    );
};

export default Products;
