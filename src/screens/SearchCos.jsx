import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';



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

    const apiUrl = 'http://localhost:58031/api/map';

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

  // cosList = () => {

  //   const apiUrl = 'http://localhost:58031/api/map';

  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json; charset=UTF-8',
  //       'Accept': 'application/json; charset=UTF-8',
  //     })
  //   })
  //     .then(res => {

  //       console.log('res=', res);
  //       console.log('res.status', res.status);
  //       console.log('res.ok', res.ok);
  //       return res.json()
  //     })
  //     .then(
  //       (result) => {

  //         console.log("fetch cosList= ", result);
  //         result.map(st => console.log(st.cosmetic_businessName));

  //         this.setState({ cos: [...result] }

  //         );

  //       },
  //       (error) => {
  //         console.log("err post=", error);
  //       })

  // };



  onMarkerClick = (props, marker, e) => {
    //console.log("Marker Clicked");
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
    // this.cosList();
    this.map();
  }






  render() {
    //let pos = {lat: this.state.lat, lng:this.state.lng};

    return (
      <div style={{ marginTop: 40 }}>

        <h1 style={{ color: 'black', fontSize: 15 }}>חיפוש קוסמטיקאית </h1>
        <select value={this.state.cosInfo} style={{ height: 40, borderRadius: 50, marginTop: 30, borderColor: '#c4a092' }} onChange={this.handlechange}>
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