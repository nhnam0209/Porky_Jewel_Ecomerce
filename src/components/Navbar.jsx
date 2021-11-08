import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left  = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold
`

const Center = styled.div`
    flex:1;
`
const Right = styled.div`
    flex:1;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>b</Center>
                <Right>c</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
