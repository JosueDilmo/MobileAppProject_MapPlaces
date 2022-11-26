import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


// MAP SCREEN COMPONENT
function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      <Button onPress={() => navigation.navigate('Places')} title="Go to Places" />
    </View>
  );
}

// PLACES SCREEN COMPONENT
function PlacesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Places Screen</Text>
    </View>
  );
}

// TAB NAVIGATOR
const Tab = createBottomTabNavigator();


// THIS IS THE STARTING POINT OF THE APP
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Icon
            name="map"
            size={30} 
            color= {color} />
          }}
        name="Map" component={MapScreen} />

        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Icon
            name="map-marker"
            size={30} 
            color= {color} />
          }}
        name="Places" component={PlacesScreen} />

      </Tab.Navigator>
    </NavigationContainer>
);
}