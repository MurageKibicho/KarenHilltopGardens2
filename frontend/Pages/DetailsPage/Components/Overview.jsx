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

const TitleText = styled.h1`
font-size: 1.5em;
font-weight: 500;
@media ${DeviceType.tablet} 
{
    font-size: 1.1em;
}
`;

const BodyText = styled.p`
@media ${DeviceType.tablet} 
{
    font-size: 0.8em;
}
`;

const Chip = styled.div`
height: 99%;
width: ${props => props.width };
display: flex;
margin-right: 1%;
border-radius: 5px;
text-align: center;
justify-content: center;
align-items: center;
font-weight: 900;
background-color: #f1f1f4;
justify-content: center;
align-items: center;
text-align: center;
font-weight:600;
font-size: 0.9em;
@media ${DeviceType.tablet} 
{
    font-size: 0.7em;
}
`;

const TitleContainer = styled.div`
height: 8%;
@media ${DeviceType.tablet} 
{
    height: 5%;
}
`;

const ChipsContainer = styled.div`
height: 10%;
width: 100%;
display: flex;
margin-top:1%;
`;

const BodyTextContainer = styled.div`
margin-top: 2%;
font-size: 1.1em;
`;

const EmptyDiv0 = styled.div`
width:100%;
height:5%;
@media ${DeviceType.tablet} 
{
    height: 1%;
}
`;

const EmptyDiv1 = styled.div`
width:100%;
height:1%;
background-color:grey;
`;

const EmptyDiv2 = styled.div`
width:100%;
height:5%;
@media ${DeviceType.tablet} 
{
    height: 1%;
}
`;
 
const Overview = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <EmptyDiv0/>
        <EmptyDiv1/>
        <EmptyDiv2/>
        <TitleContainer>
            <TitleText>What's special</TitleText>
        </TitleContainer>
        
        <ChipsContainer>
            <Chip width = {"300px"}>WOOD PARQUET FLOORS</Chip>
            <Chip width = {"200px"}>TERRAZZO SCREED</Chip>
            <Chip width = {"200px"}>MODERN KITCHEN</Chip>
            <Chip width = {"200px"}>FULL STONE WALLS</Chip>  
        </ChipsContainer>
        <ChipsContainer>
            <Chip width = {"250px"}>BUILT-IN WARDROBES</Chip>
            <Chip width = {"300px"}>SHOPPING MALLS NEARBY</Chip>
            <Chip width = {"300px"}>DETACHED SERVANTS QUARTERS</Chip>
        </ChipsContainer>

        <BodyTextContainer>
            <BodyText>
                Step into these newly crafted modern homes in Karinde, Dagoretti-Mutuini, just 4km from Karen.<br/><br/> Nestled in a tranquil, upscale neighborhood, 300m from the main road and 1.5km from the Southern bypass, offering swift access to Mombasa Rd, Kiambu, and the Northern Bypass. Conveniently close to a Shell petrol station, Carrefour at The Hub and a forthcoming Naivas supermarket. <br/><br/> There are 12 houses in a gated-community. Each 4-bed, ensuite home boasts wood parquet floors, ceramic tiles, and terrazzo screed, with built-in wardrobes. Enjoy 200L water solar heaters, gypsum ceilings, and a 164 sq.ft servant's quarter. Situated on an approx. 0.11-acre plot, these homes are near schools and the serene Ngong Forest, embodying a modern, peaceful lifestyle amid an urban revival in Karen-End.
            </BodyText>
        </BodyTextContainer>

    </Container>
)
}



export default Overview