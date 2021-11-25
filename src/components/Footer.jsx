import { Facebook, Instagram, Mail, PhoneIphone, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import picture from './img/logo.png'
import RoomIcon from '@mui/icons-material/Room';


const Container = styled.div`
  background-color: mediumpurple;
  bottom: 0;
  left: 0;
  width: auto;
  margin-top: -5px;
  padding: 1rem;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  width: 40%;
  height: 60%;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
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
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-center: center;
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
            <ListItem>Payment Policy</ListItem>
            <ListItem>Jade Care</ListItem>
            <ListItem>About Us</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
              <RoomIcon style={{marginRight:"10px"}}/>Address
          </ContactItem>
          <ContactItem>
              <PhoneIphone style={{marginRight:"10px"}}/>Phone
          </ContactItem>
          <ContactItem>
              <Mail style={{marginRight:"10px"}}/> Email
          </ContactItem>
        </Right>
    </Container>
  );
}

export default Footer;
