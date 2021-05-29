// Item array removal
console.log("---------------------- 1st Task ----------------------");
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
console.log("\---------------------- 2nd Task ----------------------");
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
console.log("\n---------------------- 3rd Task ----------------------");
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

// NOnoN0nOYes (Note taking app)
// Save a note + Get a note + Log out notes + Unique feature
console.log("\n---------------------- 4th Task ----------------------");
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
  console.log("\n- Log out notes:");
  for (var i = 0; i < notes.length; i++) {
    console.log("The note with Id: " + notes[i].id + ", has the following note text: " + notes[i].content);
  }
}

logOutNotesFormatted(); // should log out the text below

function spaceToBorders(totalSpace, charCount) {
  let spaces = "";
  for (var i = 0; i < totalSpace - charCount; i++) {
    spaces += " ";
  }
  return spaces;
}

function logOutNotesGridView() {
  console.log("\n- Log out notes in grid view: (Unique feature)");
  console.log("----------------------------------------------");
  console.log("|   Note Id   |         Note Content         |");
  console.log("----------------------------------------------");
  for (var i = 0; i < notes.length; i++) {
    console.log("|      " + notes[i].id + "      |       " + notes[i].content + spaceToBorders(23, notes[i].content.length) + "|");
  }
  console.log("----------------------------------------------");
}

logOutNotesGridView(); // Unique feature

// CactusIO-interactive (Smart phone usage app) - optional
console.log("\n---------------------- 5th Task ----------------------");
const activities = [];
const usageLimit = 120;

var d = new Date();
var todayDate = d.getDate()  + "/" + (d.getMonth()+1) + "-" + d.getFullYear().toString().substring(2); // 18/5-21

function addActivity(date = todayDate, activity, duration) {
  let obj = {
    date: date,
    activity: activity,
    duration: duration
  };
  activities.push(obj);
}

function showStatus() {
  let totalActivityDuration = 0;
  for (var i = 0; i < activities.length; i++) {
    totalActivityDuration += activities[i].duration;
  }
  if (activities.length > 0) {
    console.log("You have added " + activities.length + " activities. They amount to " + totalActivityDuration + " min. of usage!");
    if (totalActivityDuration > usageLimit) {
      console.log("You have reached your limit of " + usageLimit + " min, no more smartphoning for you!");
    }
  } else {
    console.log("Add some activities before calling showStatus!");
  }
}

function showStatusInGridView() {
  let totalActivityDuration = 0;
  for (var i = 0; i < activities.length; i++) {
    totalActivityDuration += activities[i].duration;
  }
  if (activities.length > 0) {
    console.log("\n- Log out Activities in grid view: (Extra feature)");
    console.log("-------------------------------------------------");
    console.log("|   Date    |       Activity       |  Duration  |");
    console.log("-------------------------------------------------");
    for (var i = 0; i < activities.length; i++) {
      console.log("|  " + activities[i].date + "  |       " + activities[i].activity + spaceToBorders(15, activities[i].activity.length) + "|   " + activities[i].duration + " min   |");
    }
    console.log("-------------------------------------------------");
    if (totalActivityDuration > usageLimit) {
            console.log("|  Usage Limit Reached [✔]  |  Total: " + totalActivityDuration + " min   |");
    } else {
      console.log("|  Usage Limit Reached [✖]  |  Total:  " + totalActivityDuration + " min   |");
    }
    console.log("-------------------------------------------------");
  } else {
    console.log("Add some activities before calling showStatus!");
  }
}

showStatus(); // Test when the activities is empty!
addActivity("18/5-21", "Youtube", 30);
addActivity("18/5-21", "Twitter", 45);
addActivity("18/7-21", "Instagram", 23);
showStatus(activities);
console.log("");
addActivity("18/7-21", "Games", 54);
showStatus(activities);

showStatusInGridView();

//
