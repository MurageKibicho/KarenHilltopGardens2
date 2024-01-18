import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga4';
import Navbar from './Components/Navbar';
import Content from './Components/Content';



const Container = styled.div`
height: 100vh;
width: 100vw;
display:block;
`;
 
const NavbarContainer = styled.div`
height: 12%;
width: 100%;
`;

const ContentContainer = styled.div`
height: 88%;
width: 100%;
display:block;
overflow:display;
`;
 
 
const Details = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    ReactGA.send({ hitType: "pageview", page: location.pathname , title: "Home Page Visit" });

return(
    <Container>
        <NavbarContainer>
            <Navbar/>
        </NavbarContainer>
        <ContentContainer>
            <Content/>
        </ContentContainer>
    </Container>
)
}



export default Details