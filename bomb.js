let bombes = [];

for (var i = 0; i < 3; i++) {
bombe = document.createElement('div');
bombe.style.width = GRID_SIZE + "px";
bombe.style.height = GRID_SIZE + "px";
bombe.style.backgroundColor = "red";
bombe.style.backgroundSize = "contain";
bombe.style.position = 'absolute';
bombe.style.zIndex = "100";
bombe.id = "bombe" + String(i);
//bombe.bombeX = x ;
//bombe.bombeY = y ;
bombes.push(bombe);
}

function createBombe(blockGrid){
  if (!document.getElementById("bombe0")) {
    var bombe = bombes[0];
    bombe.style.left = String(x * GRID_SIZE) + "px";
    bombe.style.top = String(y * GRID_SIZE) + "px";
    console.log(x,y);
    bombe.x = x;
    bombe.y = y;

    blockGrid[bombe.x][bombe.y].traverser = false;
    blockGrid[bombe.x][bombe.y].bombe = true;
    document.getElementById('plateau').appendChild(bombe);
  console.log(x,y,bombe.x,bombe.y);
  setTimeout(function explose(){
    document.getElementById("bombe0").remove();
    blockGrid[bombe.x][bombe.y].traverser = true;
    blockGrid[bombe.x][bombe.y].bombe = false;
  }, 1000)

    }

}
