// AM: You only need one $(document).ready() in your application.
// AM: Everything that should be run on page load should be contained in it.
$(document).ready(function() {
$(".button1").on("click", function() {
  $("#myimage1").toggle('card');
    $(this).css('background', 'blue');
    console.log("blue");
  });
})  ;

// AM: One BIG opportunity for refactoring is to create a single click listener that takes care of all your card checks.
// AM: Rather than having multiple listeners that target each tile, you can just use one that watches all elements with a class "button" (or something along those lines).
// AM: This would require that color information be attached to each button somehow. Could be in an HTML attribute, or maybe you can access a CSS property after colors have been assigned.
$(document).ready(function() {
  $(".button2").on("click", function() {
    $("#myimage2").toggle('card');
    $(this).css('background', 'red');
    console.log("red");
  });
});

$(document).ready(function() {
  $(".button3").on("click", function() {
    $("#myimage3").toggle('card');
    $(this).css('background', 'yellow');
    // AM: I would not include test console.log statements on the master branch of your project submission (both in-class and IRL!).
    // AM: If you want to preserve these (or commented-out code), create and store them in a separate branch.
    console.log("yellow");
  });
});

$(document).ready(function() {
  $(".button4").on("click", function() {
    $("#myimage4").toggle('card');
    $(this).css('background', 'green');
    console.log("green");
  });
});

$(document).ready(function() {
  $(".button5").on("click", function() {
    $("#myimage5").toggle('card');
    $(this).css('background', 'purple');
    console.log("purple");
  });
});

$(document).ready(function() {
  $(".button6").on("click", function() {
    $("#myimage6").toggle('card');
    $(this).css('background', 'aqua');
    console.log("aqua");
  });
});

$(document).ready(function() {
  $(".button7").on("click", function() {
    $("#myimage7").toggle('card');
    $(this).css('background', 'pink');
    console.log("pink");
  });
});

$(document).ready(function() {
  $(".button8").on("click", function() {
    $("#myimage8").toggle('card');
    $(this).css('background', 'orange');
    console.log("orange");
  });
});

var button9 = $(document).ready(function() {
$(".button9").on("click", function() {
    $("#myimage9").toggle('card');
    $(this).css('background', 'blue');
    console.log("blue");
  });
});

$(document).ready(function() {
  $(".button10").on("click", function() {
    $("#myimage10").toggle('card');
    $(this).css('background', 'red');
    console.log("red");
  });
});

$(document).ready(function() {
  $(".button11").on("click", function() {
    $("#myimage11").toggle('card');
    $(this).css('background', 'yellow');
    console.log("yellow");
  });
});

$(document).ready(function() {
  $(".button12").on("click", function() {
    $("#myimage12").toggle('card');
    $(this).css('background', 'green');
    console.log("green");
  });
});

$(document).ready(function() {
  $(".button13").on("click", function() {
    $("#myimage13").toggle('card');
    $(this).css('background', 'purple');
    console.log("purple");
  });
});

$(document).ready(function() {
  $(".button14").on("click", function() {
    $("#myimage14").toggle('card');
    $(this).css('background', 'aqua');
    console.log("aqua");
  });
});

$(document).ready(function() {
  $(".button15").on("click", function() {
    $("#myimage15").toggle('card');
    $(this).css('background', 'pink');
    console.log("pink");
  });
});

$(document).ready(function() {
  $(".button16").on("click", function() {
    $("#myimage16").toggle('card');
    $(this).css('background', 'orange');
    console.log("orange");
  });
});

// AM: It looks like you have a good understanding of event listeners, but would have liked to see some game logic.
// AM: Looks like you started to work on that below. Some things to think about...
// AM: What exactly do you need to compare in order to determine if two cards are a match or not?
// AM: When should you check if two cards are a match? How can you make sure that the game is not checking for a match when it shouldn't be?
// AM: Let me know if you want to talk about any of this further.


// AM: Because none of the below code is included in your $(document).ready(), it will not be run upon page load.
// AM: It's likely that, because the DOM has not yet been loaded, the below code isn't able to select button1.
// AM: Also, if you're trying to select a class, make sure you include a period in your selector (i.e., $(".button1"))
if($("button1") == ('white')){
  alert("hello");
}

function matchCards(button1,button2){
if(button1 != button2) {
    alert("hello1");
}
}

// AM: Kudos on pseudo-coding. Should always approach a problem this way.
//PsudoCode For Matching Algorhythm

/*

if (button1's color us blue === button2's color is blue) {
  alert = Match!
function to fade away to white
} else {
  alert = Guess Again!
function to reset cards
}

*/
