import React from 'react'
import styled from 'styled-components';
import picture from '../img/404_bg.jpg'

function NotFoundPage() {

    window.setTimeout(function() {
        window.location.href = ("/");
    }, 5000);

    const Page =styled.div`
        background: url(${picture});
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 1920px 1080px;
        margin: auto;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        @media only screen and (max-width:380px){
            display: flex;
            width: 100%;
            height: 100vh;
        }
    `;

    const Container = styled.div`
        padding: 50px;
        align-items: center;
        justify-content: center;
        text-align: center;
        @media only screen and (max-width:380px){
            display: flex;
            height: auto;
            width: 100%;
        }
    `

    const Title = styled.h1`
    font-size: 80px;
    color:white;
    text-shadow: 1px 1px 2px pink;
    @media only screen and (max-width:380px){
        font-size: 50px;
    }
    `;
    const Title1 = styled.h1`
    font-size: 80px;
    color:white;
    font-family: 'Hurricane', cursive;
    text-shadow: 1px 1px 2px pink;

    @media only screen and (max-width:380px){
        font-size: 50px;
    }
    `;

    const Desc = styled.h2`
        margin: 50px 0px;
        font-size: 20px;
        color:white;
        font-weight: 500;
        text-shadow: 1px 1px 2px pink;
        letter-spacing: 2px;
    `;

  return (
    <div>
        
        <Page>
            <Container>
                <Title>404</Title>
                <Title1>The Page you looking for is not found</Title1>
                <Desc>You will be redirect in 5 seconds</Desc>
            </Container>
        </Page>
        
    </div>

  )
}

export default NotFoundPage