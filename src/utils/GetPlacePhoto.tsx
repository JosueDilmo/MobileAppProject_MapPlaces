import React, { Component, useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import UnsplashKey from "./UnsplashKey";

const photoBaseURL = "https://api.unsplash.com/search/photos?query=";

// THIS PART STLL IN DEVELOPMENT
// SEARCH ENGINE TO FETCH RANDOM PHOTOS FROM UNSPLASH
// ACCORDING WITH THE PLACE NAME

export default class GetPlacePhoto extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      photo: "",
    };
  }

  fetchPhotoUrl = async (placeName: string) => {
    await fetch(photoBaseURL + placeName + "&client_id=" + UnsplashKey)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          photo: data.results[0].urls.regular,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return this.state.isLoading ? (
      <Image
        source={{ uri: this.state.photo }}
        style={{ width: 100, height: 100 }}
      />
    ) : (
      <ActivityIndicator />
    );
  }
}
// {this.state.isLoading ? (
//   <ActivityIndicator />
// ) : (

/* <View>
{isLoading ? (
  <ActivityIndicator size="large" color="#0000ff" />
) : (
  <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
)} */
