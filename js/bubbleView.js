function renderBubble(bubble) {
  $('#board').append(
    "<div class='bubble' id=" + bubble.bubbleId + "> <div class='header'>" +
    "<a class='link'><img class='link-image' src='../images/add_link.png'></a></div>" +
    "<div class='content' contentEditable='true'></div>"+
    "<div class='footer'>" +
    "<a class='scrollUp' href='#'> &#9650 </a>" +
    "<a class='scrollDown' href='#'> &#9660 </a>" +
    "</div></div>")

  $(".bubble:last ").offset({
    top: bubble.location.left,
    left: bubble.location.top
  });
  $('.bubble:last').draggable({
    handle: ".header"
  });
  $('.bubble:last').resizable();
  $('.bubble:last .content').append(bubble.content);

  $('.header').click( function(e) {
    $(window).resize();
  })

  $('.link').click( function(e) {
    e.stopImmediatePropagation();
    if (!connectionInProgress){
      currentConnection.startBubbleId = $(this).parent().parent().attr('id');
      connectionInProgress = true;
    } else if(connectionRemover(currentConnection.startBubbleId, $(this).parent().parent().attr('id')) == "removed"){
      console.log("connection broken");
      connectionInProgress = false;
    } else {
      currentConnection.endBubbleId = $(this).parent().parent().attr('id');
      renderConnections(currentConnection.startBubbleId, currentConnection.endBubbleId, document.mySVG);
      connectionInProgress = false;
      board.connections.push({
        startBubbleId: currentConnection.startBubbleId,
        endBubbleId: currentConnection.endBubbleId
      });
      currentConnection.startBubbleId = "";
      currentConnection.endBubbleId = "";
    }
  });

  $(".scrollUp").bind("click", function(event) {
    event.preventDefault();
    var currentBubbleId = ($(this).parent().parent().attr('id'));
    var scrollHeight = $("#" + currentBubbleId).find(".content").scrollTop();
    $("#" + currentBubbleId).find(".content").scrollTop(scrollHeight - 25);
  })

  $(".scrollDown").bind("click", function(event) {
    event.preventDefault();
    var currentBubbleId = ($(this).parent().parent().attr('id'));
    var scrollHeight = $("#" + currentBubbleId).find(".content").scrollTop();
    $("#" + currentBubbleId).find(".content").scrollTop(scrollHeight + 25);
  });
}

function renderInputOptions(e) {
  if (!$inputOptionBox) {
    var $inputOptionBox = $('<div id="inputOptionBox"></div>');
    $inputOptionBox.append($('<i id="text" class="fa fa-align-left"></i>'));
    $inputOptionBox.append($('<i id="photo" class="fa fa-camera"></i>'));
    $inputOptionBox.append($('<i id="audio" class="fa fa-microphone"></i>'));
    $inputOptionBox.append($('<i id="video" class="fa fa-video-camera"></i>'));
    $inputOptionBox.append($('<i id="draw" class="fa fa-pencil"></i>'));
  }
  var xPos = e.pageY + 'px';
  var yPos = e.pageX + 'px';
  console.log(xPos);
  console.log(yPos);
  $inputOptionBox.css({
    'top': xPos,
    'left': yPos
  })
  console.log($inputOptionBox)
  console.log($('.board'))
  $('#board').append($inputOptionBox);
}