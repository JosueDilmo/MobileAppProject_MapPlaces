// DETAILS SCREEN FOR EACH PLACE SELECTED
import  React from "react";
import { Text, View } from 'react-native';


// TODO DEFINE HOW PLACE DATA WILL BE DISPLAY ONCE CLICKED ON MAP SCREEN
export default function DetailsScreen({route}) {
  if (route.params === undefined) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Please, select a place in Ireland Map Screen</Text>
  </View>
  }else{
    const { place } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Name: {place.name}</Text>
      </View>
    );
  }
}