
console.log("------------ Function as a variable ------------");

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
console.log("------------------ 1st Task ------------------");
const funArray =
    [() => console.log("First Function"),
    () => console.log("Second Function"),
    () => console.log("Third Function")]
funArray.forEach(fun => fun());

// Create a function as a const and try creating a function normally. Call both functions.
console.log("------------------ 2nd Task ------------------");
const constFunction = function () { console.log("This is a const function"); }
function normalFunction() { console.log("This is a normal function"); }

constFunction(); normalFunction();

// Create an object that has a key whose value is a function. Try calling this function.
console.log("------------------ 3rd Task ------------------");
const objFunction = () => console.log("This is a function object that has a key");

const objFunctionWithKey = {"logOut": objFunction}
objFunctionWithKey.logOut();



