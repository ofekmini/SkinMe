import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps’
;

<View style={styles.container}>
<MapView
style={{flex: 0.7, width: Dimensions.get('window').width - 30,}}
region={{
latitude: 32.157154,
longitude: 34.843893,
latitudeDelta: 0.0122,
longitudeDelta: 0.0121,
}} >
<Marker
coordinate={{
latitude: 32.15715,
longitude: 34.843893
}}
title='my place:)'
description='here i am'
//image={require('../assets/icon.png')}
/>
</MapView>
</View>


//export default GoogleApiWrapper({
  //  apiKey: ("AIzaSyDcfXE8pzKmp_mtnH7q05PAT4ELTNjphY8")
//}) (App)