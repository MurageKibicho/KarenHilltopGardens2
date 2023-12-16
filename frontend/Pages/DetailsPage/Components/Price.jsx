import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { DeviceType } from '../../../responsive';


const Container = styled.div`
margin-top: 0.5%;
height: 100%;
width: 100%;
display:block;
font-family: 'Open Sans', sans-serif;
font-size: 1.4em;
@media ${DeviceType.tablet} 
{
    font-size: 1.1em;
    margin-top: 1%;
}
position: relative;
`;


const Text0 = styled.div`
height  : 20%;
width: 100%;
background-color: white;
display: flex;
align-items: center;
text-align: left;
`;

const ContactButton = styled.div`
position: absolute;
top: 0;
right: 0;
height: 15%;
width: 20%;
display:flex;
border: 2px solid black;
border-radius: 5px;
background-color: white;
color: green;
padding: 14px 28px;
font-size: 0.8em;
cursor: pointer;
align-items: center;
text-align: center;
justify-content: center;
transition: all 0.3s ease-in-out;
&:hover
{
    background-color: green;
    color: white;
}
`;

const YoutubeButton = styled.div`
position: absolute;
top: 40%;
right: 0;
height: 15%;
width: 20%;
display:flex;
border: 2px solid black;
border-radius: 5px;
background-color: white;
color: green;
padding: 14px 28px;
font-size: 0.8em;
cursor: pointer;
align-items: center;
text-align: center;
justify-content: center;
transition: all 0.3s ease-in-out;
&:hover
{
    background-color: green;
    color: white;
}
`;


 
const Price = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const aerialViewURL = "https://www.youtube.com/watch?v=O_Qrn4KOkO4";
    const Scroll0 = () => {
        props.footerRef.current?.scrollIntoView({behavior: 'smooth'});
      };
      const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
return(
    <Container>
        <Text0> <span style = {{color:"blue"}}> Ksh 45 000 000 </span> </Text0 >
        <Text0>4 Bedroom House</Text0>
        <Text0>5 baths </Text0 >
        <Text0>0.11 Acres </Text0 >
        <Text0>Dagoretti Road, Karen</Text0 >
        <ContactButton onClick={Scroll0}>Contact Us</ContactButton>
        <YoutubeButton onClick={() =>OpenLink(aerialViewURL)}>YouTube Tour</YoutubeButton>
    </Container>
)
}



export default Price
