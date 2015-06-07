describe("api Facade", function() {

  describe("get board", function(){
    it("returns a bloody great board object", function(){
      // var board = ApiFacade.getBoard();
      // var board = ApiFacade.response;
      // console.log(board);
      expect(ApiFacade.getBoard().message.length).toBeGreaterThan(6);
    })
  })
});