$(document).ready(function(){
  toDayToNight();
  setTimeout(display,3000);
});

var d = new Date();
function toDayToNight(){
  if(d.getHours() >= 6 && d.getHours() < 17) {
    $('body').css({background: 'linear-gradient(#9acbd8, #ade0ee)'});

  }
  else {
    $('body').css({background: 'linear-gradient(#141123, #1d3c5c)'});
  }
}
function display() {
  $('#fbBtn').css({display: 'block'});
}

/* ============================= */
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            testAPI();
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'Please log' +
                ' into this app.';
        } else {
            document.getElementById('status').innerHTML = 'Please log' +
                ' into Facebook.';
        }
    }

    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
        console.log('checkLoginState activated');
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId: '432705477069426',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.8&appId=432705477069426";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
            console.log(response);
            // modify function
            $.session.set('fb', JSON.stringify({
                id: response.id,
                name: response.name,
            }));
        });
        console.log(JSON.parse($.session.get('fb')));
    }