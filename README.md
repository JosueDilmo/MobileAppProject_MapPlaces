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
  -- Load places and place types <i>JSON data.</i><br>
  -- Display marker for all places using GPS coordinates.<br>
  -- Use different colours, one for each place type.<br>
  -- When marker is tapped, place name should be displayed on a pop-up info window.<br>

- <b>Show extended information<br></b>
  -- When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates).<br>
  -- Show the image of the place if available, else, show a random image loaded from the internet.<br>
  -- Show a back button, when pressed, go back to map view.<br>

- <b>Allow filtering by Place Type </b><br>
  -- Show dropdown for selecting Place Type, default value should be all.<br>
  -- When a specific Place Type is selected, show only the places with this Place Type on the map.<br>

- <b>Allow custom marker<br></b>
  -- Long Press anywhere on map to show a draggable marker.<br>
  -- Show distance2 to the nearest place (from the downloaded data), and on drag marker, update this info.<br>
  -- Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius. <br>
  -- Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly.<br>

<b>URLs:</b>

Make GET request on the following URLs (do NOT download and include in source):

[Places](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json)<br>

[Place Types](https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json)

## Notes:

Places data was taken from [MACMORRIS](https://macmorris.maynoothuniversity.ie/)

Use [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) to obtain he great-circle Distance between two points on a sphere given their longitudes and latitudes.

## Reference