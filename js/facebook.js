var fbUser;

$(function() {

  $('#boardLink').click(function (e) {
    e.stopImmediatePropagation();

    if (!fbUser) {
      FB.login(function (response) {
        setUser(response);
        if (fbUser.access_token) {
          window.location = "/views/board.html";
        }
      }, {
        scope: 'public_profile,email'
      });  
    }
  });

  $('#logoutButton').click(function (e) {
    e.stopImmediatePropagation();

    FB.logout(function (response) {
      fbUser = null;
      window.location = '/';
    });
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

