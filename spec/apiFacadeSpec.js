describe("api Facade", function() {

  describe("get board", function(){
    it("returns a bloody great board object", function(){
      var board = ApiFacade.getBoard();
      expect(board.message.length).toBeGreaterThan(6);
    })
  })
});