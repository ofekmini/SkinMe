import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';



const mapStyles = {
  width: '100%',
  height: '80%',
  marginTop: 40,
};


class SearchCos extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      value: "",

      cosInfo: {
      },


      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}


    }

  }




  map = () => {

    const apiUrl = 'http://localhost:58031/api/cosmetologists/GetAllCos';

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


          this.setState({ data: [...result] }

          );

        },
        (error) => {
          console.log("err post=", error);
        })

  };

  



  onMarkerClick = (props, marker, e) => {
    
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });


  }
  handlechange = (e) => {
    this.setState({ cosInfo: JSON.parse(e.target.value) })
  }


  componentDidMount() {
   
    this.map();
  }






  render() {
    
    return (
      <div style={{ marginTop: 40 }}>
        <Link to='/userhomepage'>
      <img style={{position:'absolute',left:5,top:0}}alt="wrinkles" height="100" width="100" src={require("../../assets/images/home2.png")}/>
      </Link>

        <h1 style={{ color: 'black', fontSize: 15 }}>חיפוש קוסמטיקאית </h1>  <hr/>
        <select value={this.state.cosInfo} style={{ height: 40, borderRadius: 50, marginTop: 30, padding:10,borderColor: '#c4a092' }} onChange={this.handlechange}>
          {this.state.data.map((cosInfo) => <option key={cosInfo.cosmetic_businessName} value={JSON.stringify(cosInfo)}>{cosInfo.cosmetic_businessName},{cosInfo.cosmetic_city}</option>)}
        </select>

        <Map

          google={this.props.google}
          zoom={12}
          style={mapStyles}
          ref="map"
          initialCenter={{
            lat: 32.07185106722978,
            lng: 34.78795457063944,
          }}
          center={{ lat: this.state.cosInfo.lat, lng: this.state.cosInfo.lng }}

        >




          {this.state.data.map((cosInfo) =>
            <Marker
              key={cosInfo.cosmetic_businessName}
              city={cosInfo.cosmetic_city}
              adress={cosInfo.cosmetic_address}
              name={cosInfo.cosmetic_businessName}
              position={cosInfo}
              onClick={this.onMarkerClick} />)}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <h4>{this.state.selectedPlace.adress}</h4>
              <h4>{this.state.selectedPlace.city}</h4>
            </div>
          </InfoWindow>





        </Map>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpT0-zAzLxeo14rv7sE4-pvZHKm2LY-OA'
})(SearchCos);