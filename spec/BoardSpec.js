describe("boardClick", function() {
  var board;

  beforeEach(function() {
    board = {
       _id: "",
      connections: [],
      bubbles: [],
    };
  });

  it("renders a bubble //test?" ) 

  it("adds a bubble to board.bubbles[]", function() {
    var e = {
      pageY : 88,
      pageX : 95
    }
    boardClick(e);

    expect(board.bubbles.length).toEqual(1);
  });

  
});
