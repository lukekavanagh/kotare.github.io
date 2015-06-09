$(window).load(function () {
  $('#Drone').trigger('play');

  var InfiniteLoop = document.getElementById("Drone");
  InfiniteLoop.loop = true;

  var playing = true;

  $('a#button').click(function() {
      $(this).toggleClass("down");

      if (playing == false) {
          document.getElementById('Drone').play();
          playing = true;
          $(this).text("stop sound");

      } else {
        document.getElementById('Drone').pause();
        playing = false;
        $(this).text("restart sound");
      }
  });
});





