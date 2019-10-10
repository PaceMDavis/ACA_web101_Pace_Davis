// find location of click and add x or o
// determine player 1 or player2
// keep score
// find a winner via 3 in a row



console.log('hey app.js here')
// name all the boxes with ids and use let to name them box1-9
let previousGamePiece = null
let box1 = document.querySelector

function addGamePiece(selectedElement) {
  //create new element
  let newElement = document.createElement('h1')
  if (previousGamePiece === 'x') {
    // add text to element
    newElement.innerHTML = 'o'
    // set previousGamePiece
    previousGamePiece = 'o'
  } else {
    // add text to element
    newElement.innerHTML = 'x'
    // set previousGamePiece
    previousGamePiece = 'x'
  }
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  checkForWinner()
  console.log('show clicked div', selectedElement)
}
//create new function to check for winner and create 
//all the possible combinations with if/else if/else to declare winner
// to add more than one thing to check for use &&
function checkForWinner(selectedElement) {
  if ((box1 === "x" && box2 === "x") && box3 === "x")
}
let playerName = "Player 1"

function 


