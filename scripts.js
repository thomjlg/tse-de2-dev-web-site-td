function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function goMenu(menu, s1, s2,list) {
   var a = document.getElementById(menu);
    var b = document.getElementById(s1);
    var c = document.getElementById(s2);
    var e = document.getElementById(list);
      a.style.display = 'block';
      b.style.display = 'none';
      c.style.display = 'none';
    e.style.display = 'none';
}

function goS1(menu, s1, s2,list) {
   var a = document.getElementById(menu);
    var b = document.getElementById(s1);
    var c = document.getElementById(s2);
    var e = document.getElementById(list);
      b.style.display = 'block';
      a.style.display = 'none';
      c.style.display = 'none';
    e.style.display = 'none';
}

function goS2(menu, s1, s2,list) {
   var a = document.getElementById(menu);
    var b = document.getElementById(s1);
    var c = document.getElementById(s2);
    var e = document.getElementById(list);
      c.style.display = 'block';
      b.style.display = 'none';
      a.style.display = 'none';
    e.style.display = 'none';
}


window.addEventListener("DOMContentLoaded", (event) => {
    setInterval(function() {
        console.log("DOM entièrement chargé et analysé");
        $('.onload').hide();
        $('.contentWS').show();
    }, 2000);
  });



    
