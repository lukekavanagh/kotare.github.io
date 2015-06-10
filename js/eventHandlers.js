function eventHandlers() {
  $('#logoutButton').click(function (e) {
    e.stopImmediatePropagation();

    FB.logout(function (response) {
      fbUser = null;
      window.location = '/';
    });
  });


 $('.stopButton').on( "click", function() {
    var playing = true;
    var music = document.getElementById("Drone");
    if(playing == true){
      music.muted = true;
    };
  });

  $('.playButton').on( "click", function() {
    var playing = false;
    var music = document.getElementById("Drone");
    if(playing == false){
      music.muted = false;
    };
  });

  $("#board").on("click", renderInputOptions);

  $('#board').on("click", '.bubble', function(e) {
    e.stopImmediatePropagation();
  });

  $("#trashcan").droppable({
    drop: function(e, ui){
      $(ui.draggable).remove();
      board.removeBubble(ui.draggable.context.id);
    }
  });

  $("#board").on("click", renderInputOptions);

  $('#board').on("click", '.bubble', function(e) {
    e.stopImmediatePropagation();
  });

  $("#trashcan").droppable({
    drop: function(e, ui){
      $(ui.draggable).remove();
      board.removeBubble(ui.draggable.context.id);
    }
  });

  // Persist position changes
  $('.bubble:last').draggable({
    handle: ".header",
    stop: function (e, ui) {
      board.updateBubble(e, ui);
    }
  });

  // Persist size changes
  $('.bubble:last').resizable({
    stop: function (e, ui) {
      board.updateBubble (e, ui);
    }
  });
  // Persist content changes
  $('.bubble:last .content').on('blur', function (e) {
    board.updateContent($(e.target).parent());
  });

  $('.header').click( function(e) {
    $(window).resize();
  })

  $('.link').click( function(e) {
    e.stopImmediatePropagation();
    var clickedBubble = $(this).parent().parent().attr('id');
    console.log("From: ", board.from(), " last: ", board.last(), " clicked: ", clickedBubble);

    if (board.connectionExists(clickedBubble, board.last())) {
      console.log("Board exists...");
      board.removeConnection(clickedBubble, board.last());
      console.log("connection broken");
    }

    else if (board.from()) {
      console.log("Complete connection...");
      board.completeConnection(clickedBubble);
    }

    else {
      console.log("Starting connection...");
      board.startConnection(clickedBubble);
      console.log("board.fromId: ", board.from());
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

  $textOption.on('click', function(e){
    console.log("TEXT");
    e.stopImmediatePropagation();
    $inputOptionBox.hide()
    e.inputType = "text";
    createBubble(e);
  });

  $imageOption.on('click', function(e) {
    e.stopImmediatePropagation();
    $inputOptionBox.hide()
    e.inputType = "image";
    showAddUrlForm(e)
  })

  $photoOption.on('click', function(e) {
    e.stopImmediatePropagation()
    $inputOptionBox.hide()
  })

}
