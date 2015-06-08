$(document).ready(function(){
	facebookSdk();
	$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
});

function facebookSdk() {
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
	      document.getElementById('boardLink').innerHTML = 'Login with Facebook';
	    } else {
	      window.location = "/views/board.html";
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