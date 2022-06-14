import React, { Component } from 'react'
import { Map, GoogleApiWrapper,Marker ,InfoWindow} from 'google-maps-react';



const mapStyles = {
  width: '100%',
  height: '80%',
  marginTop:40,
};




class SearchCos extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       markers:[],
       
       cos:[],
       value:"",
       
       lat: 32.07185106722978, 
       lng:34.78795457063944,
       

       showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
       
       
    }
   
  }

  


  map=()=>{
  
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

      };

      cosList=()=>{

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
          
          console.log("fetch cosList= ", result);
          result.map(st => console.log(st.cosmetic_businessName));
          
          this.setState({ cos: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      };



      onMarkerClick = (props,marker, e) => {
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
      this.setState({
        lat: e.target.value,
        lng: e.target.value,  
      })
      console.log(this.state.lat)
      console.log(this.state.lng)
    }


    componentDidMount(){
      this.cosList();
      this.map();
    }

   
    
  
  

  render() {
   //let pos = {lat: this.state.lat, lng:this.state.lng};

    return (
      <div style={{marginTop:40}}>
         
         <h1 style={{color:'black',fontSize:15}}>חיפוש קוסמטיקאית </h1>
         <select style={{height:40,borderRadius:50,marginTop:30,borderColor:'#c4a092'}} onChange={this.handlechange}>
         {this.state.cos.map((cos) => <option name='latlng' value={cos.pos}>{cos.cosmetic_businessName},{cos.cosmetic_city}</option>)} 
          </select>

         <Map
         
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          ref="map"
          initialCenter={{lat:this.state.lat, lng:this.state.lng}}
          
          >
          
         


        {this.state.markers.map((markers) => 
         <Marker 
          city={markers.cosmetic_city}
          adress={markers.cosmetic_address}
          name={markers.cosmetic_businessName}
          position={markers} 
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