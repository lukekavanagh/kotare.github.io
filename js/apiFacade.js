var ApiFacade = (function() {

  var BACKEND_BASE_URI = 'http://localhost:5000/api/v1';
  //var BACKEND_BASE_URI = 'http://crudbrain.herokuapp.com/api/v1';

  function getBoard (boardId) {
    $.ajax({
      async: false,
      url: BACKEND_BASE_URI + '/boards/' + boardId,
      headers: {
        "Authentication": fbUser.access_token
      },
      success: function(data, textStatus, xhr){
        board = data;
      },
      failure: function(data, textStatus, xhr){
        console.log("GET failed: ", textStatus);
      }
    });
  }

  return {

    retrieveBoard: function() {
      $.ajax({
        async: false,
        method: "POST",
        url: BACKEND_BASE_URI + '/boards',
        headers: {
          "Authentication": fbUser.access_token
        },
        complete: function (xhr, textStatus) {
          if (xhr.status === 409) {
            getBoard(fbUser.id);
          }
        },
        success: function (data, textStatus, xhr) {
          // No board found, new board created
          board = data;
        },
        failure: function(res) {
          console.log("FAILURE");
        }
      })
    },


    putBoard: function(data) {
      var putBoard = JSON.stringify(data);
      $.ajax({
        async: true,
        contentType: 'application/json',
        data: putBoard,
        method: "PUT",
        url: BACKEND_BASE_URI + '/boards/' + data._id,
        headers: {
          "Authentication": fbUser.access_token
        },
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
