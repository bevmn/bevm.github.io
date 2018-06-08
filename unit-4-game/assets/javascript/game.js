var random = Math.floor(Math.random()*102+19);

$("#numberToGet").text(random);

var amethyst = Math.floor(Math.random()*12+1);
var emerald = Math.floor(Math.random()*12+1);
var sapphire = Math.floor(Math.random()*12+1);
var ruby = Math.floor(Math.random()*12+1);

var userTotal= 0;
var wins = 0;
var losses = 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#numberToGet").text(random);
    var amethyst = Math.floor(Math.random()*12+1);
    var emerald = Math.floor(Math.random()*12+1);
    var sappire = Math.floor(Math.random()*12+1);
    var ruby = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#score").text(userTotal);
}

function winner() {
    alert("You Won!!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}

$("#image1").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
})
});


// First each crystal will be given the class ".crystal-image".
  //This will allow the CSS to take effect.
  imageCrystal.addClass ("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  crystals.append(imageCrystal);


// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() 
 

//  Click Events // 

$("#amethyst").click(amethyst);
$("#emerald").click(emerald);
$("#sapphire").click(sapphire);
$("#ruby").click(ruby);
$("#reset").click(game.reset);
$("#start").click(game.start);

  
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter); 

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }







//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



// math Random  19 - 120; THis is for the score

//function getRndInteger(min, max) {
  //  Math.floor(Math.random() * (120 - 19) ) + min
 //}
// var targetNumber = 53;

//$("#number-to-guess").text(targetNumber);

//var crystals = $("#crystals");

//var counter = 0;

// Create 4 crystal.

// We begin by expanding our array to include four options.
//var numberOptions = [10, 5, 3, 7];

// For each iteration, we will create an imageCrystal

//var imageCrystal = $("<img>");


// Next we create a for loop to create crystals for every numberOption.
//for (var i = 0; i < numberOptions.length; i++) 


// jewel buttons and hidden integers 1 - 12; This is for the jewel value

//function getRndInteger(min, max) {
  //  Math.floor(Math.random() * (12 - 1 + 1) ) + min
 //};

// First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass ("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  crystals.append(imageCrystal);


// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function() 
 

//  Click Events // 

$("#amethyst").click(amethyst);
$("#emerald").click(emerald);
$("#sapphire").click(sapphire);
$("#ruby").click(ruby);
$("#reset").click(game.reset);
$("#start").click(game.start);

  
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter); {

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }







