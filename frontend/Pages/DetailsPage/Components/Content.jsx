import React, { lazy, Suspense,useRef } from 'react';
import Skeleton from "react-loading-skeleton";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
const ChoiceChips = lazy(() => import('./ChoiceChips'));
const Price = lazy(() => import('./Price'));
const Overview  = lazy(() => import('./Overview'));
const Facts  = lazy(() => import('./Facts'));
const Footer  = lazy(() => import('./Footer'));
const Maps  = lazy(() => import('./Maps'));
const ImagePreview2  = lazy(() => import('./ImagePreview2'));
import { DeviceType } from '../../../responsive';


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
            <Suspense fallback={<Skeleton count={10} />}> <ImagePreview2/> </Suspense>
        </PreviewContainer>

        <OuterDiv>
            <EmptyDiv0/>
            <LeftDiv>            
                <PriceContainer>
                    <Suspense fallback={<Skeleton count={10} />}> <Price footerRef = {footerRef}/> </Suspense>    
                </PriceContainer>

                <ChoiceChipContainer>
                    <Suspense fallback={<Skeleton count={10} />}> <ChoiceChips/> </Suspense>    
                </ChoiceChipContainer>

                <OverviewContainer>
                    <Suspense fallback={<Skeleton count={10} />}> <Overview/> </Suspense>                        
                </OverviewContainer>

                <FactsAndFeaturesContainer>
                    <Suspense fallback={<Skeleton count={10} />}> <Facts/> </Suspense>                        
                </FactsAndFeaturesContainer>

                <MapsContainer>
                    <Suspense fallback={<Skeleton count={10} />}> <Maps/> </Suspense>                        
                </MapsContainer>

                <FooterContainer ref={footerRef}>
                    <Suspense fallback={<Skeleton count={10} />}> <Footer/> </Suspense>                        
                </FooterContainer>
            </LeftDiv>
            
            <EmptyDiv0/>
        </OuterDiv>
    </Container>
)
}



export default Content