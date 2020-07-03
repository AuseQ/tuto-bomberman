# tuto-bomberman

## Étape 1 : Créer un plateau en CSS de 800 par 800 px et lui supperposer une grille en javascript.

Dans notre fichier .html on crée une ```<div id="plateau">```. Dans notre fichier style.css on lui applique une largeur et une hauteur de 800px ainsi qu'une couleur de fond. On peux personnaliser le plateau à notre goût :

  ```
  #plateau{
    width: 800px;
    height:800px;
    background-color: white;
    margin: auto;
    border-style: solid;
  }
  ```

Dans un fichier script.js on definit des constantes pour creer une grille. Une constante de hauteur et une constante de largeur et une constante pour la taille des cases:

```
const H_GRID = 24;
const V_GRID = 16;
const GRID_SIZE = 40;
```
en suite on calcule la largeur du plateau et la hauteur du plateau en multipliant le nombre de cases en hauteur par la largeur d'une case et le nombre de case en largeur par la largeur d'une case:

```
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;
```
enfin on crée une variable plateau en javascript à laquelle on affecte la methode getElementById qu'on applique à document.
On applique une proprietee CSS au plateau en lui renvoyant la valeur des constantes "WINDOW_WIDTH" "WINDOW_HEIGHT".


## Étape 2 : Créer un pion en CSS de 40 par 40 px.

Dans le fichier .html on créer une nouvelle ```<div id="pion">``` que l'on place dans la div du plateau :

  ```
  <div id="plateau">
    <div id="pion">

    </div>
  </div>

  ```

Dans la feuille de style on lui applique une largeur et une hauteur de 40px ainsi qu'une couleur de votre choix.

    ```
  #pion{
    width: 40px;
    height: 40px;
    background-color: blue;  
  }
    ```

## Étape 3 : Utiliser les flèches directionnelles du clavier pour déplacer le pion à gauche, droite, en haut et en bas.

Pour pouvoir déplacer notre pion on a besoin de lui attribuer une ```position: absolute;``` dans le fichier CSS ainsi qu'une ```position: relative;``` au plateau.

Dans le fichier script on commence par déclarer une variable ```var pion``` à la quelle on attribue ```= document.getElementById('pion'),``` qui est une méthode javascript qui permet d'accéder à l'élement du document qui possède l'```id="pion```.

On définie une variable ```stylePion = pion.style``` qui nous permettra de modifier le CSS de notre pion en fonction de la touche sur laquelle on appuie.

On définie enfin les variables ```x = pion.offsetLeft``` et ```y = pion.offsetTop``` qui serviront à déplacer le pion sur chaque axe, "x" étant l'axe horizontal et "y" l'axe vertical.

On écoute l'évenement touche du clavier préssée. Lorsqu'une touche est préssée on vérifie si c'est la touche directionnelle haut, bas , gauche ou droite grace au keyCode (exemple le keyCode pour la fléche du haut est 38). On modifie alors la valeur des offsetleft et top en ajoutant ou en retirant 40px :

  ```
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

  ```
On change la position du pion en appliquant la nouvelle valeur obtenue après avoir appuyé sur une touche à l'offset. On lui rajoute son unité 'px'(pixel). Ainsi la nouvelle position est appliquée dans le CSS.

## Étape 4 : Les bords du plateau limitent le déplacement du pion.

Pour que le pion ne sorte pas on va tester sa position en fonction de la touche sur laquelle on appuie. Par exemple si l'on appuie vers le haut (```case 38```) on teste si sa position est inférieure à 0, 0 étant le bord supérieur du plateau. Si c'est le cas on assigne au pion une position "y" égale à 0 :

  ```
  switch(keyCode){
    case 38:
      y = y - GRID_SIZE; // ou y-=GRID_SIZE;
      if (y < 0) { // içi on effectue le test cité dans l'exemple.
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

  ```

## Étape 5 : Des éléments sont générés aléatoirement sur le plateau.
En CSS on va creer un nouvel element dans notre fichier html qui va avoir une id "vilain", on lui attribue une hauteur et une largeur definie ainsi qu'une position absolue dans le css:

```
#vilain{
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: yellow;
  background-size: contain;
  left: 0;
  top : 0;
  z-index: 95;
}
```
## Étape 6 : Les éléments limitent le déplacement du pion.


## Étape 7 : Récupérer un sprite sheet sur internet et le mettre au pion.


## Étape 8 : Sur la base du sprite sheet, créer un effet de marche lorsque le pion se déplace.


## Étape 9 : Des éléments apparaissent aléatoirement et se déplacent aléatoirement.


## Étape 10 : Lorsqu'ils touchent le pion, les éléments qui se déplacent détruisent le pion.


## Étape 11 : Mettre un sprite aux ennemis.


## Étape 12 : Le pion pose une bombe en appuyant sur la touche space.

tout d'abord on créer un variable pour une bombe avec ses caracteristiques :

```
let bombes = [];

for (var i = 0; i < 3; i++) {
  bombe = document.createElement('div');
  bombe.style.width = GRID_SIZE + "px";
  bombe.style.height = GRID_SIZE + "px";
  bombe.style.backgroundColor = "red";
  bombe.style.backgroundSize = "contain";
  bombe.style.position = 'absolute';
  bombe.style.zIndex = "100";
  bombe.libre = true;
  bombe.id = "bombe" + String(i);
  bombes.push(bombe);
}
```
on ajoute la fonction pour que notre pion puisse posé la bombe et les coordonnées :

```
function createBombe(blockGrid) {
  let bombeset = false
  for (var i = 0; i < bombes.length; i++) {
    if (bombes[i].libre && !bombeset) {
      var bombe = bombes[i];
      bombe.libre = false;
      bombeset = true;

      bombe.style.left = String(x * GRID_SIZE) + "px";
      bombe.style.top = String(y * GRID_SIZE) + "px";
      bombe.x = x;
      bombe.y = y;
    }
  }
```

puis on ajoute dans le script un evenement pour que notre pion puisse posé la bombe avec la touche espace :

```
case 32:
      if (!blockGrid[x][y].bombe) {
        createBombe(blockGrid);
      }
      break;
    default:
      return;
  }
```


## Étape 13 : la bombe explose au bout de quelques secondes.

pour que la bombe disparaisse au bout de quelques seconde on ajoute dans notre fonction un setTimeout et  un bombe.remove() avec les coordonnées de la bombe a faire disparaitre 
```
setTimeout(function explose() {
        if (bombe.x < H_GRID - 1) {
```
```
bombe.remove();
       blockGrid[bombe.x][bombe.y].traverser = true;
       blockGrid[bombe.x][bombe.y].bombe = false;
       bombe.libre = true;
       blockGrid[bombe.x][bombe.y].style.backgroundColor = "green";
     }, 2000);
```
