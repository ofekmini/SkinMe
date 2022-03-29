import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
import SkinmeLogo from '../commons/Logo';

class App extends Component{
    render() {
        return(
            <div className='App'>
                <header className='App-Header'>
                    <SkinmeLogo/>
                </header>
                <Map google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                    name={'Current Location'}/>

                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDcfXE8pzKmp_mtnH7q05PAT4ELTNjphY8")
}) (App)