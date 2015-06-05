var Board = function( selector ) {

  var $elem = $( selector );
  
  function initialize() {
   
  };

  initialize();
};


function Bubble (x,y){
	this.header ="this is the header";
	this.content ="this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentth this is the content this is the content this is the content this is the contentththis is the content this is the content this is the content this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content";
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
		"<div class='header'><a class='delete' contenteditable='false'>X</a></div>" +
		"<div class='content' contentEditable='true'></div>"+
    "<div class='footer'>" +
      "<a id='scrollUp' href='#'>up</a>" +
      "<a id='scrollDown' href='#'>down</a>" + 
    "</div>"
+"</div>")

	$(".bubble:last ").offset({top: bubble.xOffset, left: bubble.yOffset});
	 $('.bubble:last').draggable({
      handle: ".header"
    });
    $('.bubble:last').resizable();
    $('.bubble:last .header').append(bubble.header);
    $('.bubble:last .content').append(bubble.content);

    $(function(){
      $('.delete')
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




var scrolling = false;

// Wire up events for the 'scrollUp' link:
$("#scrollUp").bind("click", function(event) {
    event.preventDefault();
    // Animates the scrollTop property by the specified
      console.log("i have been clicked");
      console.log($(".content"));
    $(".content", this).scrollTop(-25);
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("up");
}).bind("mouseout", function(event) {
    scrolling = false;
});


$("#scrollDown").bind("click", function(event) {
    event.preventDefault();
    $(".content").animate({
        scrollTop: "+= 25px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("down");
}).bind("mouseout", function(event) {
    scrolling = false;
});

function scrollContent(direction) {
    var amount = (direction === "up" ? "-=1px" : "+=1px");
    $(".content").animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction);
        }
    });
}

};