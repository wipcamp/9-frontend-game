$(document).ready(function(){
    setTimeout(display,3000);
    $('#loading').modal('show');
    toDayToNight();
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
            loadLogin();
        } else if (response.status === 'not_authorized') {
            forceLogin();
            document.getElementById('status').innerHTML = 'Please log' +
                ' into this app.';
        } else {
            forceLogin();
            document.getElementById('status').innerHTML = 'Please log' +
                ' into Facebook.';
        }
    }

    function checkLoginState() {
        setTimeout(function(){
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
                console.log('getLoginStatus');
            });
        },2000);
        console.log('checkLoginState activated');

    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: '432705477069426',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });
        FB.Event.subscribe('auth.statusChange', function(response) {
            console.log("Response : "+JSON.stringify(response.authResponse));
            var tempId = JSON.stringify(response.authResponse).userId;
            if(tempId!==null||tempId!==undefined){
                $('#login').modal('hide');
                testAPI();
                $('#logout').css('display','block');
            }
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

    function login(){
        FB.login();
    }
    function logout(response){
        FB.logout();
        setTimeout((function(){    
            checkLoginState();
            $('.logout').css('display','block');
        }),1000);
    }

    function loadLogin(){
        $('#loading').modal('hide');
        $('#success').modal('show');
        setTimeout((function(){   
            $('#success').modal('hide');
        }),1000);
    }
    function forceLogin(){
        FB.Event.subscribe();
        $('#loading').modal('hide');
        $('#login').modal('show');
    }