import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Product from '../components/Product';
import {CategoriesItem} from '../data'

const Container = styled.div``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;


const Title = styled.h1`
    margin: 20px;
`;




const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Categories/>
            <Title>Ring</Title>
            <FilterContainer>
                <Filter>filter1</Filter>
                <Filter>filter2</Filter>
            </FilterContainer>
            <Product/>
            <Footer/>
        </Container>
    )
}

export default ProductList
