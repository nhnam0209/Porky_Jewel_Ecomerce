import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14;
    font-weight: 500;

`

const Annoucement = () => {
    return (
        <Container>
            Testing
        </Container>
    )
}

export default Annoucement
