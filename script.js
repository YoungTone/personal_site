$(function() {
  $("#aboutMe").hide();
  $("#gitHub").hide();
  $("#twitter").hide();
  $("#linkedin").hide();
  $("#tictactoe").hide();
  $("#aboutMeText").hide();

  $("#about").on("click", function() {
    $(".row").fadeToggle(500, function() {
      $("#aboutMe").fadeIn(500, function(){
        $("#aboutMeText").show();
        $('.tlt').textillate();
        $('.tlt').textillate({ in: { effect: 'pulse' }
      });
      });
    });
  });

  // $("#aboutMe").on("hover", function(){
  //   $("aboutMeText").fadein(500, function(){
  //     $('.tlt').textillate();
  //     $('.tlt').textillate({ in: { effect: 'pulse' }
  //   });
  //   });
  // });

  $("#aboutMe").on("click", function() {
    $("#aboutMe").fadeToggle(300, function() {
      $(".row").fadeToggle(500);
    });
  });

  //Contact fades
  $("#links").on("click", function() {
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
  //tictactoe Link
$("#tictactoe").on("click", function() {
  window.location.href = "tic-tac-toe/tictactoe.html";





});

$("#email").on("click", function(){
  window.location.href = "mailto:anthonyschwartzcode@gmail.com";
});




});
