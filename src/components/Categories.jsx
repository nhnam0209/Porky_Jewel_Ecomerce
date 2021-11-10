import React from 'react'
import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  background: #FFB200;
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
  color: #fff;
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

const Bars = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
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

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.div`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
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
