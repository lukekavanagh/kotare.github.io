var Board = function( selector ) {

  var $elem = $( selector );
  
  function initialize() {
   
  };

  initialize();
};


function Bubble (x,y){
	this.header ="this is the header";
	this.content ="this is the content";
	this.xOffset=x;
	this.yOffset=y;
};

$(function(){
	new Board('#board');
	$("#board").on("click", function(e){
		renderBubble(new Bubble(e.pageY, e.pageX));
	});
});

$('#board').on("click", '.bubble', function(e) {
  e.stopImmediatePropagation();
});

function renderBubble(bubble) {
	$('#board').append(
		"<div class='bubble'>" +
		"<div class='header'><a contenteditable='false'>X</a></div>" +
		"<div class='content' contentEditable='true'></div>"+"<div class='footer'></div>"+"</div>")

	$(".bubble:last ").offset({top: bubble.xOffset, left: bubble.yOffset});
	 $('.bubble:last').draggable({
      handle: ".header"
    });
    $('.bubble:last').resizable();
    $('.bubble:last .header').append(bubble.header);
    $('.bubble:last .content').append(bubble.content);

    $(function(){
      $('a')
      //.button()
      .click(function(event){
        event.stopImmediatePropagation();
        $(this).parent().parent().remove();
      });
  });

// var div = $(".bubble");
// var span = $("span");

// span.width(Math.sqrt(span.width() * span.height()));
// span.width(Math.sqrt(span.width() * span.height()));
// div.width(Math.sqrt(2) * span.width());
// div.height(div.width());

};