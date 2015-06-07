describe("ApiFacade", function() {

  describe("postBoard()", function() {
    it("returns a new board", function(){
      var newBoard = ApiFacade.postBoard();
      expect(newBoard._id.length).toBeGreaterThan(6);
      expect(newBoard.bubbles.length).toEqual(0);
      expect(newBoard.connections.length).toEqual(0);
    })
  })
  describe("getboard()", function(){
    it("returns a bloody great board object", function(){
      var board = ApiFacade.getBoard();
      expect(board.message.length).toBeGreaterThan(6);
    })
  })
});