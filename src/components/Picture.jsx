import React from 'react'
import picture from './img/bgpicture.png'
import styled from 'styled-components';

const Backgroundpicture = styled.img`
    width: 100%;
    height: 700px;
    overflow: visible;'
`

const Picture = () => {
    return (
        <Backgroundpicture src={picture}/>
    )
}

export default Picture
