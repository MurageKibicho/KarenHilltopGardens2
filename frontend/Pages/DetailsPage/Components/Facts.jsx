import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { DeviceType } from '../../../responsive';


const Container = styled.div`
height: 100%;
width: 100%;
display:block;
`;

const OverviewContainer = styled.div`
height : 10%;
width: 100%;
@media ${DeviceType.tablet} 
{
    height : fit-content;
    margin-bottom: 10px;
}
`;

const OverviewText = styled.h1`
font-size: 1.5em;
font-weight: 800;
`;

const SectionTitleContainer = styled.div`
background-color: #f6f6fa;
height: 8%;
width: 100%;
display: flex;
align-items: center;
@media ${DeviceType.tablet} 
{
    height : 4%;
}
`;

const SectionText = styled.h1`
font-size: 1.4em;
font-weight: 500;
margin-left: 5px;
`;

const ExtraDetailsSection = styled.div`
height  : 50%;
width: 100%;
display: flex;
@media ${DeviceType.tablet} 
{
    height  : 45%;

}
`;

const LeftDetailsSection = styled.div`
height  :100%;
width:50%;
`;

const RightDetailsSection = styled.div`
height  :100%;
width:50%;
`;

const DetailTitle = styled.p`
font-weight : 800;
@media ${DeviceType.tablet} 
{
    font-size: 0.8em;
    margin-top: 5px;
    margin-bottom: 5px;
}
`;

const PropertyDetailsSection = styled.div`
display: flex;
width: 100%;
`;

const PropertyDetailsLeft = styled.div`
height: 100%;
width: 50%;
`;

const PropertyDetailsRight = styled.div`
height: 100%;
width: 50%;
`;
const DetailLine = styled.li`
@media ${DeviceType.tablet} 
{
    font-size: 0.8em;
}
`;
const Facts = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <OverviewContainer>
            <OverviewText>Facts & features</OverviewText>
        </OverviewContainer>
        <SectionTitleContainer>
            <SectionText>Interior</SectionText>
        </SectionTitleContainer>
        <ExtraDetailsSection>
            <LeftDetailsSection>
                <DetailTitle>Bedrooms & bathrooms</DetailTitle>
                <ul>
                    <DetailLine>Bedrooms: 4</DetailLine>
                    <DetailLine>Bathrooms: 5</DetailLine>
                    <DetailLine>Full bathrooms: 4</DetailLine>
                    <DetailLine>Half bathrooms: 1</DetailLine>
                    <DetailLine>Main level bathrooms: 4</DetailLine>
                </ul>
                <DetailTitle>Flooring</DetailTitle>
                <ul>
                    <DetailLine>Wood parquet</DetailLine>
                    <DetailLine>Ceramic tiles</DetailLine>
                    <DetailLine>Terrazzo screed</DetailLine>
                </ul>
                <DetailTitle>Heating</DetailTitle>
                <ul>
                    <DetailLine>Solar heating</DetailLine>
                    <DetailLine>Forced air</DetailLine>
                    <DetailLine>Free atmospheric air</DetailLine>
                </ul>
                <DetailTitle>Cooling</DetailTitle>
                <ul>
                    <DetailLine>Forced air</DetailLine>
                    <DetailLine>Free atmospheric air</DetailLine>
                </ul>
            </LeftDetailsSection>
                
            <RightDetailsSection>
                <DetailTitle>Green energy</DetailTitle>
                <ul>
                    <DetailLine>Solar water heating</DetailLine>
                </ul>
                <DetailTitle>Interior features</DetailTitle>
                <ul>
                <DetailLine>Breakfast area, Family Room off Kitchen</DetailLine>
                <DetailLine>Upstairs family room/study</DetailLine>
                <DetailLine>Separate dining room, </DetailLine>
                <DetailLine>Granite countertops</DetailLine>
                <DetailLine>Ceiling finished with gypsum mouldings</DetailLine>
                </ul>
                <DetailTitle>Livable area</DetailTitle>
                <ul>
                    <DetailLine>2305 sqft</DetailLine>
                </ul>
            </RightDetailsSection>
        </ExtraDetailsSection>
            <SectionTitleContainer>
                <SectionText>Property Details</SectionText>
            </SectionTitleContainer>
            <PropertyDetailsSection>
                <PropertyDetailsLeft>
                    <DetailTitle>Home type</DetailTitle>
                    <ul>
                        <DetailLine>Double storey residential house</DetailLine>
                    </ul>
                    <DetailTitle>Parking spaces</DetailTitle>
                    <ul>
                        <DetailLine>2 - 4 cars</DetailLine>
                    </ul>
                    <DetailTitle>New construction</DetailTitle>
                    <ul>
                        <DetailLine>Yes</DetailLine>
                    </ul>
                </PropertyDetailsLeft>

                <PropertyDetailsRight>
                    <DetailTitle>Material information</DetailTitle>
                        <ul>
                            <DetailLine>Reinforced concrete columns</DetailLine>
                            <DetailLine>Beams framework infilled with dressed quarry stone walls</DetailLine>
                            <DetailLine>Beams framework infilled with dressed quarry stone walls</DetailLine>
                            <DetailLine>Rendered and colour-washed externally</DetailLine>
                            <DetailLine>Plastered and painted internally</DetailLine>
                            <DetailLine>Plastered and painted internally</DetailLine>
                            <DetailLine>Pitched roof fitted with timber trusses</DetailLine>
                            <DetailLine>Roofing clay tiles</DetailLine>
                        </ul>
                </PropertyDetailsRight>

            </PropertyDetailsSection>

            
    </Container>
)
}



export default Facts