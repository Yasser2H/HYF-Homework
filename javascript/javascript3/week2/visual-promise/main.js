const redBox = document.getElementById("red-circle");
const blueBox = document.getElementById("blue-circle");
const greenBox = document.getElementById("green-circle");

// Translate the circles one at a time
async function translateOneByOne() {
    await Promise.resolve(moveElement(redBox, {x: 20, y: 300}))
        .then(() => console.log("Red circle is on target!"));
    await Promise.resolve(moveElement(blueBox, {x: 400, y: 300}))
        .then(() => console.log("Blue circle is on target!"));
    await Promise.resolve(moveElement(greenBox, {x: 400, y: 20}))
        .then(() => console.log("Green circle is on target!"));
}

// Translate all the circles at the same time
function translateAllAtOnce() {
    Promise.all([
        moveElement(redBox, {x: 20, y: 300}),
        moveElement(blueBox, {x: 400, y: 300}),
        moveElement(greenBox, {x: 400, y: 20})
    ]).then(() => console.log("All circles are on target!"))
}

//translateOneByOne().then(() => console.log("All circles are on target!"));
//translateAllAtOnce();
