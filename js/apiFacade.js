var ApiFacade = (function() {

  return {

    getBoard: function() {
      // this.response;
      $.ajax({
        async: false,
        url: "https://crudbrain.herokuapp.com/api/v1/boards",
        // headers:
        success: function(res) {
          this.response = res;
        }.bind(this),
        failure: function(res) {
          console.log("Ajax get board failed");
          console.log(res);
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