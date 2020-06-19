const H_GRID = 24;
const V_GRID = 16;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;

var pion = document.getElementById('pion'),
  stylePion = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;

var blockGrid = [];
for(var i = 0; i < H_GRID; i++){
  blockGrid.push([]);
  for(var j = 0; j < V_GRID; j++){
    let block = document.createElement("div");
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "flex";
    block.style.position = "absolute";

    if (random100() > 90){
      block.style.backgroundColor = "black";
      block.traverser = false;
    }
    else {
      block.style.backgroundColor = "green";
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString()+"px";
    block.style.marginTop = (j * GRID_SIZE).toString()+"px";

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);
  }
}

//blockGrid[10][10].style.backgroundColor = "blue";

document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
  switch(keyCode){
    case 38:
      if (y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE; // ou y-=40;
      break;
    case 39:
      if (x < WINDOW_WIDTH && blockGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      break;
    case 40:
      if (y < WINDOW_HEIGHT && blockGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;
    case 37:
      if (x > 0 && blockGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      break;
  }
  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}

function randomColor(){
  return "#" + ((1<<24)*Math.random()|0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}
