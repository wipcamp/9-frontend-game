// Initialize Firebase
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

// id test in testfirebase
// const test = document.getElementById('test');

// get reference
const dbRef = firebase.database().ref();

// main function
$(function() {
    const input = $('input');
    const button = $('a');
    const tbody = $('tbody');
    let i = 0;
    let j = 9;

    // timeout
    let delay = 5000;

    // get data form database ( child - users )
    // 1000 = 1 second
    const usersRef = dbRef.child("etk").child("web").orderByChild("highscore").limitToLast(10);
    // const getUsers = usersRef.on('value', snap => test.innerText = JSON.stringify(snap.val(), null, 3));

    // get score < only > !
    let users = [];
    let nameUsers = [];
    let temp= [];
    usersRef.on("child_added", function(data) {
      // users.push(data.val());
      users.push(data.val());
      nameUsers.push(data.key);
      // console.log(data.key);
      // console.log(users);

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
          // orderable: false,
          language : {
            emptyTable : "กรุณา Refresh(F5) อีกครั้ง เพื่อโหลดข้อมูล"
          },
          bSortable : false,
          columnDefs: [
            // {
            //     className: "hidden-xs-down",
            //     targets :[1]
            // },
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
            //   { data: 'urlpic',
            //   render: function ( data , type  , row){
            //     return '<img src="'+ data + '" class="rounded-circle">';
            //   }
            // },
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
      // console.log("checkindex - "+checkIndex);
      // const tempIndex = checkIndex;
      // console.log("tempindex - "+tempIndex);
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
          /*var j=i+1;

          if(k===0){
            cell.innerHTML = '<img src="assets/img/medal-gold.svg" alt="" class="prize">' + (k);
            // k++;
          }
          j++;
          if (users[i].highscore!=users[j].highscore) {
            // k+=1;
          }
          else if(k===2){
            cell.innerHTML = '<img src="assets/img/medal-silver.svg" alt="" class="prize">' + (k);
          }
          else if(k===3){
            cell.innerHTML = '<img src="assets/img/medal-bronze.svg"  alt="" class="prize">' + (k);
          }
          if(k===1){
            cell.innerHTML = '<img src="assets/img/medal-gold.svg" alt="" class="prize">' + (k);
          }

          else {
            cell.innerHTML = k;
          }*/
          // cell.innerHTML = i+1;
          if(i===0)
            cell.innerHTML = '<img src="assets/img/medal-gold.svg" alt="" class="prize">' + (k);
            // print(k name)
          else {
            if(highscore[i]===highscore[i-1]){
              // console.log(users[i]);
              // print(k name)
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
    // console.log(users);
    //
    // console.log(nameUsers);
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
