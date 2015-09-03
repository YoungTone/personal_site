$(function() {
  $("#aboutMe").hide();
  $("#gitHub").hide();
  $("#twitter").hide();
  $("#linkedin").hide();
  $("#tictactoe").hide();

  $("#about").on("click", function() {
    $(".row").fadeToggle(500, function() {
      $("#aboutMe").fadeIn(500);
    });
  });

  $("#aboutMe").on("click", function() {
    $("#aboutMe").fadeToggle(300, function() {
      $(".row").fadeToggle(500);
    });
  });

  //Contact fades
  $("#contact").on("click", function() {
    $("#gitHub").fadeToggle(500, function() {});
    $("#twitter").fadeToggle(500, function() {});
    $("#linkedin").fadeToggle(500, function() {});
  });
  //Project fades

  $("#projects").on("click", function() {
    $("#tictactoe").fadeToggle(500, function() {});


  });


  //Blog Link
  $("#blog").on("click", function() {
    window.location.href = "http://anthonyschwartz.ghost.io/";
  });
  //gitHub Link
  $("#gitHub").on("click", function() {
    window.location.href = "https://github.com/YoungTone";
  });
  //twitter Link
  $("#twitter").on("click", function() {
    window.location.href = "https://twitter.com/anthonyschwartz";
  });
  //linkedin Link
  $("#linkedin").on("click", function() {
    window.location.href = "https://www.linkedin.com/in/anthonyschwartz";
  });
  //add click handler for #aboutMe fade out about me fade in row
});
$("#tictactoe").on("click", function() {
  window.location.href = "tic-tac-toe/tictactoe.html";
});
