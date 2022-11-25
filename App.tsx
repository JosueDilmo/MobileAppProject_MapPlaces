import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, {enableLatestRenderer} from 'react-native-maps';

//MAP RENDERING
enableLatestRenderer();

// THIS IS THE STARTING POINT OF THE APP
export default function App() {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
);
}


//DEFINE THE STYLES THIS CODE WILL HAVE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //ABOUT THE MAP
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});
