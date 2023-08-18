import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import styles from './mapView.style';
import MapView, {
  Marker,
  Polyline,
} from 'react-native-maps';

const MapViewComponent = ({navigation,initialCoords,setmarker,coords,markerCoords,show,complete}) => {

  return (
    <SafeAreaView style={styles.container}>

            <MapView
              initialRegion={{
                latitude: initialCoords.latitude,
                longitude: initialCoords.longitude,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
              }}
              zoomEnabled={true}
              scrollEnabled={true}
              loadingEnabled={true}
              mapType="terrain"
              onPress={coordinate => {
                complete
                  ? console.log('complete')
                  : setmarker(coordinate.nativeEvent.coordinate);
                // console.log(coordinate.nativeEvent.coordinate);
              }}
              style={{
                position:'absolute',
                bottom:0,
                right:0,
                left:0,
                top:0,
              }}>
              {show && (
                <View>
                  <Marker
                  style={{marginLeft:10}}
                  image={require('../../assets/images/flag2.png')}
                    coordinate={{
                      latitude: parseFloat(coords.latitude),
                      longitude:parseFloat(coords.longitude),
                    }}
                  />
                  <Polyline
                    coordinates={[markerCoords, {latitude:parseFloat(coords.latitude),longitude:parseFloat(coords.longitude)}]}
                    strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={3}
                  />
                </View>
              )}
              {markerCoords && (
                <Marker
                  coordinate={{
                    latitude: markerCoords.latitude,
                    longitude: markerCoords.longitude,
                  }}
                />
              )}
            </MapView>
            
    </SafeAreaView>
  );
};

export default MapViewComponent;
