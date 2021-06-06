// Find the shortest word
console.log("---------------------- 1st Task - Find the shortest word ----------------------");
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(list) {
  let shortestWordLength = 100,
    shortestWordIndex;
  for (var i = 0; i < list.length; i++) {
    if (shortestWordLength > list[i].length) {
      shortestWordLength = list[i];
      shortestWordIndex = i;
    }
  }
  return list[shortestWordIndex];
}
console.log("The shortest word in the list is: " + findShortestWord(danishWords)); // returns 'ø'

// Find and count the Danish letters
console.log("---------------------- 2nd Task - Find Danish letters count ----------------------");
const danishString1 = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
let danishLettersCount = [0, 0, 0];
let danishLettersCountTotal = 0;

function findDanishLettersCount(list) {
  for (var i = 0; i < list.length; i++) {
    let checkWord = list[i];
    for (var j = 0; j < checkWord.length; j++) {
      isDanishLetterFound(checkWord[j]);
    }
  }
  return ("{total: " + danishLettersCountTotal + ", æ: " + danishLettersCount[0] + ", ø: " + danishLettersCount[1] + ", å: " + danishLettersCount[2] + "}");
}

function isDanishLetterFound(letter) {
  switch (letter) {
    case "æ":
      danishLettersCount[0] = danishLettersCount[0] + 1;
      ++danishLettersCountTotal;
      break;
    case "ø":
      danishLettersCount[1] = danishLettersCount[1] + 1;
      ++danishLettersCountTotal;
      break;
    case "å":
      danishLettersCount[2] = danishLettersCount[2] + 1;
      ++danishLettersCountTotal;
      break;
    default:
  }
}

console.log(findDanishLettersCount(danishString1)); // returns {total: 1, å: 1}
console.log(findDanishLettersCount(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

// Spirit animal name generator
console.log("---------------------- 3rd Task - Spirit animal name generator ----------------------");
const spiritAnimalList = ["Butterfly", "Spider", "Crow", "Owl", "Hummingbird", "Hawk", "Grasshopper", "Eagle", "Fox", "Wolf"];


function getRndNum() {
  return Math.floor(Math.random() * 10);
}

function getInputValue() {
  // Selecting the input element and get its value
  var inputName = document.getElementById("nameInput").value;
  if (!inputName == "") {
    document.getElementById("yourSpiritAnimal").innerHTML = ("Your Spirit Animal: " + inputName + " - The " + spiritAnimalList[getRndNum()]);
    document.getElementById("getSpiritBtn").disabled = true;
  } else {
    alert("Please input a name");
  }
}





//
