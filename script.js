$(function(){
$("#aboutMe").hide()
  $("#about").on("click", function() {
    $(".row").fadeToggle(500, function() {
      $("#aboutMe").fadeIn(500);

    });

  });
  $("#aboutMe").on("click", function(){
    $("#aboutMe").fadeToggle(300,function(){
      $(".row").fadeToggle(500);
    });

  });

  $("#blog").on("click", function(){
    window.location.href= "http://anthonyschwartz.ghost.io/"
  })
//add click handler for #aboutMe fade out about me fade in row
});
