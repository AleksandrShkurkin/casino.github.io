// JavaScript source code
let arrayResults = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let cell11 = document.getElementById("cell11");
let cell12 = document.getElementById("cell12");
let cell13 = document.getElementById("cell13");
let cell21 = document.getElementById("cell21");
let cell22 = document.getElementById("cell22");
let cell23 = document.getElementById("cell23");
let cell31 = document.getElementById("cell31");
let cell32 = document.getElementById("cell32");
let cell33 = document.getElementById("cell33");
let handle = document.getElementById("handle");
let nameOut = document.getElementById("nameOut");
let pointsOut = document.getElementById("pointsOut");
let button = document.getElementById("startGame");
let elementArray = [[cell11, cell12, cell13], [cell21, cell22, cell23], [cell31, cell32, cell33]];
let score = 0;
let rounds = 0;
let name = new String();

function fruitChoice(number) {
    switch (number) {
        case 0:
            return 'img/apple.jpg';
            break;
        case 1:
            return 'img/banana.jpg';
            break;
        case 2:
            return 'img/cherry.jpg';
            break;
        case 3:
            return 'img/watermellon.jpg';
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let rightName = false
    while (!rightName) {
        let sign = prompt("Please, enter your username:");
        if (sign != null) {
            let signTrimmed = sign.trim();
            if (signTrimmed.length > 3) {
                rightName = true;
                name = signTrimmed;
                nameOut.style.backgroundColor = 'white';
                nameOut.textContent = name + "`s game";
                nameOut.style.animationName = 'borderApar';
                nameOut.style.animationIterationCount = 'infinite';
                nameOut.style.animationDuration = '5s';
                nameOut.style.border = 'solid 3px';
            }
            else {
                alert("Too few characters");
            }
        }
        else {
        }
    }
    updatePlay();
}
);

handle.addEventListener('mouseover', () => {
    handle.style.cursor = "pointer";
})

handle.addEventListener('mouseouthow', () => {
    handle.style.cursor = "default";
})

handle.addEventListener('click', () => {
    rounds++;
    pointsOut.textContent = rounds + " round out of 3";
    updatePlay();
    if (arrayResults[0][0] == arrayResults[1][0] && arrayResults[0][0] == arrayResults[2][0]) {
        pointsOut.textContent = "You won on lane 1!";
        rounds = 0;
    }
    else if (arrayResults[0][1] == arrayResults[1][1] && arrayResults[0][1] == arrayResults[2][1]) {
        pointsOut.textContent = "You won on lane 2!";
        rounds = 0;
    }
    else if (arrayResults[0][2] == arrayResults[1][2] && arrayResults[0][2] == arrayResults[2][2]) {
        pointsOut.textContent = "You won on lane 3!";
        rounds = 0;
    }
    else if (rounds == 3) {
        pointsOut.textContent = "You lost, try again!";
        rounds = 0;
    }
});

function updatePlay() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arrayResults[i][j] = Math.floor(Math.random() * 4);
            let present = presentInRow(i, j, arrayResults[i][j]);
            while (present == true) {
                arrayResults[i][j] = Math.floor(Math.random() * 4);
                present = presentInRow(i, j, arrayResults[i][j]);
            }
            let element = elementArray[i][j];
            element.style.backgroundImage = `url(${fruitChoice(arrayResults[i][j])})`;
        }
    }
}

button.addEventListener('click', () => {
    rounds++;
    pointsOut.textContent = rounds + " round out of 3";
    updatePlay();
    if (arrayResults[0][0] == arrayResults[1][0] && arrayResults[0][0] == arrayResults[2][0]) {
        pointsOut.textContent = "You won on lane 1!";
        rounds = 0;
    }
    else if (arrayResults[0][1] == arrayResults[1][1] && arrayResults[0][1] == arrayResults[2][1]) {
        pointsOut.textContent = "You won on lane 2!";
        rounds = 0;
    }
    else if (arrayResults[0][2] == arrayResults[1][2] && arrayResults[0][2] == arrayResults[2][2]) {
        pointsOut.textContent = "You won on lane 3!";
        rounds = 0;
    }
    else if (rounds == 3) {
        pointsOut.textContent = "You lost, try again!";
        rounds = 0;
    }
});

function presentInRow(row, column, num) {
    for (let f = 0; f < column; f++) {
        if (arrayResults[row][f] == num) {
            return true;
        }
    }
    return false;
}