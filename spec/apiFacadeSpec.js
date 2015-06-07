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
    it("returns statusCode = 200", function(){
      var boardId = "kljafds987ahu"
      var response = ApiFacade.getBoard(boardId);
      expect(response.status).toEqual(200);
    })
    it("returns bloody great board object")
  })
});