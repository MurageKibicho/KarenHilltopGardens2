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
  const apiKey = "AIzaSyASlvKgAbpnyFeCSRYH8xPoDp2UPzWaqYE";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
    return(
    <Container>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </Container>
)
}



export default Maps