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
      if (y < 0) {
        y = 0;
      }
      break;
    case 39:
      x = x + 40;
      if (x > 760) {
      x = 760;
      }
      break;
    case 40:
      y = y + 40;
      if (y > 760) {
        y = 760;
      }
      break;
    case 37:
      x = x - 40;
      if (x < 0) {
        x = 0;
      }
      break;

  }
  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}
