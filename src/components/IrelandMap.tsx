// LOAD IRELAND MAP TO SCREEN
import { StyleSheet, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import IrelandMarkers from './IrelandPlaces';

// IRELAND MAP OVER DUBLIN W/ IrelandMarkers
export default function IrelandMap() {
  
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 53.350140,
            longitude: -6.266155,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }} //IRELANDPLACES COMPONENT -> IRELAND MARKERS
          ><IrelandMarkers/>
        </MapView>
      </View>
    )
  }

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