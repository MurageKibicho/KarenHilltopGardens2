import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 99%;
margin-left: 1%;
margin-bottom: 1%;
width: 55%;
margin-left: 15%;
display:block;
border-radius: 5px;
@media ${DeviceType.tablet} 
{
    width: 98%;
    margin-left: 1%;
}
`;
const ImageContainer = styled.img`
width:100px;
aspect-ratio: 16/9;
border-radius: 10px;
`;

const LegendText = styled.div`
font-size: 1em;
color: green;
margin-bottom: 2px;
`;
 
const ImagePreview2 = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};


return(
    <Container>
        <Carousel showIndicators={false}>
            {ImageItems.map(function(data)
            {
                return (
                <div>
                    <LegendText>{data.legend}</LegendText>
                    <ImageContainer src={data.image} />
                </div>
                    )
            })}
            
            
        </Carousel>
    </Container>
)
}
const ImageItems = 
[
{legend: "Front view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562434/images/00_zok9rx.webp"},
{legend: "Entrance view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562432/images/04_rd4gjb.webp"},
{legend: "Lawn view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562434/images/12_vpx58p.webp"},
{legend: "Estate view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562435/images/14_poc2l0.webp"},
{legend: "Estate Entrance view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562435/images/10_pqniur.webp"},
{legend: "Side view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562434/images/06_xf4jrg.webp"},
{legend: "Estate view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562434/images/08_e8mrck.webp"},
{legend: "Top view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562438/images/03_hds72l.webp"},
{legend: "Top view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562437/images/20_fdhnpd.webp"},
{legend: "Back Door view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562439/images/17_ikqesc.webp"},
{legend: "Shared view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562438/images/13_p9briq.webp"},
{legend: "Estate view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562435/images/01_mi15ci.webp"},
{legend: "Bathroom view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562433/images/27_dst2ef.webp"},
{legend: "Shower view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562437/images/23_xwqxne.webp"},
{legend: "Estate view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562435/images/16_lkyl4c.webp"},
{legend: "Forest view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562439/images/21_vpy5xb.webp"},
{legend: "Forest view", image:"https://res.cloudinary.com/dcrelr5e7/image/upload/v1705562438/images/15_srajze.webp"}






];



export default ImagePreview2