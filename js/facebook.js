// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function getAccessToken() {
  console.log("getAccesstoken()");
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log(response);
      // Logged into CRUDbrain and Facebook.
      return response.authResponse.accessToken;
      console.log(response.authResponse);
    } 

    return null;      
  });
}

