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
  x = 0,
  y = 0;

var vilain = document.getElementById('vilain'),
styleVilain = vilain.style,
vilainX = vilain.offsetLeft,
vilainY = vilain.offsetTop,
direction = "right";



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

var frame = 0;

function loop(){
  if (frame === 60) {
    switch (direction) {
      case "left":
        if (vilainY > 0 && blockGrid[vilainX][vilainY - 1].traverser)
          vilainY--;
        break;

      case "right":
        if (vilainX < H_GRID - 1 && blockGrid[vilainX + 1][vilainY].traverser)
          vilainX++;
        break;

      case "up":
        if (vilainY < H_GRID - 1 && blockGrid[vilainX][vilainY + 1].traverser)
          vilainY++;
        break;

      case "down":
        if (vilainX > 0 && blockGrid[vilainX - 1][vilainY].traverser)
            vilainX--;
        break;
    }
    styleVilain.left = String(vilainX * GRID_SIZE) + 'px';
    styleVilain.top = String(vilainY * GRID_SIZE) + 'px';

    let random = random100();

    if (random < 25) {
      direction = "left";
    }

    if (random >= 25 && random < 50) {
      direction = "right";
    }

    if (random >= 50 && random < 75) {
      direction = "up";
    }

    if (random > 75) {
      direction = "down";
    }

    frame = 0;
    }
    frame++;

    window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);









document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
  switch(keyCode){
    // Up
    case 38:
      if (y > 0 && blockGrid[x][y - 1].traverser)
      y--; // ou y-=40;
      break;
    // Right
    case 39:
      if (x < H_GRID -1 && blockGrid[x + 1][y].traverser)
      x++;
      break;
    // Down
    case 40:
      if (y < H_GRID -1 && blockGrid[x][y + 1].traverser)
      y++;
      break;
    // Left
    case 37:
      if (x > 0 && blockGrid[x - 1][y].traverser)
      x--;
      break;
  }
  stylePion.left = String(x * GRID_SIZE) + 'px';
  stylePion.top = String(y * GRID_SIZE) + 'px';
}

function randomColor(){
  return "#" + ((1<<24)*Math.random()|0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}
