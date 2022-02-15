$(document).ready(function () {
  let gameBoard = initializeNewGameBoard();
  let id = {
    hitButton: $("#hit-button"),
    standButton: $("#stand-button"),
    newButton: $("#new-button"),
    dealerCards: $("#dealer-cards"),
    playerCards: $("#player-cards"),
    dealerScore: $("#dealer-score"),
    playerScore: $("#player-score"),
    gamesPlayed: $("#games-played"),
    gamesWon: $("#games-won"),
    gamesLost: $("#games-lost"),
    cardsLeft: $("#cards-left"),
    messageArea: $("#message-area"),
    timeOut: $("#time-out"),
  };

  // $("#deck-area").click(function(){
  //   var div = $(".deck-area");
  //   div.animate({width: '100px'}, "slow");
  //   // div.animate({left: '100px'}, "slow");
  // });

  //Hover effects
  $("#deck-area").hover(
    function () {
      $(this).css("transform", " scale(1.1)");
    },
    function () {
      $(this).css("transform", " scale(1)");
    }
  );

  alertNew(id);

  //Double click to make the message dissapear
  $("#message-area").dblclick(function () {
    $(this).hide();
  });

  id.hitButton.click(function () {
    hit(gameBoard, id);
  });

  //Promise with jQuery -- NEWROUND
  $("#new-button").on("click", function () {
    $("#dealer-cards").fadeIn(2500);
    $("#player-cards").fadeIn(2500);
    $("#time-out").hide(1000);
    $("#message-area").show(500);

    $("#new-button")
      .promise()
      .done(function () {
        newRound(gameBoard, id);
      });
  });

  //Promise with jQuery -- STAND
  $("#stand-button").on("click", function () {
    $("#new-card-dealer").fadeIn(2000);
    $("#time-out").show(2000);

    $("#stand-button")
      .promise()
      .done(function () {
        stand(gameBoard, id);
      });
  });

  //Promise with jQuery -- RESTART
  $("#time-out").on("click", function () {
    $("p").append(" Restart...");

    $(this).fadeIn().fadeOut(2500);
    $("#message-area").fadeIn().fadeOut(2500);
    $("#hit-button").fadeIn().fadeOut(2500);
    $("#new-button").fadeIn().fadeOut(2500);
    $("#stand-button").fadeIn().fadeOut(2500);
    $("#deck-area").fadeIn().fadeOut(2500);
    $("#dealer-cards").fadeIn().fadeOut(2500);
    $("#player-cards").fadeIn().fadeOut(2500);

    $("#time-out")
      .promise()
      .done(function () {
        timeOut(gameBoard, id);
      });
  });
});

// //Hover effects
// $("#dealer-score").hover(
//   function () {
//     $(this).css("font-size", "36px");
//   },
//   function () {
//     $(this).css("font-size", "16px");
//   }
// );

// $("#player-score").hover(
//   function () {
//     $(this).css("font-size", "36px");
//   },
//   function () {
//     $(this).css("font-size", "16px");
//   }
// );
