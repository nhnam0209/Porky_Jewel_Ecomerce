import React from 'react'
import styled from 'styled-components';

const BackgroundFooter = styled.div`
    background-color: mediumpurple;
    bottom: 0;
    left: 0;
    width: auto;
    margin-top: -5px;
    padding: 1rem;
`

const Footer = () => {
  return (
    <BackgroundFooter>
        Testing
    </BackgroundFooter>
  );
}

export default Footer;
