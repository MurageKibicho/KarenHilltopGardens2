import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';



const Container = styled.div`
height: 100%;
width: 100%;
display:block;
`;
 
const Sidebar = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>Sidebar Pivot</Container>
)
}



export default Sidebar