// Item array removal
console.log("------------------ 1st Task ------------------");
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
// First method - Remove an item and keeps all the items indexes
for (var i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    delete names[i];
  }
}

// Second method - Remove an item and shifts all the items indexes
//names = names.filter(item => item !== nameToRemove)

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


// When will we be there??
console.log("------------------ 2nd Task ------------------");
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
// Function to calculate the time
function calcTravelTime(distance, speed) {
  let time = distance / speed * 60;
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  return (hours + " hours and " + minutes.toFixed() + " minutes");
}
const travelTime = calcTravelTime(travelInformation.destinationDistance, travelInformation.speed);
console.log(travelTime); // 4 hours and 42 minutes

// Series duration of my life
console.log("------------------ 3rd Task ------------------");
const seriesDurations = [{
    title: "Breaking Bad",
    days: 1,
    hours: 22,
    minutes: 30,
  },
  {
    title: "Sherlock",
    days: 0,
    hours: 18,
    minutes: 0,
  },
  {
    title: "Narcos",
    days: 1,
    hours: 4,
    minutes: 30,
  },
];

const lifeSpanInMin = 80 * 365 * 24 * 60;
let totalTime = 0, seriesTimeInMinutes = 0, lifeSpanPerSerie = 0;

function logOutSeriesText(seriesDurations) {
  for (var i = 0; i < seriesDurations.length; i++) {
    seriesTimeInMinutes = (seriesDurations[i].days * 1440) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
    lifeSpanPerSerie = ((seriesTimeInMinutes / lifeSpanInMin) * 100);
    console.log(seriesDurations[i].title + " took " + lifeSpanPerSerie.toFixed(3) + "% of my life");
    totalTime += lifeSpanPerSerie;
  }
  console.log("In total that is " + totalTime.toFixed(3) + "% of my life");
}
logOutSeriesText(seriesDurations);

//
