# Mobile Apps 2 - BSC30922 - Semester 1 & 2

<br>

## Individual Project

- Students Name: `Josue Santos`
- Student Number: `24061`
  <br><br>

## Map places in Ireland <br>

### Description <br>

The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage:

- <b>Display markers on the map</b><br>

  - [x] Load places and place types <i>JSON data\*.</i><br>
  - [x] Display marker for all places using GPS coordinates.<br>
  - [x] Use different colours, one for each place type.<br>
  - [x] When marker is tapped, place name should be displayed on a pop-up info window.<br>

- <b>Show extended information<br></b>

  - [ ] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates).<br>
  - [ ] Show the image of the place loaded from the internet\*\*<br>
        [ ][bonus] Show relevant image using any free web service, or search engine.<br>
  - [ ] Show a back button, when pressed, go back to map view.<br>

- <b>Allow filtering by Place Type </b><br>

  - [ ] Show dropdown for selecting Place Type, default value should be all.<br>
  - [ ] When a specific Place Type is selected, show only the places with this Place Type on the map.<br>

- <b>Allow custom marker<br></b>
  - [ ] Long Press anywhere on map to show a draggable marker.<br>
  - [ ] Show distance\*\*\* to the nearest place (from the downloaded data), and on drag marker, update this info.<br>
  - [ ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius. <br>
  - [ ][bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly.<br>

<b>URLs:</b>

Make GET request on the following URLs (do NOT download and include in source):

[Places](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json)<br>

[Place Types](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json)

## Notes:

Bonus requirements do not carry any marks, but will be used to compensate any marks you have lost, if any<br>

\*Places data was taken from [MACMORRIS](https://macmorris.maynoothuniversity.ie/)<br>

\*\*You can hardcode an array of image URLs and randomly load one of them<br>

\*\*\*Use [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) to obtain he great-circle Distance between two points on a sphere given their longitudes and latitudes.<br>

## Reference

[React Native Documentation](https://reactnative.dev/docs/getting-started)<br>
[React Documentation](https://reactjs.org/docs/getting-started.html)<br>
[Expo Documentation](https://docs.expo.dev/)<br>
[React Navigation](https://reactnavigation.org/docs/getting-started)<br>
[React Native Maps](https://github.com/react-native-maps/react-native-maps)<br>
[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)<br>
[Adrian Twarog - React Navigation](https://www.youtube.com/watch?v=gJX8plp4_sc)<br>
[Adrian Twarog - React Native Maps](https://www.youtube.com/watch?v=4qq0GQPkfjI&t=1010s)<br>
[Mosh Hamedani - Fetch API](https://programmingwithmosh.com/react-native/make-api-calls-in-react-native-using-fetch/)<br>
