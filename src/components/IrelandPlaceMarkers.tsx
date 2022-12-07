import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MapView, { Callout, LatLng, Marker } from "react-native-maps";
import GetMarkColor from "../utils/MarkColor";

const API_PLACES_URL =
  "https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json";

export default function IrelandPlaceMarkers(props) {
  const [data, setData] = useState([]); // HOLDS PLACE DATA
  const navigation = useNavigation(); // REACT NAVIGATION DOCUMENTATION
  const { filter } = props; // passed by dropdown selection
  const [newMarker, setNewMarker] = useState({}); // hold data from long press event

  // FETCH DATA FROM URL AND DISPLAY ON MAP
  useEffect(() => {
    fetch(API_PLACES_URL)
      .then((res) => res.json())
      .then((markerLocation) => {
        setData(markerLocation);
      });
  }, []);
  return (
    // Ireland map
    <MapView onLongPress={e => {
      setNewMarker({latitute: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})
      console.log(newMarker) // TODO: Data logged to console, but not displayed on map
    }}
      style={styles.map}
      initialRegion={{
        latitude: 53.35014,
        longitude: -6.266155,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }} //IrelandPlaceMarkers will be displayed on this map
    >
      {data.map((marker, index) => { //map through data and display markers
        return marker.place_type_id == filter || filter == 0 ? (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor={GetMarkColor(
              marker.place_type_id
            )} /*get color according with place type*/
          > 
            <Callout
              onPress={() =>
                navigation.navigate("Details", { marker: marker })
              } /*useNavigation to send data to details screen*/
            >
              <View>
                <Text>Name: {marker.name}</Text>
                <Text>
                  Gaelic Name:{" "}
                  {marker.gaelic_name ? marker.gaelic_name : "Not available"}
                </Text>
              </View>
            </Callout>
          </Marker>
        ) : (
          <React.Fragment key={index}></React.Fragment>
        );
      })} 
    </MapView>
  ); //TODO: add new marker from long press event
}

// MAP DEFAULT STYLE
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
