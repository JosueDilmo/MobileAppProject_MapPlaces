import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Callout, Marker } from "react-native-maps";
import GetMarkColor from "../utils/MarkColor";

const API_PLACES_URL =
  "https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json";

export default function IrelandPlaceMarkers() {
  const [data, setData] = useState([]); // HOLDS PLACE DATA
  const navigation = useNavigation(); // REACT NAVIGATION DOCUMENTATION

  // FETCH DATA FROM URL AND DISPLAY ON MAP
  useEffect(() => {
    fetch(API_PLACES_URL)
      .then((res) => res.json())
      .then((markerLocation) => {
        setData(markerLocation);
      });
  }, []);

  return (
    // RETURN PLACE MARKERS ON MAP
    data.map((marker, index) => (
      <Marker
        key={index}
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
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
    ))
  );
}
