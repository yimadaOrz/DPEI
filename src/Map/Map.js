import React from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';

//https://react-google-maps-api-docs.netlify.app/#marker
//https://www.npmjs.com/package/@react-google-maps/api
const containerStyle = {
  width: '100%',
  height: '70vh',
  marginTop: '60px',
};

// const center = {
//   lat: 40.64663577081508,
//   lng: -74.01311987502585
// };
//40.64672669984767, -74.01309500067525
const center = {
  lat: 40.646418921761104,
  lng: -74.01294206025554
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAAZjF4n3DbKnebqukI2b1KRWULaZMMXOQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(16);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const handleInfoWindowClick = () => {
    window.open(`https://www.google.com/maps/place/${center.lat},${center.lng}`, '_blank');
  };
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <MarkerF
          position={center}
         >
            <InfoWindowF position={center} onClick={handleInfoWindowClick}>
              {/*<p>5008 4th Ave, Brooklyn, NY 11220</p>*/}
          {/*<p>5008 4th Ave, Brooklyn, NY 11220</p>*/}
              <a href={`https://www.google.com/maps/place/${center.lat},${center.lng}`} target="_blank" rel="noopener noreferrer">
                New York Dragon Peace Enterprise Inc.
                <br/>
                5008 4th Ave, Brooklyn, NY 11220
              </a>
           </InfoWindowF>
          </MarkerF>
        </>
      </GoogleMap>
  ) : <>
  </>
}
