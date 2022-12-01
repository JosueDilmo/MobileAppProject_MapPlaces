import React from "react";
import { Text, View } from "react-native";
import GetPlaceTypeName from "../utils/PlaceType";

// DETAILS SCREEN FOR EACH MARKER SELECTED
// REACT NAVIGATION DOCUMENTATION HELPED ME OUT IN HERE
export default function DetailScreen({ route }) {
  if (route.params === undefined) {
    //CHECKING IF THRE IS DATA PASSED
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Please, select a place in Ireland Map Screen</Text>
      </View>
    );
  } else {
    // GETTING DATA PASSED FROM IrelandPlaces/ IrelandMarkers
    const { place } = route.params;

    return (
      </*Display information from markers*/>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Name: {place.name}</Text>
          <Text>
            Gaelic Name:{" "}
            {place.gaelic_name ? place.gaelic_name : "Not available"}
          </Text>
          <Text>ID: {place.id}</Text>
          <Text>Place Type ID: {place.place_type_id}</Text>
          <Text>
            Place Type Name:{" "}
            {
              GetPlaceTypeName(
                place.place_type_id
              ) /*Get name according with ID*/
            }
          </Text>
          <Text>Latitude: {place.latitude}</Text>
          <Text>Longitude: {place.longitude}</Text>
        </View>
      </>
    );
  }
}
