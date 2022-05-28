import React, { Component } from 'react'
import { Map, GoogleApiWrapper,Marker ,InfoWindow} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '80%',
  marginTop:80,
};

class SearchCos extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       markers:[],
       infoWindowOpen: false,

  
       
    }
  }

  componentDidMount(){
  
    const  apiUrl= 'http://localhost:58031/api/map';

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
 

      onMarkerClick = (props) => {
        console.log("Marker Clicked");
        this.setState({
          infoWindowOpen:true,
       });
      }

       onInfoWindowClose = () => {
        this.setState({
          infoWindowOpen:false,
       });
        
        
    }
  
    



  render() {
    return (
      <div>
         

         <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{  lat:32.07185106722978, lng: 34.78795457063944}}
         
          >
          
         

        {this.state.markers.map((markers) =>  <Marker position={markers} onClick={this.onMarkerClick} />)}

        {this.state.infoWindowOpen===true&& (

          <InfoWindow onCloseClick={this.onInfoWindowClose}>
              <div>
                 <h1>Marker Info Placeholder</h1>
              </div>
          </InfoWindow>
        )}

       
       
        
        </Map>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpT0-zAzLxeo14rv7sE4-pvZHKm2LY-OA'
})(SearchCos);