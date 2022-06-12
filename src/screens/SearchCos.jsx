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
       infoWindowOpen: false,
       cos:[],
       value:""
      
       

  
       
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

    componentDidMount(){
      this.cosList();
      this.map();
    }

    handlechange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        
      })
      console.log(e.target.value)
    }

  
  

  render() {
    return (
      <div style={{marginTop:40}}>
         
         <h1 style={{color:'black',fontSize:15}}>חיפוש קוסמטיקאית </h1>
         <select style={{height:40,borderRadius:50,marginTop:30,borderColor:'#c4a092'}} onChange={this.handlechange}>
         {this.state.cos.map((cos) => <option name='cosmetologist_id' value={cos.cosmetologist_id}>{cos.cosmetic_businessName},{cos.cosmetic_city}</option>)} 
          </select>

         <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{  lat:32.07185106722978, lng: 34.78795457063944}}
         
          >
          
         


        {this.state.markers.map((markers) =>  <Marker position={markers} onClick={this.onMarkerClick} />)}

        {this.state.infoWindowOpen && (

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