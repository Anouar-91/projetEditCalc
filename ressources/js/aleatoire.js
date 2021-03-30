// initialisation des variables qui vont nous être utiles

let operand1 = document.createElement('span');
operand1.innerHTML = "";
let operand2 = document.createElement('span');
operand2.innerHTML = "";
let operateur = document.createElement('span');
operateur.innerHTML = "";
let signeEgale = document.createElement('span');
signeEgale.innerHTML = ""; 
let resultat = document.createElement('span');
resultat.innerHTML = "";

let operand1Random = 15;
let operand2Random = 15;
let addition = 15;
let soustraction = -2;

// tableau des images 
var tab = ["<img src='img/number/0.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>", 
"<img src='img/number/1.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/2.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/3.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/4.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/5.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/6.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/7.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/8.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/9.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/number/10.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/egale.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/gomme.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/addition.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/soustraction.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/help.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
            ];

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  // fonction se lance au chargement de la page
  window.onload = function() {
    if(getRandomIntInclusive(0, 1) === 1){
        operateur.innerHTML = tab[13];
        while(addition >= 10){
            operand1Random  = getRandomIntInclusive(0, 10);
            operand2Random  = getRandomIntInclusive(0, 10);
            addition = operand1Random + operand2Random;
        }
        operand1.innerHTML = tab[operand1Random];
        operand2.innerHTML = tab[operand2Random];

    }
    else{
        operateur.innerHTML = tab[14];
        while(soustraction < 0){
            operand1Random  = getRandomIntInclusive(0, 10);
            operand2Random  = getRandomIntInclusive(0, 10);
            soustraction = operand1Random - operand2Random;
        }
        operand1.innerHTML = tab[operand1Random];
        operand2.innerHTML = tab[operand2Random];

    }
    $( "#operateur" ).append(operateur);
    $( "#operand1" ).append(operand1);
    $( "#operand2" ).append(operand2);
    $( "#signeEgale" ).append(signeEgale.innerHTML = tab[11]);

}
    // afficher le resultat

function afficher(val){
    if(resultat.innerHTML == ""){    
        resultat.innerHTML = tab[val];
        $( "#resultat" ).append(resultat);
    }
    else {
        return false;
    }
    
}
