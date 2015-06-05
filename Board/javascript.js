$(document).ready(function() {
   var Board = function( selector ) {
    var $elem = $( selector );
    function initialize() {
    };
    initialize();
  };

  function Bubble (x,y, randId){
  	this.content ="this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentththis is the content this is the content this is the content this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content";
  	this.xOffset=x;
  	this.yOffset=y;
    this.id=randId;
  };

  $(function(){
  	new Board('#board');
  	$("#board").on("click", function(e){
      var randId= Math.floor((Math.random() * 10000)+1);
  		renderBubble(new Bubble(e.pageY, e.pageX, randId));
  	});
  });

  $('#board').on("click", '.bubble', function(e) {
    e.stopImmediatePropagation();
  });

  function renderBubble(bubble) {
  	$('#board').append(
  		"<div class='bubble' id=" + bubble.id + ">" +
  		"<div class='header'> <a class='delete' contenteditable='false'>X </a><a class='link'>+</a> </div>" +
  		"<div class='content' contentEditable='true'></div>"+
      "<div class='footer'>" +
      "<a class='scrollUp' href='#'> &#9650 </a>" +
      "<a class='scrollDown' href='#'> &#9660 </a>" +
      "</div></div>")

  	$(".bubble:last ").offset({top: bubble.xOffset, left: bubble.yOffset});
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
});