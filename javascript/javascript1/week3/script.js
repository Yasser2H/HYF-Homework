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
let totalTime = 0,
  seriesTimeInMinutes = 0,
  lifeSpanPerSerie = 0;

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

// Save a note + Get a note + Log out notes
console.log("------------------ 4th Task ------------------");
const notes = [];

function saveNote(content, id) {
  let obj = {
    content: content,
    id: id
  };
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return "This Id is already used, try different Id!";
    }
  }
  notes.push(obj);
}

function getNote(id) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i];
    } else {
      return "This Id is not specified, or it's not a number, try different Id!";
    }
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Make dinner", 3);
saveNote("Repair the car", 4);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

let firstNote = getNote(1);
firstNote = getNote(3);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  console.log("- Log out notes:");
  for (var i = 0; i < notes.length; i++) {
    console.log("The note with Id: " + notes[i].id + ", has the following note text: " + notes[i].content);
  }
}

logOutNotesFormatted(); // should log out the text below

function spaceToBorders(charCount) {
  let spaces = "";
  for (var i = 0; i < 23 - charCount; i++) {
    spaces += " ";
  }
  return spaces;
}

function logOutNotesGridView() {
  console.log("- Log out notes in grid view: (Unique feature)");
  console.log("----------------------------------------------");
  console.log("|   Note Id   |         Note Content         |");
  console.log("----------------------------------------------");
  for (var i = 0; i < notes.length; i++) {
    console.log("|      " + notes[i].id + "      |       " + notes[i].content + spaceToBorders(notes[i].content.length) + "|");
  }
  console.log("----------------------------------------------");
}

logOutNotesGridView(); // Unique feature


//
