$(document).ready(function() {
  console.log("jquery is working");
  var spaceBar = 0;
  var enter = 0;
  var play = true;
  $(document).on('keyup', function(e) {
    if(e.which === 32 && play === true) {
        console.log('You pressed the space bar!');
        $(".to-move").animate({left: "+=19px"},
        "fast");
        spaceBar++;
    }
    if(spaceBar === 48) {
      alert("Smiley-Face Wins");
      play = false;
      return false;
    }
    if(e.which === 13 && play === true) {
        console.log('You pressed enter!');
        $(".too-move").animate({left: "+=19px"},
        "fast");
        enter++;
    }
    if(enter === 48) {
      alert("Dancing-Lady Wins");
      play = false;
      return false;
    }
  });
  function fadey(select, duration) {
    $(select).fadeOut(duration);
    $(select).fadeIn(duration);
  }

  $(".resetBtn").on("click", function() {
    play = true;
    spaceBar = 0;
    enter = 0;
    $(".to-move").animate({left: "0px"});
    $(".too-move").animate({left: "0px"});
    fadey('.divy', 100);
    fadey('.divyB', 100);
  });
});
