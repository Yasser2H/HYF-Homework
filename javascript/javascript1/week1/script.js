// Age-ify (A future age calculator)
const yearOfBirth = 1994;
const yearFuture = 2046;
const age = yearFuture - yearOfBirth;
console.log("Age-ify (A future age calculator):");
console.log("You will be " + age + " years old in " + yearFuture);
console.log("--------------------------");

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
console.log("Goodboy-Oldboy (A dog age calculator):");
if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture);
} else {
  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}
console.log("--------------------------");

// Housey pricey (A house price estimator)
let volumeInMeters, gardenSizeInM2, housePrice;
// Peter house: (The house size is 8m wide, 10m deep and 10m high) (The garden size is 100m2)
volumeInMeters = 8 * 10 * 10;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Peter's house costs: " + housePrice);
// Julia house: (The house size is 5m wide, 11m deep and 8m high) (The garden size is 70m2)
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Julia's house costs: " + housePrice);
console.log("--------------------------");

// Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Less", "Best", "Fit", "New", "Alpha", "Free", "Fans", "Max"];
const secondWords = ["Bold", "Fix", "Only", "Stop", "Drop", "View", "Simple", "Play", "Flex", "Day"];
let randomNumber1, randomNumber2;
randomNumber1 = Math.floor(Math.random() * 10) + 0;
randomNumber2 = Math.floor(Math.random() * 10) + 0;
console.log("Ez Namey (Startup name generator):");
console.log("The startup name is: " + firstWords[randomNumber1] + secondWords[randomNumber2]);


//
