const myCanvas = document.getElementById("myCanvas");
const canvasContext = myCanvas.getContext("2d");
canvasContext.canvas.width  = window.innerWidth;
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

function getRandomColour(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb("+red+","+green+"," +blue+" )";
}

function drawCircle() {
    const randomX = Math.floor(Math.random() * myCanvas.clientWidth);
    const randomY = Math.floor(Math.random() * myCanvas.clientHeight);
    const c1 = new Circle(randomX, randomY, 36, 0, 2 * Math.PI, getRandomColour());
    c1.draw();
}

setInterval(drawCircle, 600);

//