var ApiFacade = (function() {

  return {

		getBoard: function(boardId) {
      // this.response;
      console.log("https://crudbrain.herokuapp.com/api/v1/boards/" + boardId);
      $.ajax({
        async: false,
        url: "https://crudbrain.herokuapp.com/api/v1/boards/" + boardId,
        // headers:
        success: function(data, textStatus, xhr){
          console.log('data', data)
          console.log('textStatus', textStatus)
          console.log('xhr', xhr)
          console.log('get got');
          this.response = {
            status: xhr.status,
            board: data
          }
        }.bind(this),
        failure: function(data, textStatus, xhr){
          console.log('data', data)
          console.log('textStatus', textStatus)
          console.log('xhr', xhr)
          console.log("Ajax get board failed")
          this.response = {
            status: xhr.status,
            err: '? find error in ajax response apiFacade.getBoard()'
          };
        }.bind(this)
      })
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
      return this.response;
    },


      putBoard: function(data) {
      $.ajax({
        async: false,
        data: data,
        method: "PUT",
        url: "https://crudbrain.herokuapp.com/api/v1/boards",
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
