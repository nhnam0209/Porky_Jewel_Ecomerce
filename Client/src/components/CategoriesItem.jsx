import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width:380px){
    display: flex;
    flex-direction: column;
}`;

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

function CategoriesItem({item}) {
  return (
      <Container>
        <Link to= {`/products/${item.cat}`} style={linkStyle}>
            {item.title}
        </Link>
      </Container>

  )
}

export default CategoriesItem