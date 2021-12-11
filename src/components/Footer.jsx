import { Facebook, Instagram, Mail, PhoneIphone, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import picture from './img/logo.png'
import RoomIcon from '@mui/icons-material/Room';


const Container = styled.div`
  background-color: #FAC240;
  bottom: 0;
  left: 0;
  width: auto;
  margin-top: -5px;
  padding: 1rem;
  display: flex;
  @media only screen and (max-width:380px){
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  @media only screen and (max-width:768px){
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media only screen and (max-width:380px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
    margin-bottom: 20px;
  }
  @media only screen and (max-width:768px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  width: 50%;
  height: 60%;
  margin: 20px 0px;
  @media only screen and (max-width:380px){
    width: 70%;
    height: 60%;
    margin: 20px 0px;
  }
  @media only screen and (max-width:768px){
    width: 50%;
    height: 60%;
    margin: 20px 0px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  @media only screen and (max-width:380px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: row;
  }
  @media only screen and (max-width:768px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: row;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width:380px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
    margin-top: 10px;
  }
  @media only screen and (max-width:768px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
    margin-top: 10px;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #385524;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width:380px){
    padding: 2px 0px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (max-width:768px){
    padding: 2px 0px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #385524;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width:380px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
  }
  @media only screen and (max-width:768px){
    padding: 2px 0px;
    flex: 1;
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-center: center;
  color: #385524;
  @media only screen and (max-width:380px){    
    flex: 1;
  }
  @media only screen and (max-width:768px){    
    flex: 1;
  }
`

const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo src={picture}/>
          <SocialContainer>
            <SocialIcon color = "#3B5999">
              <Facebook/>
            </SocialIcon>
            <SocialIcon color = "#E4405F">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color = "#55ACEE">
              <Twitter/>
            </SocialIcon>            
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Privacy</ListItem>
            <ListItem>Store Policy</ListItem>
            <ListItem>Jade Care</ListItem>
            <ListItem>About Us</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
              <RoomIcon style={{marginRight:"10px"}}/> 23 nguyen huu tho, V-2902, Tan Hung Ward, District 7, Ho chi minh city, Vietnam 70000
          </ContactItem>
          <ContactItem>
              <PhoneIphone style={{marginRight:"10px"}}/> +84 776964136
          </ContactItem>
          <ContactItem>
              <Mail style={{marginRight:"10px"}}/> buinguyenanh1973@yahoo.com
          </ContactItem>
        </Right>
    </Container>
  );
}

export default Footer;
