import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import MapView from 'react-native-maps';

// MAP STYLE
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

export default class IrelandMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

    render() {
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 53.350140,
            longitude: -6.266155,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
        </MapView>
      </View>
    )
  }
}