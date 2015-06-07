// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function getAccessToken() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // Logged into CRUDbrain and Facebook.
      return response.authResponse.accessToken;
    } 

    return null;      
  });
}

