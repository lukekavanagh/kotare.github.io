var ApiFacade = (function() {

  return {

		getBoard: function(boardId) {
      // this.response;
      $.ajax({
        async: false,
        url: "https://crudbrain.herokuapp.com/api/v1/boards/" + boardId,
        // headers:
        success: function(data, textStatus, xhr){
          this.response = {
            status: xhr.status,
            board: data
          }
        }.bind(this),
        failure: function(data, textStatus, xhr){
          this.response = {
            status: xhr.status,
            err: '? find error in ajax response apiFacade.getBoard()'
          };
        }.bind(this)
      });
      console.log("GET: ", this.response._id);
      return this.response;
    },

    postBoard: function() {
      $.ajax({
        async: false,
        method: "POST",
        url: "https://crudbrain.herokuapp.com/api/v1/boards",
        // headers:
        success: function(res) {
          this.response = res;
        }.bind(this),
        failure: function(res) {
          console.log("getfailure");
          console.log(res)
        }.bind(this)
      })
      console.log("POST: " + this.response._id);
      return this.response;
    },


    putBoard: function(data) {
      console.log("PUT: ", data._id);
      console.log("bubbles contains: ", data.bubbles.length);
      console.log("JSON: ", JSON.stringify(data));
      var putBoard = JSON.stringify(data);
      $.ajax({
        async: true,
        contentType: 'application/json',
        data: putBoard,
        method: "PUT",
        url: "https://crudbrain.herokuapp.com/api/v1/boards/" + data._id,
        // headers:
        success: function(res) {
          this.response = res
        }.bind(this),
        failure: function(res) {
          console.log(res);
          console.log("getfailure");
        }.bind(this)
      })
      return this.response
    }
  };

})();
