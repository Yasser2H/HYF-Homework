console.log("Script Loaded");
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
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
        delayTheString(5, "Called after 5 seconds")
    }
    return delayFirstCallback;
}

//Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.



