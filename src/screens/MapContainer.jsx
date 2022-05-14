import React from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%",
    
  };
  
  const defaultCenter = {
    lat:32.07185106722978, lng: 34.78795457063944
    
  }
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 32.07068735653665,
        lng: 34.79447770300881
       
      },
     
    },
    {
      name: "Location 2",
      location: { 
        lat: 32.081451115317904,
        lng: 34.77422166038814
        
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 32.091451115317904,
        lng:  34.78422166038814
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  
  return (
   
     <LoadScript
       googleMapsApiKey='AIzaSyDpT0-zAzLxeo14rv7sE4-pvZHKm2LY-OA'>
        <GoogleMap
          
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          

          {
            ...locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}  />
              )
            })
          }
         
        >
        </GoogleMap>
     </LoadScript>

  )
}
export default MapContainer;
