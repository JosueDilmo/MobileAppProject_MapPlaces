
// TODO IMPLEMENT FETCH PLACE TYPE DATA
// COMPARE PLACE TYPE ID WITH ID INSIDE PLACE TYPE DATA
// RETURN COLOR ACCORDING TO PLACE TYPE
import { useState } from "react";

const PLACE_TYPE_URL = 'https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json';

function ComparePlaceType(placeID) {

    getPlaceData();
    function getPlaceData(){
        fetch (PLACE_TYPE_URL)
        .then(res => res.json())
        .then(placeTypeData => {
            setPlaceType(placeTypeData) })
        }

    }

    
