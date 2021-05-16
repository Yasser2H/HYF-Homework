// Flight booking fullname function
console.log("------------------ 1st Task ------------------");
let fullname1 = getFullname("Elon", "Musk");
let fullname2 = getFullname("Steve", "Jobs");

console.log("1st Fullname: " + fullname1);
console.log("2nd Fullname: " + fullname2);

function getFullname(firstName, lastName, useFormalName = false){
  if (useFormalName) {
    return ("Lord " + firstName + " " + lastName);
  } else {
    return (firstName + " " + lastName);
  }

}
// Flight booking fullname function (Formal fullname)
console.log("------------------ 2nd Task ------------------");
fullname1 = getFullname("Elon", "Musk" , true);
fullname2 = getFullname("Steve", "Jobs", true);

console.log("1st Formal Fullname: " + fullname1);
console.log("2nd Formal Fullname: " + fullname2);

// Event application
console.log("------------------ 3rd Task ------------------");

console.log(getEventWeekday(9));
console.log(getEventWeekday(3));

function getEventWeekday(daysUntilEvent) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let eventDay = days[(new Date().getDay() + daysUntilEvent) % 7];
  return ("The event will be held on a " + eventDay);
}
