import React, { useEffect, useState } from "react";
import { View } from "react-native";
import UnsplashKey from "./UnsplashKey";

const photoBaseURL = "https://api.unsplash.com/search/photos?query=";

// THIS PART STLL IN DEVELOPMENT
// SEARCH ENGINE TO FETCH RANDOM PHOTOS FROM UNSPLASH
// ACCORDING WITH THE PLACE NAME

export default function GetPlacePhoto(placeName) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(photoBaseURL + placeName + "&client_id=" + UnsplashKey)
      .then((res) => res.json())
      .then((photoData) => {
        setPhoto(photoData);
      });
  }, []);
  return photo.map((photo) => (
    <View>
      <Image source={{ uri: photo.urls.regular }} />
    </View>
  ));
}
