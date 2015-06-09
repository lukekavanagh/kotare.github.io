 $(document).ready(function(){
 $('.stopButton').on( "click", function() {
  console.log( "clicked stop button");
  // $('#Drone').muted =true;
  var music = document.getElementById("Drone");
  music.muted = true;
  // document.getElementById('Drone').Stop();
  });
});
