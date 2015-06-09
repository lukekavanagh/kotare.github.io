var ApiFacade = (function() {

  // Development (Rich's laptop)
  //var BACKEND_BASE_URI = 'http://localhost:5000/api/v1';
  
  // Development (isolated kotare.github.io backend)
  //var BACKEND_BASE_URI = 'http://crudbrain.herokuapp.com/api/v1';

  // PRODUCTION
  var BACKEND_BASE_URI = 'http://crudbrain.herokuapp.com/api/v1';

  function getBoard (boardId, callback) {
    $.ajax({
      contentType: 'application/json',
      url: BACKEND_BASE_URI + '/boards/' + boardId,
      headers: {
        "Authentication": fbUser.access_token
      },
      success: function(data, textStatus, xhr){
        board = data;
        callback(data);
      },
      failure: function(data, textStatus, xhr){
        console.log("GET failed: ", textStatus);
      }
    });
  }

  return {

    retrieveBoard: function(callback) {
      $.ajax({
        contentType: 'application/json',
        method: "POST",
        url: BACKEND_BASE_URI + '/boards',
        headers: {
          "Authentication": fbUser.access_token
        },
        complete: function (xhr, textStatus) {
          if (xhr.status === 409) {
            getBoard(fbUser.id, callback);
          }
        },
        success: function (data, textStatus, xhr) {
          // No board found, new board created
          board = data;
          callback(data);
        },
        failure: function(res) {
          console.log("POST failed: ", textStatus);
        }
      })
    },


    putBoard: function(board, callback) {
      $.ajax({
        contentType: 'application/json',
        data: JSON.stringify(board),
        method: "PUT",
        url: BACKEND_BASE_URI + '/boards/' + fbUser.id,
        headers: {
          "Authentication": fbUser.access_token
        },
        success: function(res) {
          callback(res);
        },
        failure: function(res) {
          
        }
      })
    }
  };

})();
