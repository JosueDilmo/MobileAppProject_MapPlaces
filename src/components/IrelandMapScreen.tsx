// LOAD IRELAND MAP TO SCREEN
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import IrelandPlaceMarkers from "./IrelandPlaceMarkers";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";

// IRELAND MAP initialRegion DUBLIN
export default function IrelandMapScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState(0);
  const PlaceTypeName = [
    { label: "Show all places", id: 0 },
    { label: "Province", id: 1 },
    { label: "County", id: 2 },
    { label: "City", id: 3 },
    { label: "Town", id: 4 },
    { label: "Townland", id: 5 },
    { label: "Barony", id: 6 },
    { label: "Street ", id: 7 },
    { label: "Village", id: 8 },
    { label: "River ", id: 9 },
    { label: "Other", id: 10 },
    { label: "Country", id: 11 },
    { label: "Castle", id: 12 },
    { label: "Seignory", id: 13 },
    { label: "Forest", id: 14 },
    { label: "Lake", id: 15 },
  ]; // TODO: GET DATA FROM PLACETYPE API

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Ireland Map",
      headerRight: () => (
        // Filter by place type with dropdown menu
        <Dropdown
          placeholder="Select a place type"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          backgroundColor="rgba(0,0,0,0.2)"
          data={PlaceTypeName}
          labelField="label"
          valueField="id"
          onChange={(value) => setSearch(value.id)}
        />
      ),
    });
  }, [navigation]);

  return (
    <IrelandPlaceMarkers
      filter={search} /*Its filtering the by placetypes by the dropdown */
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    alignSelf: "flex-start",
    width: 200,
    height: 30,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 5,
  },
  dropdown: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    margin: 16,
    width: 200,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  dropdownContainer: {
    width: 188,
    marginLeft: 4,
    marginTop: -30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
