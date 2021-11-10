import React from 'react'
import picture from './img/bgpicture.png'
import styled from 'styled-components';

const Backgroundpicture = styled.img`
    width: 1519px;
    height: 800px;
    position: absolute;
`

const Picture = () => {
    return (
        <Backgroundpicture src={picture}/>
    )
}

export default Picture
