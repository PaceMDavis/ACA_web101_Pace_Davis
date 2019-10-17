// find location of click and add x or o
// determine player 1 or player2
// keep score
// find a winner via 3 in a row



// name all the boxes with ids and use let to name them box1-9
$(document).ready(function(){


  let previousGamePiece = 'x'
  let gameState = 0
  let count = 0;
  let box0 = document.getElementById('0')
  let box1 = document.getElementById('1')
  let box2 = document.getElementById('2')
  let box3 = document.getElementById('3')
  let box4 = document.getElementById('4')
  let box5 = document.getElementById('5')
  let box6 = document.getElementById('6')
  let box7 = document.getElementById('7')
  let box8 = document.getElementById('8')

  // function choosePlayerX () {
  //   // when player clicks button, add X inside button  Player 1 button and O inside player 2 button
  //   // 
  // }

  $('.cell').on('click', function() {
    if($(this).text() === '' && gameState === 0){
      $(this).text(previousGamePiece);
      count++;
      checkForWinner(count);
      if(previousGamePiece === 'x') {
        previousGamePiece = 'o';
      } else{
        previousGamePiece= 'x'
      }
  }
    startGame();

    function checkForWinner(tie) {
      if (tie === 9) {
        $('.endgame').text(`It's a tie! Try again`)
      }  
      // let threeInARow = document.getElementById()
      // if
      //   ($(box0).text() === previousGamePiece &&
      //   $(box1).text() === previousGamePiece &&
      //   $(box2).text() === previousGamePiece) {
      //     $('.endgame').text(`${previousGamePiece} Wins!`);
      //   gamestate = 1;
      //   } 
      if
        ($("#0").text() === previousGamePiece &&
        $("#1").text() === previousGamePiece &&
        $("#2").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#4").text() === previousGamePiece &&
        $("#5").text() === previousGamePiece &&
        $("#6").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#6").text() === previousGamePiece &&
        $("#7").text() === previousGamePiece &&
        $("#8").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#0").text() === previousGamePiece &&
        $("#3").text() === previousGamePiece &&
        $("#6").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#1").text() === previousGamePiece &&
        $("#4").text() === previousGamePiece &&
        $("#7").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#2").text() === previousGamePiece &&
        $("#5").text() === previousGamePiece &&
        $("#8").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#0").text() === previousGamePiece &&
        $("#4").text() === previousGamePiece &&
        $("#8").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        } else if
        ($("#2").text() === previousGamePiece &&
        $("#4").text() === previousGamePiece &&
        $("#6").text() === previousGamePiece) {
          $('.endgame').text(`Player ${previousGamePiece} Wins!`);
        gamestate = 1;
        }

    //   if ((box0 === previousGamePiece && box1 === previousGamePiece ) && box2 === previousGamePiece) {
    //     $('.endgame').text(`${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box3 === previousGamePiece && box4 === previousGamePiece ) && box5 === previousGamePiece) {
    //   $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box6 === previousGamePiece && box7 === previousGamePiece ) && box8 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box0 === previousGamePiece && box3 === previousGamePiece ) && box6 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box1 === previousGamePiece && box4 === previousGamePiece ) && box7 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box2 === previousGamePiece && box5 === previousGamePiece ) && box8 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box0 === previousGamePiece && box4 === previousGamePiece ) && box8 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    // } else if ((box6 === previousGamePiece && box4 === previousGamePiece ) && box2 === previousGamePiece) {
    //     $('.endgame').text(`Player ${previousGamePiece} Wins!`);
    //     gamestate = 1;
    //     console.log("I'm the winner", checkForWinner());
    // } 
    // // 
    }
  })


  // function addGamePiece(selectedElement) {
  //   //create new element
  //   let newElement = document.createElement('p')
  //   if (previousGamePiece === 'x') {
  //     // add text to element
  //     newElement.innerHTML = 'o'
  //     // set previousGamePiece
  //     previousGamePiece = 'o'
  //   } else {
  //     // add text to element
  //     newElement.innerHTML = 'x'
  //     // set previousGamePiece
  //     previousGamePiece = 'x'
  //   }
  //   // add element with text to selectedElement on page
  // // checkForWinner(selectedElement, id)
  //   selectedElement.appendChild(newElement)
  //   console.log('show clicked div', selectedElement)
  // }
  //create new function to check for winner and create 
  

  //all the possible combinations with if/else if/else to declare winner
  // to add more than one thing to check for use &&
  //get selectedElement value
  //Check sibling elements for matching values
  //Get selectedElement ID

  // function checkForWinner(selectedElement, id) {
  //   console.log('selectedElement', selectedElement)
  //   console.log('selectedElement', id)
  //   // if ((document.querySelector('#0') === "x" && box2 === "x") && box3 === "x")
  // }
  function startGame () {
    $('.startGame').click(function() {
      document.location.reload();
    })
    //goal: clear tic tac toe table
    // document.getElementById("0").innerHTML = "";
    // document.getelementsbyName('td').innerHTML = "";
    // document.querySelectorAll('td').map(i => i.innerHTML = '');
    
    // console.log('startGame')

  }

})

