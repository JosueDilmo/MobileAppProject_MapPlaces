import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Details from './Details';
import IrelandMap from './components/IrelandMap';


// TAB NAVIGATOR
const Tab = createBottomTabNavigator();

// THIS IS THE STARTING POINT OF THE APP
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Icon name="map" size={30} color= {color} />
          }}
        name="Ireland Map" component={IrelandMap} />

        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Icon name="map-marker" size={30} color= {color} />
          }}
        name="Details" component={Details} />

      </Tab.Navigator>
    </NavigationContainer>
);
}