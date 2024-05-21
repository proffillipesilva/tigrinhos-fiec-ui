import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -23.0882,
  lng:  -47.2234
};

function MyComponent() {
    
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
  })

  const markers = [
    {
      id: 1,
      name: "Fiec, Indaiatuba - SP",
      position: {  lat: -23.0882, lng:  -47.2234 }
    }
]

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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => {}}
        >
         
        </Marker>))}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)