// declare values
//lines of code is clicker at beginning
//coffees is number of cups of coffee purchased
//dripCost is the cost for a cup of coffee at the beginning
//espressoCost is the cost for a doubleshot at beginning
//frenchCost is the cost for a french press at beginning
let linesOfCode = 0;
let coffees = 0;
let dripCost = 10;
let espresso = 100;
let french = 1000;
// var button = $(".dripCoffee");

//function coffeeClick controls the clicker increasing
//number allows it to change and not be static
//lines of code is increased by the number of clicks each counted as one
function coffeeClick(number) {
  linesOfCode = linesOfCode + number;
  document.getElementById("codeCounter").innerHTML = linesOfCode;
};

//#buyCoffee is called with a click function
$("#buyCoffee").on("click", function(){
  //coffeeCost is 10* coffees *1.1, and floor makes sure it doesn't increase in amounts less than 1
  let coffeeCost = Math.floor(10 * Math.pow(1.1, coffees));
  //if statement allowing purchasing of coffee
  if(linesOfCode >= coffeeCost){
  //coffees are purchased and added to display
    coffees = coffees + 1;
  //clicker is changed when coffeeCost is subtracted
    linesOfCode = (linesOfCode - coffeeCost);
  //Span is updated to reflect purchased coffees
    $('#drip').text(coffees);
  //
    // $('#codeCounter').innerHTML = linesOfCode;
  };
  //newCost is the new clicks required to purchase cups
  let newCost = Math.floor(10 * Math.pow(1.1, coffees));
  // $('dripCost').append(newCost);
  $('#dripCost').text(newCost);
  setInterval(function() {
    coffeeClick(coffees);
  }, 5000);
  // setInterval(function(){
  //   $(button).trigger("click");
  // }, 5000);
  
});
//sets the time interval for auto clicking
// window.setInterval(function() {
//   coffeeClick(coffees);
// }, 5000);







$("#buyEspresso").on("click", function(){
  //coffeeCost is 10* coffees *1.1, and floor makes sure it doesn't increase in amounts less than 1
  let espressoCost = Math.floor(100 * Math.pow(1.1, coffees));
  //if statement allowing purchasing of coffee
  if(linesOfCode >= espressoCost){
  //coffees are purchased and added to display
    coffees = coffees + 1;
  //clicker is changed when coffeeCost is subtracted
    linesOfCode = (linesOfCode - espressoCost);
  //Span is updated to reflect purchased coffees
    $('#espresso').text(coffees);
  //
    // $('#codeCounter').innerHTML = linesOfCode;
  };
  //newCost is the new clicks required to purchase cups
  let newCost = Math.floor(100 * Math.pow(1.1, coffees));
  // $('dripCost').append(newCost);
  $('#espressoCost').text(newCost);
  setInterval(function() {
    coffeeClick(coffees);
  }, 1000);
  
});
//sets the time interval for auto clicking
// window.setInterval(function() {
//   coffeeClick(coffees);
// }, 1000);

$("#buyFrenchPress").on("click", function(){
  //coffeeCost is 10* coffees *1.1, and floor makes sure it doesn't increase in amounts less than 1
  let frenchCost = Math.floor(1000 * Math.pow(1.1, coffees));
  //if statement allowing purchasing of coffee
  if(linesOfCode >= frenchCost){
  //coffees are purchased and added to display
    coffees = coffees + 1;
  //clicker is changed when coffeeCost is subtracted
    linesOfCode = (linesOfCode - frenchCost);
  //Span is updated to reflect purchased coffees
    $('#frenchPress').text(coffees);
  //
    // $('#codeCounter').innerHTML = linesOfCode;
  };
  //newCost is the new clicks required to purchase cups
  let newCost = Math.floor(1000 * Math.pow(1.1, coffees));
  // $('dripCost').append(newCost);
  $('#frenchCost').text(newCost);
  setInterval(function() {
    coffeeClick(coffees);
  }, 500);
  
});