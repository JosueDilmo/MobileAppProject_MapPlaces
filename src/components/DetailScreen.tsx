import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import GetPlaceTypeName from "../utils/PlaceType";

// DETAILS SCREEN FOR EACH MARKER SELECTED
// REACT NAVIGATION DOCUMENTATION HELPED ME OUT IN HERE
export default function DetailScreen({ route }) {
  const navigation = useNavigation(); //To navigate back to map screen

  if (route.params === undefined) {
    //CHECKING IF THRE IS DATA PASSED
    return (
      <View style={styles.containerNoData}>
        <Text>Please, select a place in Ireland Map Screen</Text>
      </View>
    );
  } else {
    // GETTING DATA PASSED FROM IrelandPlaces/ IrelandMarkers
    const { place } = route.params;

    return (
      <>
        <Button title="back" onPress={() => navigation.goBack()} />
        <Image
          source={{
            uri: `https://picsum.photos/id/${Math.floor(
              Math.random() * 10
            )}/200/300`,
          }}
          style={{
            width: "100%",
            height: "50%",
          }}
        />
        <View style={styles.containerData}>
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

const styles = StyleSheet.create({
  containerNoData: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerData: {
    justifyContent: "center",
  },
});
