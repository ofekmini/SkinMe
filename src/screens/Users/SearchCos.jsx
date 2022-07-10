import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const mapStyles = {
  width: '100%',
  height: '80%',
  marginTop: 40,
};


const SearchCos = (props) => {
  const [data, setDate] = useState([])
  const [value, setValue] = useState('')
  const [cosInfo, setCosInfo] = useState({})
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  const map = () => {

    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/cosmetologists/GetAllCos';

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {

        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {

          console.log("fetch fetchmarkers= ", result);

          setDate([...result])

        },
        (error) => {
          console.log("err post=", error);
        })

  };





  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

  const onInfoWindowClose = () => {
    setActiveMarker(null)
    setShowingInfoWindow(false)

  }

  const handlechange = (e) => {
    setCosInfo(JSON.parse(e.target.value))
  }

  useEffect(() => {
    map()
  }, [])

    return (
      <div style={{ marginTop: 40 }}>
        <Link to='/userhomepage'>
          <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../../assets/images/home2.png")} />
        </Link>

        <h1 style={{ color: 'black', fontSize: 15 }}>חיפוש קוסמטיקאית </h1>  <hr />
        <select value={cosInfo} style={{ height: 40, borderRadius: 50, marginTop: 30, padding: 10, borderColor: '#c4a092' }} onChange={handlechange}>
          {data.map((cosInfo) => <option key={cosInfo.cosmetic_businessName} value={JSON.stringify(cosInfo)}>{cosInfo.cosmetic_businessName},{cosInfo.cosmetic_city}</option>)}
        </select>

        <Map

          google={props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            lat: 32.07185106722978,
            lng: 34.78795457063944,
          }}
          center={{ lat: cosInfo.lat, lng: cosInfo.lng }}

        >




          {data.map((cosInfo) =>
            <Marker
              key={cosInfo.cosmetic_businessName}
              city={cosInfo.cosmetic_city}
              adress={cosInfo.cosmetic_address}
              name={cosInfo.cosmetic_businessName}
              position={cosInfo}
              onClick={onMarkerClick} />)}

          <InfoWindow
            marker={activeMarker}
            onClose={onInfoWindowClose}
            visible={showingInfoWindow}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
              <h4>{selectedPlace.adress}</h4>
              <h4>{selectedPlace.city}</h4>
            </div>
          </InfoWindow>





        </Map>

      </div>
    )
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpT0-zAzLxeo14rv7sE4-pvZHKm2LY-OA'
})(SearchCos);