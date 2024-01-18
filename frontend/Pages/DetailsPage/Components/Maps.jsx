import React,{useMemo} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { GoogleMap,MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: "100%",
    height: "100%"
  };

const center = {
lat: -1.298425,
lng:  36.680160
};
const labelOrigin = { x: -10, y: -1 };
const markerOptions = {
    position: center,
    label: {
      text: 'Karen Hilltop Gardens',
      color: 'white',
      
      fontWeight: 'bold',
      fontSize: '15px',
      labelOrigin: labelOrigin,
    },
  };
const Container = styled.div`
height: 100%;
width: 100%;
display:block;
`;


const StyledMap = styled(GoogleMap)`
height  : 100% ;
width : 100%;
`;
 
const Maps = () => {
  const apiKey = "AIzaSyASlvKgAbpnyFeCSRYH8xPoDp2UPzWaqYE";
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })
  const labelSize = { width: 220};
    const labelPadding = 8;
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <Container>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: true,
            fullscreenControl: false,
            mapTypeId:"hybrid",
            
        }}
      >
        <MarkerF {...markerOptions}/>
        { 
        }
        <></>
      </GoogleMap>
      </Container>
  ) : <h1>Loading Map</h1>
}



export default Maps