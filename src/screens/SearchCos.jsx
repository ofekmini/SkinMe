import React, { Component } from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class SearchCos extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       markers:[],

  
       
    }
  }

  componentDidMount(){
  
    const  apiUrl= 'http://localhost:58031/api/Products/status';

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
          result.map(st => console.log(st.lat));
          
          this.setState({ markers: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }
 

  



  render() {
    return (
      <div>


         <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{  lat:32.07185106722978, lng: 34.78795457063944}}
          >
          <Marker position={{ lat: 32.07068735653665, lng: 34.79447770300881}} />
        
        </Map>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpT0-zAzLxeo14rv7sE4-pvZHKm2LY-OA'
})(SearchCos);