import React from 'react'
import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  background: #F9A12EFF;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start; 
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
`;


const NavMenu = styled.div`
  display: flex;
  align-items: left;
  margin-right: auto;
  margin-left: -150px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuR = styled.div`
  display: flex;
  align-items: left;
  margin-right: -100px;
  margin-left: auto;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Categories = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLink to='/' activeStyle>
              Necklace
            </NavLink>
            <NavLink to='/' activeStyle>
                Bangle
            </NavLink>
            <NavLink to='/' activeStyle>
                Ring
            </NavLink>
            <NavLink to='/' activeStyle>
                Brooch
            </NavLink>
            <NavLink to='/' activeStyle>
                Earrings
            </NavLink>
            <NavLink to='/' activeStyle>
                Pearl
            </NavLink>
            <NavLink to='/' activeStyle>
                Other
            </NavLink>

          </NavMenu>
            <NavMenuR>
                <NavLink to='/' activeStyle>
                    Jade Care
                </NavLink>
                <NavLink to='/' activeStyle>
                    About Us
                </NavLink>
            </NavMenuR>

        </Nav>
      </>
    )
}

export default Categories
