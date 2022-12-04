// LOAD IRELAND MAP TO SCREEN
import { StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import IrelandPlaceMarkers from "./IrelandPlaceMarkers";
import { useNavigation } from "@react-navigation/native";

// IRELAND MAP initialRegion DUBLIN
export default function IrelandMapScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Ireland Map",
      headerStyle: {
        backgroundColor: "lightgrey",
      },
      headerRight: () => (
        // SEARCH BAR FOR PLACE TYPES FILTER
        // MISSING DROPDOWN MENU TO SELECT PLACE TYPES ID
        <TextInput
          style={styles.searchInput}
          placeholder="Search by place type"
          onChangeText={(text: any) => setSearch(text)}
        ></TextInput>
      ),
    });
  }, [navigation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 53.35014,
        longitude: -6.266155,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }} //IrelandPlaceMarkers will be displayed on this map
    >
      <IrelandPlaceMarkers filter={search} />
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
  searchInput: {
    alignSelf: "flex-start",
    alignContent: "center",
    width: 200,
    height: 30,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 5,
    borderBottomColor: "black",
  },
});
