import React,{useRef}  from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import Price from './Price';
import ChoiceChips from './ChoiceChips';
import Overview from './Overview';
import Facts from './Facts';
import Maps from './Maps';
import Footer from './Footer';
import { DeviceType } from '../../../responsive';
import ImagePreview2 from './ImagePreview2';


const Container = styled.div`
height: 300%;
width: 100%;
display:block;
`;

const PreviewContainer = styled.div`
height: 23%;
width: 100%;
display:block;
background-color: white;
@media ${DeviceType.tablet} 
{
    height: 15%;
}
`;

const OuterDiv = styled.div`
height : 100%;
width  : 100%;
display:flex;
`;
const EmptyDiv0 = styled.div`
height : 100%;
width  : 5%;
display:block;
`;
const LeftDiv = styled.div`
height : 100%;
width  : 90%;
display:block;

`;

const PriceContainer = styled.div`
height:7%;
width: 100%;
display:block;

`;

const ChoiceChipContainer = styled.div`
height:8%;
width: 100%;
display:block;
@media ${DeviceType.tablet} 
{
    height:5%;
}
`;

const OverviewContainer = styled.div`
height:25%;
width: 100%;
display:block;
background-color: white;
@media ${DeviceType.mobileLarge} 
{
    height:30%;
}

`;

const FactsAndFeaturesContainer = styled.div`
height:45%;
width: 100%;
display:block;
@media ${DeviceType.mobileMedium} 
{
    height:50%;
}

`;
const MapsContainer = styled.div`
height:20%;
width: 100%;
display:block;
`;

const FooterContainer = styled.div`
height:8%;
width: 100%;
display:block;

`;

 
const Content = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const footerRef = useRef(null);
return(
    <Container>
        <PreviewContainer>
            <ImagePreview2/>
        </PreviewContainer>

        <OuterDiv>
            <EmptyDiv0/>
            <LeftDiv>            
                <PriceContainer>
                    <Price footerRef = {footerRef}/>
                </PriceContainer>

                <ChoiceChipContainer>
                    <ChoiceChips/>
                </ChoiceChipContainer>

                <OverviewContainer>
                    <Overview/>
                </OverviewContainer>

                <FactsAndFeaturesContainer>
                    <Facts/>
                </FactsAndFeaturesContainer>

                <MapsContainer>
                    <Maps/>
                </MapsContainer>

                <FooterContainer ref={footerRef}>
                    <Footer/>
                </FooterContainer>
            </LeftDiv>
            
            <EmptyDiv0/>
        </OuterDiv>
    </Container>
)
}



export default Content