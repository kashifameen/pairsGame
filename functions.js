document.addEventListener('DOMContentLoaded', (e) => {
    const squares = Array.from(document.querySelectorAll('#gameBoard .tile'))
    const playerDisplay = document.querySelector('#player')
    gameIsRunning = true;
    let playerOne = "O";
    let playerTwo = "X";
    let currentPlayer = playerOne;
    let gameState = ["", "", "", "", "", "", "", "", ""];
    squares.forEach(square => {
        square.addEventListener('click', clickTile,{once:true})
    })
    function clickTile(e){
        const id = e.target.getAttribute('data-index');
        console.log(id)
        console.log(gameState)
        if(gameState[id] === "") {
            gameState[id] = currentPlayer;
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        }
        console.log(gameState)
        if (currentPlayer === playerOne) {
            tile.innerHTML +=
            let tile = document.querySelector('.tile')
            tile.innerHTML += '<h1>' + 'O' + '</h1>'
            console.log(tile)

        } else {
           let stile = document.querySelector('.tile')
               stile.innerHTML += '<h1>' + 'X' + '</h1>'
        }

    }
})