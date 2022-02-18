import { Badge } from "@material-ui/core";
import ShoppingCart  from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import Logo from './img/logonobg.png'
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 270px;
    background: #FAC240;
    @media only screen and (max-width:380px){
        display: flex;
        flex-direction: column;
        height: 300px;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media only screen and (max-width:380px){
        flex: 1;
        flex-direction: column;
    }

    @media only screen and (max-width:768px){
        flex: 1;
        flex-direction: column;
    }
`

const Left = styled.div`
    flex:1;
    align-items: center;
`
const Homepagebutton = styled.img`
    width: 400px;
    height: 200px;
    margin: 5px;    
    @media only screen and (max-width:380px){
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 150px;
        width: 250px;
    }
    @media only screen and (max-width:768px){
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 150px;
        width: 250px;
    }
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input = styled.input`
    border: none;
    margin: 10px;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    @media only screen and (max-width:380px){
        flex: 1;
        flex-direction: column;
    }
`

const Center = styled.div`
    flex:1;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width:380px){
        flex: 1;
    }
    @media only screen and (max-width:768px){
        flex: 1;
    }
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to = "/">
                        <Homepagebutton src={Logo}/>
                    </Link>
                </Left>
                <Center>
                </Center>
                <Right>
                    <SearchContainer>
                        <Input placeholder = "Search"/>
                        <SearchIcon style={{color:"white", fontsize:16, cursor: "pointer"}}/>
                    </SearchContainer>
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart style = {{color:"white"}}/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
