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
      break;
    case 39:
      x = x + 40;
      break;
    case 40:
      y = y + 40;
      break;
    case 37:
      x = x - 40;
      break;
  }
  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}
