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
            <TextContainer>email : fmkandogo@gmail.com</TextContainer>
            <TextContainer>Phone/Whatsapp : +254721205937</TextContainer>
            <TextContainer>© 2023 Karen Hilltop Gardens Ltd.</TextContainer>

         </ContactContainer>
        </LogoContainer>
    </Container>
)
}



export default Footer