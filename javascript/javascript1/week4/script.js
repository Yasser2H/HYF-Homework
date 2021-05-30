let personName, nameIsSaved = false,
  processedText, response, todoList = [];

function getReply(command) {
  processedText = processText(command);
//  console.log(processedText);
  if (processedText.substring(0, 13) == "hellomynameis" && !nameIsSaved) {
    nameIsSaved = true;
    personName = command.substring(17, command.length);
    return ("Nice to meet you " + personName);
  } else if (processedText.substring(0, 13) == "hellomynameis" && nameIsSaved) {
    return ("You already provided your name! Aren't you " + personName + "?");
  } else if (processedText.substring(0, 3) == "add") {
    todoList.push(command.substring(4, command.length - 11));
//    console.log(todoList);
    return (command.substring(4, command.length - 11) + " added to your todo");
  } else if (processedText.substring(0, 6) == "remove") {
    todoList = todoList.filter(e => e !== command.substring(7, command.length - 13));
    return (command.substring(7, command.length - 13) + " removed from your todo");
  } else {
    return processCommand(processedText);
  }
}

// Remove fishing from my todo

function processText(rawText) {
  let text = rawText.replace(/\s/g, "");
  text = text.toLowerCase();
  return text;
}


function processCommand(cleanText) {
  switch (cleanText) {
    case "whatismyname?":
      response = "Your name is " + personName + "!";
      break;
    case "whatismyname":
      response = "My name's Siri.";
      break;
    case "howareyou":
      response = "I'm good.";
      break;
    case "whattimeisit":
      response = new Date().toLocaleTimeString();
      break;
    case "stop":
      response = "Bye!!";
      toggleBtn(); // stop listening
  }
  return response;
}



console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("Hello my name is Benjamin")); // "You already provided your name! Aren't you Benjamin?"
console.log(getReply("What is my name?")); // "Your name is Benjamin!"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
//console.log(getReply("What is on my todo?"); // "you have 2 todos - fishing and singing in the shower"
//console.log(getReply("What day is it today?"); // "E.g. if today is 30/8/2019 then it should respond with 30. of August 2019"
//console.log(getReply("what is 3 + 3?"); // "3 + 3 = 6"
//console.log(getReply("what is 4 * 12?"); // "4 * 12 = 48"
//console.log(getReply("Set a timer for 4 minutes"); // "Timer set for 4 minutes" then "The timer is done"
//console.log(getReply("Extra command"); // "Extra command"


/*
- Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
- What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
- Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
- Add singing in the shower to my todo - Should add singing in the shower to a list of todos
- Remove fishing from my todo - Should respond with "Removed fishing from your todo"
- What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
- What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
- Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
- Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
- Add one or more command to your voice assistant */


//
