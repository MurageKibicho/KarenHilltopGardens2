import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBuilding, faChartArea, faDungeon, faHammer, faRoad, faSchool, faTree } from '@fortawesome/free-solid-svg-icons';
import { DeviceType } from '../../../responsive';

const Container = styled.div`
height: 100%;
width: 100%;
display:block;
`;

const TopContainer = styled.div`
height: 49%;
width: 100%;
display:flex;
background-color: white;
`;

const BottomContainer = styled.div`
height: 48%;
width: 100%;
display:flex;
margin-top: 0.5%;
background-color: white;
`;

const EmptyDiv0 = styled.div`
height: 100%;
width: 0.5%;
`;
const SingleChipContainer = styled.div`
height: 100%;
width: 33%;
border-radius: 3px;
display:block;
background-color: #f6f6fa;
display: flex;
align-items: center;
justify-content: left;
text-align: left;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #2a2a33;
margin-left: 2%;
font-size: 1.5rem;
@media ${DeviceType.tablet} 
{
    font-size: 1.1rem;
    margin-right: 5px;
}
`;

const ChipText = styled.p`
margin-left: 3%;
font-weight: 300;
@media ${DeviceType.tablet} 
{
    font-size: 0.8em;
}
`;
 
const ChoiceChips = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <TopContainer>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faBuilding}/>
                <ChipText>Single family residence</ChipText>
            </SingleChipContainer>
            <EmptyDiv0/>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faHammer}/>
                <ChipText>Built in 2023</ChipText>
            </SingleChipContainer>
            <EmptyDiv0/>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faBagShopping}/>
                <ChipText>Close to mall</ChipText>
            </SingleChipContainer>
        </TopContainer>
        <BottomContainer>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faSchool}/>
                <ChipText>3 Universities nearby</ChipText>
            </SingleChipContainer>
            <EmptyDiv0/>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faTree}/>
                <ChipText>Forest area</ChipText>
            </SingleChipContainer>
            <EmptyDiv0/>
            <SingleChipContainer>
                <StyledFontAwesomeIcon icon={faDungeon}/>
                <ChipText>Gated community</ChipText>
            </SingleChipContainer>
        </BottomContainer>
    </Container>
)
}



export default ChoiceChips