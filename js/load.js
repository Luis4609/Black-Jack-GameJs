$(document).ready(function () {

  //Promise with jQuery -- LOADNEWGAME
  $("#loadNewGame").on("click", function () {
    $(".container").css("display: none");
    // $(".loader").css("display: flex");
    $("#loader").fadeIn(100).fadeOut(35000);

    console.log(`%cLOADING:`, "color:red; font-weight: bold");

    setTimeout(() => {
      $("#loadNewGame")
        .promise()
        .done(function () {
          window.location.assign("../game.html");
        });
    }, 2500);
  });
});