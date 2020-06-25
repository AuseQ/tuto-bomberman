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











var blockGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);
  for (var j = 0; j < V_GRID; j++) {
    let block = document.createElement("div");
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "flex";
    block.style.position = "absolute";

    if (random100() > 90) {
      block.style.backgroundColor = "black";
      block.traverser = false;
    } else {
      block.style.backgroundColor = "green";
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString() + "px";
    block.style.marginTop = (j * GRID_SIZE).toString() + "px";

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);
  }
}





var vilainListe = []
for (var i = 0; i < 100; i++) {
  let vilain = document.createElement('div');

let x = 0;
let y = 0;
while (!blockGrid[x][y].traverser || (x === 0 && y ===0)) {
x = Math.floor(Math.random() * (H_GRID))
y = Math.floor(Math.random() * (V_GRID))
}
blockGrid[x][y].traverser = false;
  vilain.vilainX = x;
  vilain.vilainY = y;
  vilain.direction = "right";



  vilain.id = "vilain" + String(i);
  vilain.style.width = "40px";
  vilain.style.height = "40px";
  vilain.style.position = "absolute";
  vilain.style.backgroundColor = "yellow";
  vilain.style.backgroundSize = "contain";
  vilain.style.left = String(vilain.vilainX * GRID_SIZE) + "px";
  vilain.style.top = String(vilain.vilainY * GRID_SIZE) + "px";
  vilain.style.zIndex = "95";
  plateau.appendChild(vilain);




  vilainListe.push(vilain)
}
//blockGrid[10][10].style.backgroundColor = "blue";

var frame = 0;

function loop() {
  if (frame === 60) {
    for (var i = 0; i < vilainListe.length; i++) {
      let vilain = vilainListe[i];
      let vilainX = vilain.vilainX
      let vilainY = vilain.vilainY
      let direction = vilain.direction
      blockGrid[vilainX][vilainY].traverser = true ;
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
          console.log(vilainY)
          if (vilainY < V_GRID - 1 && blockGrid[vilainX][vilainY + 1].traverser)

            vilainY++;
          break;

        case "down":
          if (vilainX > 0 && blockGrid[vilainX - 1][vilainY].traverser)
            vilainX--;
          break;
      }
      vilain.style.left = String(vilainX * GRID_SIZE) + 'px';
      vilain.style.top = String(vilainY * GRID_SIZE) + 'px';

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

      vilain.vilainX = vilainX
      vilain.vilainY = vilainY
      vilain.direction = direction
      blockGrid[vilainX][vilainY].traverser = false ;
    }

    frame = 0;
  }
  frame++;

  window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);









document.onkeydown = function(event) {
  var event = event || window.event,
    keyCode = event.keyCode;
  switch (keyCode) {
    // Up
    case 38:
      if (y > 0 && blockGrid[x][y - 1].traverser)
        y--; // ou y-=40;
      break;
      // Right
    case 39:
      if (x < H_GRID - 1 && blockGrid[x + 1][y].traverser)
        x++;
      break;
      // Down
    case 40:
      if (y < H_GRID - 1 && blockGrid[x][y + 1].traverser)
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

function randomColor() {
  return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}
