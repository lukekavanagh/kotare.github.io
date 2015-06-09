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
  if ($('#inputOptionBox').length === 0) {
    var $inputOptionBox = $('<div id="inputOptionBox"></div>');
    var $textOption = $('<i id="text" class="fa fa-align-left"></i>');
    var $photoOption = $('<i id="photo" class="fa fa-camera"></i>');
    var $audioOption = $('<i id="audio" class="fa fa-microphone"></i>')
    var $videoOption = $('<i id="video" class="fa fa-video-camera"></i>')
    var $drawOption = $('<i id="draw" class="fa fa-pencil"></i>')
    $inputOptionBox.append($textOption);
    $inputOptionBox.append($photoOption);
    $inputOptionBox.append($audioOption);
    $inputOptionBox.append($videoOption);
    $inputOptionBox.append($drawOption);
    $('#board').append($inputOptionBox);
  } else {
    var $inputOptionBox = $('#inputOptionBox');
    var $textOption = $('#text');
    var $photoOption = $('#photo');
    var $audioOption = $('#audio')
    var $videoOption = $('#video')
    var $drawOption = $('#draw')
  }

  $inputOptionBox.show()
  $textOption.on('click', function(e){
    e.stopImmediatePropagation()
    $inputOptionBox.hide()
    createBubble(e)
  });

  var xPos = e.pageY + 'px';
  var yPos = e.pageX + 'px';
  $('#inputOptionBox').css({
    'top': xPos,
    'left': yPos
  })
  var options = [
    $textOption,
    $photoOption,
    $audioOption,
    $videoOption,
    $drawOption
  ]
  animateOptions(options);
}

function animateOptions(options) {
  console.log('options in animateOptions: ', options);
  resetOptionPosition(options)
  var iconSize = 16 // px
  // http://www.mathopenref.com/coordpolycalc.html for cartesian polygon coords below
  var finalCentrePositions = [
    [0,   -20],
    [19,  -6 ],
    [12,  16 ],
    [-12, 16 ],
    [-19, -6 ]
  ]
  var finalTopLeftCoords = finalCentrePositions.map(function(el) {
    return el.map(function(coord) {
      return coord - iconSize/2
    });
  });
  for (var i = 0; i < finalTopLeftCoords.length; i++) {
    options[i].animate({
      'left': finalTopLeftCoords[i][1],
      'top': finalTopLeftCoords[i][0]
    }, 400)
  }
  console.log(finalTopLeftCoords)
}

function resetOptionPosition(options) {
  console.log(options)
  for (var i = 0; i < options.length; i++) {
    options[i].css({
      'top': 0,
      'left': 0
    })
  };
}