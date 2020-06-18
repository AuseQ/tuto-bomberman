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
      y = y - GRID_SIZE; // ou y-=40;
      if (y < 0) {
        y = 0;
      }
      break;
    case 39:
      x = x + GRID_SIZE;
      if (x > WINDOW_WIDTH - GRID_SIZE) {
        x = WINDOW_WIDTH - GRID_SIZE;
      }
      break;
    case 40:
      y = y + GRID_SIZE;
      if (y > WINDOW_HEIGHT - GRID_SIZE) {
        y = WINDOW_HEIGHT - GRID_SIZE;
      }
      break;
    case 37:
      x = x - GRID_SIZE;
      if (x < 0) {
        x = 0;
      }
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
