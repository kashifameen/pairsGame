let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", playGame);
//ash says we can use this as a global object
let gameState = ["", "", "", "", "", "", "", "", ""];
let playerOne = 'O';
let playerTwo = 'x'
// function incrementCurrentPlayer(currentPlayer) {
//     currentPlayer++;
//     return currentPlayer;
}
function decideTurn(currentPlayer, playerMarker) {
    if (currentPlayer === playerOne);  {
        playerMarker = 'o'
    } else
    curren{
        playerMarker = 'x'
    }
    return playerMarker;
}
function addToScreen(tile, playerMarker) {
    tile.innerHTML = playerMarker;
}
function alterGameState(gameState, clicked, playerMarker) {
    if(gameState[clicked] == "") {
        gameState[clicked] = playerMarker;
        return true;
    } else {
        return false;
    }
}
function playGame() {
    // this determines turn order
    let currentPlayer = 1;
    // this variable holds alternating player symbols
    let playerMarker;
    const tiles = document.querySelectorAll('.tile');
    //this is a boolean to regulate whether a player can click a tile.
    let notClicked;
    startBtn.removeEventListener('click', playGame, false)
    startBtn.style.opacity = 0.5;
    tiles.forEach(function (tile) {
        tile.addEventListener('click', () => {
            //gets index value of tile from data attribute
            let clicked = tile.dataset.index;
            //assigns player marker based on currentPlayer value
            playerMarker = decideTurn(currentPlayer, playerMarker);
            let notClicked = alterGameState(gameState, clicked, playerMarker);
            //as long as tile has not been clicked,
            //will add mark to gameState array
            //and increment playerScore for next round
            if(notClicked == true) {
                addToScreen(tile, playerMarker);
                currentPlayer = !(currentPlayer);
                hereYouGoStoryFive();
            }
        })
    })
}
function hereYouGoStoryFive() {
    console.log(gameState);
}