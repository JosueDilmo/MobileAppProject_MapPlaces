// LOAD IRELAND MAP TO SCREEN
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import IrelandMarkers from './IrelandPlaces';

// IRELAND MAP OVER DUBLIN W/ IrelandMarkers
function IrelandMap() {
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 53.350140,
            longitude: -6.266155,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          ><IrelandMarkers />
        </MapView>
      </View>
    )
  }

  export default IrelandMap;

  // MAP DEFAULT STYLE 
  const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
  });


  //TODO CALLOUT WHEN MARKER IS CLICKED TO DETAILS SCREEN