import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Product from '../components/Product';
import {categoriesItem} from '../data'
import Products from './../components/Products';
import Newsletter from '../components/Newsletter';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    @media only screen and (max-width:380px){
        width: 0px 20px;
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.h1`
    margin: 20px;
`;

const FliterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    @media only screen and (max-width:380px){
        margin-right: 0px;
    }
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    @media only screen and (max-width:380px){
        margin: 10px 0px;
    }
`;

const Option = styled.option`

`;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) =>{
        const value =e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value,
        })
    };
    console.log(filter)
    return (
        <Container>
            <Navbar/>
            <Categories/>
            <Title>Ring</Title>
            <FilterContainer>
                <Filter>
                    <FliterText>Filter Products:</FliterText>
                    <Select name='product' onChange={handleFilter}>
                        <Option disabled >Product</Option>
                        <Option>Necklace</Option>
                        <Option>Bangle</Option>
                        <Option>Ring</Option>
                        <Option>Brooch</Option>
                        <Option>Earings</Option>
                        <Option>Pearl</Option>
                        <Option>Other</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FliterText>Sort Products:</FliterText>
                    <Select onChange = {(e) =>setSort(e.target.value)}>
                        <Option value="newest" >Newest</Option>
                        <Option value = "asc">Price (high to low)</Option>
                        <Option calue = "desc">Price (low to high)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat ={cat} filter={filter} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
