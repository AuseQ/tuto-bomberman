var pion = document.getElementById('pion'),
  stylePion = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
  switch(keyCode){
    case 38:
      y = y - 40; // ou y-=40;
      collision();
      if (y < 0) { // içi on effectue le test cité dans l'exemple.
        y = 0;
      }
      break;
    case 39:
      x = x + 40;
      collision();
      if (x > 640) {
      x = 640;
      }
      break;
    case 40:
      y = y + 40;
      collision();
      if (y > 640) {
        y = 640;
      }
      break;
    case 37:
      x = x - 40;
      collision();
      if (x < 0) {
        x = 0;
      }
      break;
}
  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}



for (var i = 0; i < Math.floor(Math.random() * 80); i++) {
  var divgen = document.createElement("div");
  divgen.setAttribute("class", "mur");
  var element = document.getElementById("murs");
  element.appendChild(divgen);
var murRandom = document.getElementsByClassName("class='mur'");
var murcss = murRandom.style,
h = murRandom.offsetLeft,
v = murRandom.offsetTop;
h = Math.floor(Math.random() * 640);
v = Math.floor(Math.random() * 640);
murcss.left = String(h) + 'px';
murcss.top = String(v) + 'px';
}

function collision(){
  if (x < h + 40 &&
   x + 40 > h &&
   y < v + 40 &&
   40 + y > v) {
  x = x - 40;
}
}
