var fbUser;

$(function() {

  $('#fbButton').click(function (e) {
    e.stopImmediatePropagation();

    if (!fbUser) {
      FB.login(function (response) {
        setUser(response);
        $(e.target).toggleClass('logged-in');
      }, {
        scope: 'public_profile,email'
      });  
    } else {
      FB.logout(function (response) {
        $(e.target).toggleClass('logged-in');
        fbUser = null;
      });
    }
  });

});

function setUser(response) {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {

      // Logged into CRUDbrain and Facebook.
      fbUser = {
        id: response.authResponse.userID,
        access_token: response.authResponse.accessToken
      };

    }
  });
}

