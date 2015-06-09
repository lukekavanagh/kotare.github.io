// var errorCallback = function(e) {
//   console.log('Reeeejected!', e);
// };

// // Not showing vendor prefixes.
// navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
//   var video = document.querySelector('video');
//   video.src = window.URL.createObjectURL(localMediaStream);

//   // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
//   // See crbug.com/110938.
//   video.onloadedmetadata = function(e) {
//     // Ready to go. Do some stuff.
//     console.log('user get media gives us: ', e);
//   };
// }, errorCallback);

function picMain() {
  $("#photoOption").on("change",gotPic);
  // $("#yourimage").load(getSwatches);
  desiredWidth = window.innerWidth;
  if(!("url" in window) && ("webkitURL" in window)) {
    window.URL = window.webkitURL;   
  }
}

function gotPic(event) {
  console.log('got Pic');
  if( event.target.files.length == 1 && 
      event.target.files[0].type.indexOf("image/") == 0) {
    $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
  }
}