// FETCH DATA FROM URL AND DISPLAY ON MAP
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import GetMarkColor from './MarkColor';

const API_PLACES_URL = 'https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json';

// HOLDS PLACE DATA
export default function IrelandMarkers(){
    const [places, setPlaces] = useState([]);

    // FETCH PLACES FROM URL
    useEffect(() => {
        fetch(API_PLACES_URL)
        .then(res => res.json())
        .then(placesLocation => { 
            setPlaces(placesLocation) })
    }, []);
        return (
        // RETURN PLACE MARKERS ON MAP 
        places.map((place, index) => (
            <Marker
                key={index}
                coordinate={{latitude: place.latitude, longitude: place.longitude}}
                pinColor={GetMarkColor(place.place_type_id)} /*get color according with place type*/
                >
                    <Callout onPress={() => Alert.alert("details")}>
                        <View>
                            <Text>Name: {place.name}</Text>
                            <Text>Gaelic Name: {place.gaelic_name ? place.gaelic_name: 'Not available'}</Text>
                        </View>
                    </Callout>
            </Marker>
        ))
    )
}