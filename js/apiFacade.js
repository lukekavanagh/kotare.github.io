var ApiFacade = (function () {

	return {

		getBoard: function() {
      // this.response;
      $.ajax({
        async: false,
        url: "https://crudbrain.herokuapp.com/api/v1/boards",
        // headers:
        success: function(res){
          this.response = res;
        }.bind(this),
        failure: function(res){
          console.log("Ajax get board failed")
          console.log(res)
        }.bind(this)
      })
      return this.response;
		},

		// postBoard: function() {
  //     $.ajax({
  //       method: "POST",
  //       url: "https://crudbrain.herokuapp.com/api/v1/boards",
  //       // headers:
  //       success: function(res){
  //         console.log(res);
  //       },
  //       failure: function(res){
  //         console.log(res);
  //         console.log("getfailure");
  //       }
  //     })
		// },

		putBoard: function() {
      $.ajax({
        url: "https://crudbrain.herokuapp.com/api/v1/boards",
        // headers:
        success: function(res){
          console.log(res);
        },
        failure: function(res){
          console.log(res);
          console.log("getfailure");
        }
      })
		}


	};


})();