console.log("Script Loaded");

console.log("------------------ Warmup ------------------")
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
console.log("------------------ 1st Task ------------------");
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
console.log("------------------ 2nd Task ------------------");
function delayTheString(delayInSec, stringToLog) {
    setTimeout(() => console.log(stringToLog), delayInSec * 1000);
}

delayTheString(3, "String with 3 sec delay");
delayTheString(6, "String with 6 sec delay");

// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const btnThirdTask = document.querySelector("#btn-3rd-task");
btnThirdTask.addEventListener("click", delayTheClick(5, "Called after 5 seconds"));

// Callback function has a return
function delayTheClick(delayInSeconds, stringToLog) {
    function delayFirstCallback() {
        console.log("The button has been clicked!");
        delayTheString(5, "Called after 5 seconds")
    }

    return delayFirstCallback;
}

// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.

const logOutEarth = () => console.log("Earth");
const logOutSaturn = () => console.log("Saturn");

function planetLogFunction(callback) {
    return callback();
}

planetLogFunction(logOutEarth);
planetLogFunction(logOutSaturn);

// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const btnLogLocationTask = document.querySelector("#btn-log-location-task");
btnLogLocationTask.addEventListener("click", getCurrentLocation);

// Optional Now show that location on a map using fx the Google maps API
mapboxgl.accessToken = 'pk.eyJ1IjoieWFzc2VyOTQiLCJhIjoiY2txOGFteWN5MDNjMjJ1bHdzNm1ocmNoaiJ9.NhGK1OH7MU9Io-6k9EnM6g';
let mapBoxObj = new mapboxgl.Map({
    container: 'mapBox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-77.0364, 38.8951],
    zoom: 8
});

function flyToLoc(long, lat) {
    mapBoxObj.flyTo({
        center: [long, lat],
        speed: 2,
        zoom: 11.8
    });
}

function getCurrentLocation() {
    function success(position) {
        const latitude = document.querySelector("#latitude");
        latitude.innerHTML = "This is the Latitude: " + position.coords.latitude;
        const longitude = document.querySelector("#longitude");
        longitude.innerHTML = "This is the Longitude: " + position.coords.longitude;
        flyToLoc(position.coords.longitude, position.coords.latitude);
    }

    function error(error) {
        console.log("Location was not found!");
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
console.log("------------------ 7th Task ------------------");
function runAfterDelay(delayInSec, callback) {
    setTimeout(callback, delayInSec * 1000);
    // Your code here
}

runAfterDelay(4, function () {
    console.log("Called after 4 sec!!!!!!");
    // callback
});


// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!
let isClicked = null;
document.addEventListener("click", function () {
    (isClicked === false) ? isClicked = true : isClicked = false;

    if (isClicked === false) {
        setTimeout(function () {
            isClicked = null;
        }, 500);
    } else if (isClicked === true) {
        isClicked = null;
        console.log("Double click!");
    }
});


// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
console.log("------------------ 9th Task ------------------");
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke === true) ? logFunnyJoke() : logBadJoke();
}

funnyJokeFunc = () => console.log("Funny joke!");
badJokeFunc = () => console.log("Bad joke!");

jokeCreator(true, funnyJokeFunc, badJokeFunc);
jokeCreator(false, funnyJokeFunc, badJokeFunc);



