var pion = document.getElementById('pion'),
  s = pion.style,
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
  s.left = String(x) + 'px';
  s.top = String(y) + 'px';
}
