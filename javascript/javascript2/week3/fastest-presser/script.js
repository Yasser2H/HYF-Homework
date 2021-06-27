let startButton = document.getElementById("btn-start-game");
let fullPage = document.getElementsByTagName('body')[0];

let leftPlayerCurrentScore = 0;
let rightPlayerCurrentScore = 0;

function startTimer(timeInSeconds) {
    let timeRemaining = timeInSeconds;
    let gameTimer = setInterval(function () {
        if (timeRemaining <= 0) {
            clearInterval(gameTimer);
            startButton.innerHTML = "Finished";
            finishGame();
            console.log("Timeout!");
        } else {
            startButton.innerHTML = timeRemaining + " Seconds";
            // startButton.style.background = "#908f8f";
            // startButton.style.color = "#535353";
            // startButton.style.borderColor = "#000000";
            // startButton.style.boxShadow = "#dcdcdc";
            // startButton.style.textShadow = "#dcdcdc";
        }
        timeRemaining--;
    }, 1000);
}

function startGame() {
    let gameLength = document.getElementById("input-seconds").value;

    fullPage.addEventListener('keydown', (event) => {
        countPresses(event.key.toLowerCase());
    });

    if (gameLength !== "") {
        // document.getElementById("btn-start-game").disabled = true;
        document.getElementById("input-seconds").value = "";
        startTimer(gameLength);
    } else {
        alert("Please enter a time in seconds between 5 and 60")
    }
}


function finishGame() {
    fullPage.removeEventListener("keydown", function () {
        console.log("Time is up!")
    });
}


function countPresses(keyPressed) {
    switch (keyPressed) {
        case 's':
            console.log("S button clicked!");
            leftPlayerCurrentScore++;
            document.getElementById('left-current-score').innerText = leftPlayerCurrentScore;
            break;
        case 'l':
            console.log("L button clicked!");
            rightPlayerCurrentScore++;
            document.getElementById('right-current-score').innerText = rightPlayerCurrentScore;
            break;
        default:
    }
}


startButton.addEventListener("click", startGame, false);












