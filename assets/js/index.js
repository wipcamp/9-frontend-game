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