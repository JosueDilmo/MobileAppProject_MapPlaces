// FETCH DATA FROM URL AND DISPLAY ON MAP
import React, { Component, useState } from 'react'
import { Marker } from 'react-native-maps';

const API_PLACES_URL = 'https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json';

// HOLDS PLACE DATA
function IrelandMarkers(){
    const [places, setPlaces] = useState([]);

    IrelandPlaces();
    
    // FETCH DATA FROM URL
    function IrelandPlaces(){
        fetch(API_PLACES_URL)
        .then(res => res.json())
        .then(placesLocation => { 
            setPlaces(placesLocation) })
    }
    return (
        // RETURN PLACE MARKERS ON MAP 
        //TODO: ADD MARKER COLOR
        places.map((place, index) => (
            <Marker
                key={index}
                coordinate={{latitude: place.latitude, longitude: place.longitude}}
                title={place.name}
                pinColor='blue'>
            </Marker>
        ))
        )
}


export default IrelandMarkers;
