  const config = {
      apiKey: "AIzaSyAhBOG3nZFT0xjOu5UPm1k-ZVot1IPEfoQ",
      authDomain: "wip-camps-game.firebaseapp.com",
      databaseURL: "https://wip-camps-game.firebaseio.com",
      storageBucket: "wip-camps-game.appspot.com",
      messagingSenderId: "768785136426"
  };
  firebase.initializeApp(config);

jQuery.fn.dataTableExt.oApi.fnDataUpdate = function ( oSettings, nRowObject, iRowIndex )
{
    jQuery(nRowObject).find("TD").each( function(i) {
          var iColIndex = oSettings.oApi._fnVisibleToColumnIndex( oSettings, i );
          oSettings.oApi._fnSetCellData( oSettings, iRowIndex, iColIndex, jQuery(this).html() );
    } );
};

const dbRef = firebase.database().ref();

$(function() {
    const input = $('input');
    const button = $('a');
    const tbody = $('tbody');
    let i = 0;
    let j = 9;

    let delay = 5000;

    const usersRef = dbRef.child("sals").orderByChild("highscore").limitToLast(100);

    let users = [];
    let nameUsers = [];
    let temp= [];
    usersRef.on("child_added", function(data) {
      users.push(data.val());
      nameUsers.push(data.val().name);

    });
    $(document).ready(function() {
      toDayToNight();
      setTimeout(function() {
        var t = $('.game-tbl').DataTable({
          data: users,
          responsive: true,
          paging: true,
          destroy: true,
          searching: false,
          language : {
            emptyTable : "กรุณา Refresh(F5) อีกครั้ง เพื่อโหลดข้อมูล"
          },
          bSortable : false,
          columnDefs: [
            {
              orderable : false,
              targets :[0,1,2]
            }
          ],
          order: [[ 2 , 'desc' ]],
          columns: [
            { data: null,
              render: function ( data , type , row){
                return '<div>';
              }
            },
            { data: 'score'
            ,
            render: function ( data , type , row){
              return '<div>';
            }
          },
          {  data: 'highscore' }
        ]
      });

      let checkIndex = nameUsers.length-1;
      t.column(1, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
        cell.innerHTML = nameUsers[checkIndex];
        if(checkIndex>=0){
          checkIndex--;
        }

      } );
      var highscore = [];

      for (var i = users.length-1; i > 0; i--) {
        highscore.push(users[i].highscore);
      }
      t.on( 'order.dt search.dt', function () {
        var k=1;
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
          if(i===0)
            cell.innerHTML = '<img src="assets/img/medal-gold.svg" alt="" class="prize">' + (k);
          else {
            if(highscore[i]===highscore[i-1]){
              if (k===1) {
                cell.innerHTML = '<img src="assets/img/medal-gold.svg" alt="" class="prize">' + (k);
              }
              else if (k===2) {
                cell.innerHTML = '<img src="assets/img/medal-silver.svg" alt="" class="prize">' + (k);
              }
              else if(k===3) {
                cell.innerHTML = '<img src="assets/img/medal-bronze.svg" alt="" class="prize">' + (k);
              }
              else {
                cell.innerHTML = (k);
              }

            }
              else {
              k=i+1;
              if (k===2) {
                cell.innerHTML = '<img src="assets/img/medal-silver.svg" alt="" class="prize">' + (k);
              }
              else if(k===3) {
                cell.innerHTML = '<img src="assets/img/medal-bronze.svg" alt="" class="prize">' + (k);
              }
              else {
                cell.innerHTML = (k);
              }
            }
          }
        } );


      } ).draw();

    }, delay);

  });
  
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
