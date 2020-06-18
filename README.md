# tuto-bomberman

## Étape 1 : Créer un plateau en CSS de 800 par 800 px.

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
      y = y - 40; // ou y-=40;
      if (y < 0) { // içi on effectue le test cité dans l'exemple.
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

  ```
