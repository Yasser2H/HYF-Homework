
const myCanvas = document.getElementById("sampleCanvas");
const canvasContext = myCanvas.getContext("2d");
canvasContext.beginPath();
canvasContext.fillStyle = "#741d1d";
canvasContext.arc(80, 80, 60, 0, 2 * Math.PI);
canvasContext.fill()
document.myCanvas.appendChild(myCanvas);


