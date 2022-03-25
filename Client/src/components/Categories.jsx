import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {categories} from "../data";
// import { FaBars } from 'react-icons/fa';
import CategoriesItem from './CategoriesItem';


const Nav = styled.nav`
  background: #F9A12EFF;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media only screen and (max-width:380px){
      display: flex;
      flex-direction: column;
  }
`;

const NavLink = styled.div` 
  color: #385524;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Recursive', sans-serif;
  display: flex;
  align-items: center;
  margin: 10px;    
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  @media only screen and (max-width: 380px) {
    display: none;
  }  
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 10;
  right: 0;
  position: center;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

const NavMenu = styled.div`
  display: flex;
  align-items: left;
  margin-right: auto;
  margin-left: -150px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 380px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavMenuR = styled.div`
  display: flex;
  align-items: left;
  margin-right: -100px;
  margin-left: auto;
  overflow: hidden;

  @media screen and (max-width: 380px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const linkStyle = {
  color: "#385524",
  fontSize: "18px",
  fontWeight: "bold",
  fontFamily: "Recursive, sans-serif",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
};

const Categories = () => {
    return (
        <>
        <Nav>
          <Bars />
            <NavMenu>
              <NavLink to='/' activeStyle>
              {categories.map((item) => (
                   <CategoriesItem item={item} key={item.id} />
                       ))}
              </NavLink>
              <NavMenuR>
                  <NavLink>
                    <Link to="/jadecare" style={linkStyle}> Jade Care</Link>
                  </NavLink>
                  <NavLink> 
                    <Link to="/aboutus" style={linkStyle}> About Us</Link>
                  </NavLink>
              </NavMenuR>
            </NavMenu>
        </Nav>
      </>
    )
}

export default Categories
