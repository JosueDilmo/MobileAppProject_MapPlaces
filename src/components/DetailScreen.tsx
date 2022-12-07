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
      <View>
      <Button title="back" onPress={() => navigation.goBack()} />
      <View style={styles.containerNoData}>
        <Text>Please, select a place in Ireland Map Screen</Text>
      </View>
      </View>
    );
  } else {
    // GETTING DATA PASSED FROM IrelandPlaceMarkers
    const { marker } = route.params;

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
          }} //TODO: GET IMAGE FROM API (Still figuring out how to display the correct image)
        />
        <View style={styles.containerData}>
          <Text>Name: {marker.name}</Text>
          <Text>
            Gaelic Name:{" "}
            {marker.gaelic_name ? marker.gaelic_name : "Not available"}
          </Text>
          <Text>ID: {marker.id}</Text>
          <Text>Place Type ID: {marker.place_type_id}</Text>
          <Text>
            Place Type Name:{" "}
            {
              GetPlaceTypeName(
                marker.place_type_id
              ) /*Get place type name according with ID*/
            }
          </Text>
          <Text>Latitude: {marker.latitude}</Text>
          <Text>Longitude: {marker.longitude}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerNoData: {
    paddingTop: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerData: {
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
