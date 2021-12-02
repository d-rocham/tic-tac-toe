const Gameboard = (() => {
    /* Gameboard object will only handle board rendering */

    //Array of cells
    let board = Array.from(document.querySelectorAll(".board__cell"));

    board.forEach(cell => {
        document.addEventListener("onclick", markCell(pageController.currentPlayer), once) //TODO: Check if utilization of "once" option is correct. It doesn't seem to. Check MDN
    })

    //Remove every X or O from the  board
    const resetBoard = () => {
        const targetClasses = ["x-cell, o-cell"];
        board.forEach(cell => cell.classList.remove(...targetClasses));
    }

    //Render an X or O
    const markCell = (marktoRender) => { //TODO:
        //TODO: Render X or O on cell
        //TODO: Deactivate cell (remove hability to shadow an X or O, deactivate :hover)
        //TODO: If event listener is set to option: once, then deactivating the cell through removing a class might not be necessary

    }

    return { board, resetBoard, markCell }
})();

const Player = (name) => {
    /* Player objects will keep track of each player's marks */

    //TODO: Is this really necessary? Is there maybe an easier way to do this?

    //Array of checked cells
    let playerCells = [];

    //Add cell to player's playerCells array
    const addCell = (cell) => {
        playerCells.push(cell);
    }

    //Reset checked cells to 0
    const resetCells = () => {
        while (playerCells.length != 0) {
            playerCells.pop
        }
    }

    return { name, addCell, resetCells }
}

const pageController = ((registration_container, game_container, modal_container) => {
    let players = [];

    const toggleBoard = () => {
        //TODO:
    }

    const toggleModal = () => {
        //TODO:
    }

    const registerPlayer = () => {
        //TODO:
    }

    const changeTurn = () => {
        //TODO:
    }

    const checkResult = () => {
        //TODO:
    }

    let currentPlayer = "john"; //TODO: This is provisional. 

    return { changeTurn, currentPlayer } //TODO: Complete object

})(document.querySelector(".start-game-container"), document.querySelector(".game-container"), document.querySelector(".modal"));


