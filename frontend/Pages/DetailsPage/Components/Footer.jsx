import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import Logo from "../../../Images/logo1.png"
import { DeviceType } from '../../../responsive';

const Container = styled.div`
height: 100%;
width: 100%;
display:block;
@media ${DeviceType.mobileSmall} 
{
    font-size: 10px;
}
`;

 
const LogoContainer = styled.div`
height  : 100% ;
width:100%;
border-bottom: solid 1px black;
display: flex;
justify-content: center;
align-items: center;
@media ${DeviceType.tablet} 
{
    height  : 60% ;
    aspect-ratio: 16/9;
}
`;



const ContactContainer = styled.div`
height : 100%;
display: block;
width: 100%;
font-weight: 800;
`;

const TextContainer = styled.div`
height : 33%;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
text-align: left;
`;
const Footer = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LogoContainer>
         <ContactContainer>
            <TextContainer>Phone/Whatsapp : +254757 012 296</TextContainer>
            <TextContainer>Location: Karen, Nairobi, Kenya. </TextContainer>
            <TextContainer>Directions : 5 minutes from The Hub Mall, along Dagoretti Road </TextContainer>
            <TextContainer>© 2024 Karen Hilltop Gardens Ltd.</TextContainer>

         </ContactContainer>
        </LogoContainer>
    </Container>
)
}



export default Footer