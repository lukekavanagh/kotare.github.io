var fbUser;

$(function() {
  fbAuth();

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

function fbAuth() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1642565209312684',
      cookie     : true,  // session cookies
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.2'
    });

    FB.getLoginStatus(function(response) {
      setUser(response);
      if (!fbUser) {
        window.location = "/";
      }
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
