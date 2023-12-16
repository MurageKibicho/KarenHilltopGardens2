import React,{useMemo} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const Container = styled.div`
height: 100%;
width: 100%;
display:block;
`;
 
const Maps = () => {
  
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const url = "https://storage.googleapis.com/maps-solutions-zjo4wzgabi/locator-plus/ol5o/locator-plus.html"

    return(
    <Container>
        <iframe 
            src={url}
            width="100%" 
            height="100%"
            frameBorder="0"
            loading="lazy">
    </iframe>
    </Container>
)
}



export default Maps