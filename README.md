# Mobile Apps 2 - BSC30922 - Semester 1 & 2

<br>

## Individual Project

- Lecture Name: [Saravanabalagi Ramachandran](https://github.com/saravanabalagi)
- Students Name: `Josue Santos`
- Student Number: `24061`
  <br><br>

## Map places in Ireland <br>

### Description <br>

The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage:

- <b>Display markers on the map</b><br>

  - [x] Load places and place types <i>JSON data.</i><br>
  - [x] Display marker for all places using GPS coordinates.<br>
  - [x] Use different colours, one for each place type.<br>
  - [x] When marker is tapped, place name should be displayed on a pop-up info window.<br>

- <b>Show extended information<br></b>

  - [x] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates).<br>
  - [x] Show the image of the place loaded from the internet\*\*<br>
  - [ ] [bonus] Show relevant image using any free web service, or search engine.<br>
  - [x] Show a back button, when pressed, go back to map view.<br>

- <b>Allow filtering by Place Type </b><br>

  - [x] Show dropdown for selecting Place Type, default value should be all.<br>
  - [x] When a specific Place Type is selected, show only the places with this Place Type on the map.<br>

- <b>Allow custom marker<br></b>
  - [x] Long Press anywhere on map to show a draggable marker.<br>
  - [ ] Show distance\*\*\* to the nearest place (from the downloaded data), and on drag marker, update this info.<br>
  - [ ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius. <br>
  - [ ] [bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly.<br>

<b>URLs:</b>

Make GET request on the following URLs (do NOT download and include in source):

[Places](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json)<br>

[Place Types](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json)

## Notes:

Bonus requirements do not carry any marks, but will be used to compensate any marks you have lost, if any<br>

\*Places data was taken from [MACMORRIS](https://macmorris.maynoothuniversity.ie/)<br>

\*\*You can hardcode an array of image URLs and randomly load one of them<br>

\*\*\*Use [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) to obtain the great-circle Distance between two points on a sphere given their longitudes and latitudes.<br>

## Report

This project was very difficult for me because I’ve never developed in React Native, so I had to search and watch videos about most of the basic things and study in parallel while developing the project. I was able to do most of the requirements and for the ones I couldn’t do I tried hard, and the code can be seen in my repository.<br>

An explanation about the requirements I couldn’t accomplish. In the requirements, second section, the third item is about to load a relevant image using any free service, I tried to use Unsplash but for some reason that I couldn’t figure out it is not loading the correct image, for now it is loading a typing machine image.  The code is available in the repository at <i>Utils> GetPlacePhoto.</i><br>

In the last requirements section, I was able to create the draggable marker and the semi-transparent blue circle around it, but when I insert the code to load the places in range, the application got super slow, in a point that I couldn’t even see if it was loading the correct places in range. I remove the code responsible for the places in radius and left just the draggable marker.<br>

It was a fun time and a good learning time developing in React Native even though sometimes it was very frustrating trying to figure out an error, going to the internet and Stack Overflow, for later find out it was a “semicolon or an interrogation mark” that was missing. Jokes a part, developing in React Native made me a bit more focus and brought me attention to the details as I said before, sometimes is just a “silly thing” that is making the application to crash. I enjoyed a lot React Native I hope I can keep learning about it.<br>

In the reference section is the videos and documentation I used for this project and all the code seen is referenced.<br>


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
[Unsplash Documentation](https://unsplash.com/documentation)<br>
[Random Photos website](https://picsum.photos/)<br>
[Search Filter](https://www.youtube.com/watch?v=s542Fe7QBuM)<br>
[Dropdown Menu](https://github.com/hoaphantn7604/react-native-element-dropdown)<br>
[Circle and draggable mark](https://youtu.be/qlELLikT3FU)<br>
