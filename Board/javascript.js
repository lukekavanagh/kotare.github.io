$(document).ready(function() {
   var Board = function( selector ) {
    var $elem = $( selector );
    function initialize() {
    };
    initialize();
  };

  function Bubble (x,y, randId){
    this.bubbleId=randId;
    this.heading = "";
  	this.content ="this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentththis is the content this is the content this is the content this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content";
    this._id = "";
    this.size = {
  	  left: x,
  	  top: y
    };
    this.location = {
  	  left: x,
  	  top: y
    };
  };

  $(function(){
  	new Board('#board');
  	$("#board").on("click", function(e){
      var randId = guid();
  		renderBubble(new Bubble(e.pageY, e.pageX, randId));
  	});
  });

  $('#board').on("click", '.bubble', function(e) {
    e.stopImmediatePropagation();
  });

  function renderBubble(bubble) {
  	$('#board').append(
  		"<div class='bubble' id=" + bubble.bubbleId + ">" +
  		"<div class='header'> <a class='delete' contenteditable='false'>X </a><a class='link'> +</a> </div>" +
  		"<div class='content' contentEditable='true'></div>"+
      "<div class='footer'>" +
      "<a class='scrollUp' href='#'> &#9650 </a>" +
      "<a class='scrollDown' href='#'> &#9660 </a>" +
      "</div></div>")

  	$(".bubble:last ").offset({top: bubble.location.left, left: bubble.location.top});
  	$('.bubble:last').draggable({
      handle: ".header"
    });
    $('.bubble:last').resizable();
    $('.bubble:last .content').append(bubble.content);


    $(function(){
      $('.delete')
      //.button()
      .click(function(event){
        event.stopImmediatePropagation();
        $(this).parent().parent().remove();
      });
    });

    function addConnection(){
      linkingInProgress = false;
      var $firstBubble;
      var $secondBubble;

      $('.link').click( function(e) {
        e.stopImmediatePropagation();
        if (linkingInProgress){
          $secondBubble = $(this).parent().parent().attr('id');
          renderConnections($firstBubble, $secondBubble);
          linkingInProgress = false;
          console.log("Second bubble:" + $secondBubble);
          console.log("linking" + linkingInProgress);
        }
        else {
          $firstBubble = $(this).parent().parent().attr('id');
          linkingInProgress = true;
          console.log("First bubble:" + $firstBubble);
          console.log("linking" + linkingInProgress);
        };
      });
    };
    addConnection();

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
  };

  function renderConnections(firstBubbleId, secondBubbleId) {
    var mySVG = $('body').connect();
    mySVG.drawLine({
      left_node:'#' + firstBubbleId,
      right_node:'#' + secondBubbleId,
    });
    console.log (firstBubbleId);
    console.log('nodes: ' + left_node);
    console.log(right_node);
  };

});


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
