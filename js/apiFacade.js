var ApiFacade = (function() {

  var BACKEND_BASE_URI = 'http://localhost:5000/api/v1';
  //var BACKEND_BASE_URI = 'http://crudbrain.herokuapp.com/api/v1';

  return {

		getBoard: function(boardId) {
      // this.response;
      $.ajax({
        async: false,
        url: BACKEND_BASE_URI + '/boards/' + boardId,
        // headers: {
        //   "Authorization": fbUser.access_token
        // },
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
      return this.response;
    },

    postBoard: function() {
      $.ajax({
        async: false,
        method: "POST",
        url: BACKEND_BASE_URI + '/boards',
        // headers: {
        //   "Authorization": fbUser.access_token
        // },
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
      var putBoard = JSON.stringify(data);
      $.ajax({
        async: true,
        contentType: 'application/json',
        data: putBoard,
        method: "PUT",
        url: BACKEND_BASE_URI + '/boards/' + data._id,
        // headers: {
        //   "Authorization": fbUser.access_token
        // },
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
