import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MapView, { Callout, Circle, LatLng, Marker } from "react-native-maps";
import GetMarkColor from "../utils/MarkColor";

const API_PLACES_URL =
  "https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json";

export default function IrelandPlaceMarkers(props) {
  const [data, setData] = useState([]); // HOLDS PLACE DATA
  const navigation = useNavigation(); // REACT NAVIGATION DOCUMENTATION
  const { filter } = props; // passed by dropdown selection
  const [newMarker, setNewMarker] = useState({
    latitude: 53.35014,
    longitude: -6.266155,
  }); // hold data from long press event (obs: Had to set initial value to avoid error)
  const [placesInRange, setPlacesInRange] = useState({}); // hold data from places in range by circle radius

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
    <MapView
      onLongPress={(e) => {
        setNewMarker(e.nativeEvent.coordinate);
        // console.log(e.nativeEvent.coordinate) first time i long press the map
        // it was returning object{}, and on the second time was returning the correct coordinates
        // so i had to set the initial value to avoid error
      }}
      style={styles.map}
      initialRegion={{
        latitude: 53.35014,
        longitude: -6.266155,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      }} //IrelandPlaceMarkers will be displayed on this map
    >
      {data.map((marker, index) => {
        //map through data and display markers or filter according with placetype
        return marker.place_type_id == filter || filter == 0 ? (
          <Marker //markers for place data
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

      <Marker //marker for long press event
        coordinate={{
          latitude: newMarker.latitude,
          longitude: newMarker.longitude,
        }}
        pinColor={"black"}
        draggable={true}
        onDragEnd={(e) => {
          setNewMarker(e.nativeEvent.coordinate);
        }} //update marker position when dragged
      ></Marker>
      <Circle //for places in range
        center={{
          latitude: newMarker.latitude,
          longitude: newMarker.longitude,
        }}
        radius={10000} //default 10km
        fillColor={"rgba(0,0,255,0.3)"} //blue fill color with 50% opacity
      ></Circle>
    </MapView>
  );
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
