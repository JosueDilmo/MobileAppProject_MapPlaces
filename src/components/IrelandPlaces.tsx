import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import GetMarkColor from './MarkColor';

const API_PLACES_URL = 'https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json';

export default function IrelandMarkers() {
    // HOLDS PLACE DATA
    const [places, setPlaces] = useState([]);
    const navigation = useNavigation(); //REACT NAVIGATION DOCUMENTATION
    
    // FETCH DATA FROM URL AND DISPLAY ON MAP
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
                    <Callout onPress={() => navigation.navigate('Details', {place: place})}/*useNavigation to send data to details screen*/>
                        <View>
                            <Text>Name: {place.name}</Text>
                            <Text>Gaelic Name: {place.gaelic_name ? place.gaelic_name: 'Not available'}</Text>
                        </View>
                    </Callout>
            </Marker>
        ))
    )
}