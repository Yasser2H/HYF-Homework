// Flight booking fullname function
console.log("------------------ 1st Task ------------------");
let fullname1, fullname2;

function getFullname(firstName, lastName, useFormalName = false) {
  if (useFormalName) {
    return ("Lord " + firstName + " " + lastName);
  } else {
    return (firstName + " " + lastName);
  }
}
fullname1 = getFullname("Elon", "Musk");
fullname2 = getFullname("Steve", "Jobs");
console.log("1st Fullname: " + fullname1);
console.log("2nd Fullname: " + fullname2);

// Flight booking fullname function (Formal fullname)
console.log("------------------ 2nd Task ------------------");
fullname1 = getFullname("Elon", "Musk", true);
fullname2 = getFullname("Steve", "Jobs", true);

console.log("1st Formal Fullname: " + fullname1);
console.log("2nd Formal Fullname: " + fullname2);

// Event application
console.log("------------------ 3rd Task ------------------");

function getEventWeekday(daysUntilEvent) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //  const eventDay = days[(new Date().getDay() + daysUntilEvent) % 7];
  const today = new Date().getDay();
  const eventWeekdayIndex = (today + daysUntilEvent) % 7;
  const eventWeekday = days[eventWeekdayIndex];
  return ("The event will be held on a " + eventWeekday);
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(3));

// Weather wear
console.log("------------------ 4th Task ------------------");

function weatherTemp(temp) {
  if (temp < 0) {
    return "Probably stay home";
  } else if (temp < 15) {
    return "Wear jeans and a jacket";
  } else if (temp < 30) {
    return "Wear jeans and a t-shirt";
  } else if (temp < 45) {
    return "Wear shorts and a t-shirt";
  } else {
    return "That's really hot, wear whatever";
  }
}

console.log("According to the current weather: " + weatherTemp(16));
console.log("According to the current weather: " + weatherTemp(37));

// Student manager
console.log("------------------ 5th Task ------------------");
const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("An empty string cannot be added to the class");
  } else if (class07Students.includes(studentName)) {
    console.log("The same person cannot be added to the class");
  } else if (class07Students.length < 6 || studentName === "Queen") {
    class07Students.push(studentName);
    console.log(studentName + " Has been added to the class");
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to the class");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Student1");
addStudentToClass("Student2");
addStudentToClass("Student3");
addStudentToClass("Student4");
addStudentToClass("Student5");
addStudentToClass("");
addStudentToClass("Student6");
addStudentToClass("Student6");
addStudentToClass("Student7");
addStudentToClass("Queen");
addStudentToClass("Student8");
console.log("The number of students in the class is: " + getNumberOfStudents());

// Candy helper
console.log("------------------ 6th Task ------------------");
const boughtCandyPrices = [];
let boughtCandy = 0;
const amountToSpend = Math.random() * 100;

function addCandy(name, weight) {
  if (canBuyMoreCandy()) {
    switch (name.toLowerCase()) {
      case "sweet":
        boughtCandyPrices.push(weight * 0.5);
        console.log(name + " has been purchased");
        break;
      case "chocolate":
        boughtCandyPrices.push(weight * 0.7);
        console.log(name + " has been purchased");
        break;
      case "toffee":
        boughtCandyPrices.push(weight * 1.1);
        console.log(name + " has been purchased");
        break;
      case "chewing-gum":
        boughtCandyPrices.push(weight * 0.03);
        console.log(name + " has been purchased");
        break;
      default:
        console.log("This candy is not available");
    }
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

function canBuyMoreCandy() {
  let n = 0;
  while (n < boughtCandyPrices.length) {
    boughtCandy += boughtCandyPrices[n];
    n++;
  }
  if (boughtCandy <= amountToSpend) {
    return true;
  } else if (boughtCandy > amountToSpend) {
    return false;
  }
}

console.log("You have this amonut of money: " + amountToSpend.toFixed(2));
addCandy("Sweet", 28);
addCandy("Chocolate", 25);
addCandy("Toffee", 40);
addCandy("Chewing-gum", 37);
