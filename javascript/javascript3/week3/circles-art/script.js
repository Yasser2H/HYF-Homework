// Make some art using classes
const myCanvas = document.getElementById("myCanvas");
const canvasContext = myCanvas.getContext("2d");
canvasContext.canvas.width = window.innerWidth;
canvasContext.canvas.height = window.innerHeight;

class Circle {
    constructor(x, y, radius, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        canvasContext.fillStyle = this.fillColor;
        canvasContext.fill();
        canvasContext.stroke();
    }
}

function getRandomColour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + green + "," + blue + " )";
}

function autoDrawCircle() {
    const randomX = Math.floor(Math.random() * myCanvas.clientWidth);
    const randomY = Math.floor(Math.random() * myCanvas.clientHeight);
    const c1 = new Circle(randomX, randomY, 36, 0, 2 * Math.PI, getRandomColour());
    c1.draw();
}

// Follow the mouse - Optional
let pageX = 0, pageY = 0;

window.addEventListener("mousemove", updateMousePosition);

function updateMousePosition(event) {
    pageX = event.pageX;
    pageY = event.pageY;
}

function mouseDrawCircle() {
    const c1 = new Circle(pageX, pageY, 30, 0, 2 * Math.PI, getRandomColour());
    c1.draw();
}

let startMouseDraw, startAutoDraw;

document.addEventListener("mouseenter", function () {
    clearInterval(startAutoDraw);
    startMouseDraw = setInterval(mouseDrawCircle, 460);
    console.log("Mouse entered in the window");
}, false);

document.addEventListener("mouseout", function (e) {
    let top = e.pageY;
    let right = document.body.clientWidth - e.pageX;
    let bottom = document.body.clientHeight - e.pageY;
    let left = e.pageX;

    if (top < 2 || right < 2 || bottom < 2 || left < 2) {
        clearInterval(startMouseDraw);
        startAutoDraw = setInterval(autoDrawCircle, 800);
        console.log("Mouse moved out of the window");
    }
});
