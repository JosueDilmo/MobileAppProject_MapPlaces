import { useEffect, useState } from "react";

//FUNCTION TO GET PLACE TYPE NAME ACCORDING WITH PLACE TYPE ID

const API_PLACETYPE_URL =
  "https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json";

  export default function GetPlaceTypeName(placeTypeID: any) {
  const [placeTypes, setPlaceTypes] = useState([]);

  //SAME IDEA AS IrelandPlaceMarkers
  //FETCH DATA FROM URL, SET DATA TO placeTypes, map placeTypes to get place type name according with place type id
  useEffect(() => {
    fetch(API_PLACETYPE_URL)
      .then((res) => res.json())
      .then((placeTypes) => {
        setPlaceTypes(placeTypes);
      });
  }, []);
  return placeTypes.map((placeType) => {
    //return if is the same id
    if (placeType.id === placeTypeID) {
      //if is the same id, return name
      return placeType.name; //returning place type name
    }
  });
}
