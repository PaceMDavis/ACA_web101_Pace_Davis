// var loc = document.getElementById('myloc');

// function myLocation(){
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else{
//     loc.innerHTML= "Location Tracking not Possible.";
//   }
// }

// function showPosition(position) {
//   loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude
//   + "<br>";

//variable declared that calls p tag to insert text
let here = document.getElementById('LocDaddy');

//function created to get the position
function locationalAwareness() {
  //conditional that decides what happens if it is able to geolocate you are not
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(xMarksTheSpot);
  } else {
    here.innerHTML = "Location Tracking not Possible"
  }
}
//second function that passes the exact details of what to enter into the p tag, if the browser
//succesfully acquires your location
function xMarksTheSpot(position) {
  here.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude +
  "<br>";
}

// (function () {
//   'use strict';

//   function onPositionReceived(position) {
//     console.log(position);
//   }

//   function locationNotReceived(positionError) {
//     console.log(positionError);
//   }

//   if(navigator.geolocation) {
//     // navigator.geolocation.getCurrentPosition(onPositionReceived,locationNotReceived);

//     var watch = navigator.geolocation.watchPosition(onPositionReceived,locationNotReceived);
//     navigator.geolocation.clearWatch(watch);
//   }
// }());