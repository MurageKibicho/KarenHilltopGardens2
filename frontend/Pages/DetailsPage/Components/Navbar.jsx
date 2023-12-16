import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import Logo from "../../../Images/logo1.png"
import { DeviceType } from '../../../responsive';

const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
align-items: center;
justify-content: center;
`;

const Flex0 = styled.div`
height: 100%;
width: 32%;
display: flex;
align-items: center;
justify-content: left;
margin-left: 5%;
background-color: white;
color: Black;
font-weight: 800;
cursor:pointer;
font-size: 1.5em;
transition: all 0.2s ease-in-out;
&:hover
{
    color: green;
    text-decoration: underline;
}

@media ${DeviceType.laptop} 
{
    width: 46%;
    font-size: 1.3em;
}
`;

const LogoContainer = styled.div`
height: 100%;
width: 10%;
background-color: blue;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
background-color: white;
cursor:pointer;
@media ${DeviceType.tablet} 
{
    margin-left: 10%;
    margin-right: 5%;
}
`;

const LogoImage = styled.img`
    height: 100%;
    aspect-ratio: 1/1;
`;

 
const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LogoContainer> 
        <LogoImage src={Logo} className="App-logo" alt="logo" />
        </LogoContainer>
        <Flex0>Karen Hilltop Gardens</Flex0>

    </Container>
)
}



export default Navbar