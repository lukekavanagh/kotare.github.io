// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function getUser() {
  console.log("getAccesstoken()");
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // Logged into CRUDbrain and Facebook.
      return {
        id: response.authResponse.userID,
        access_token: response.authResponse.accessToken
      }
    } else { 
      return null;      
    }
  });
}

