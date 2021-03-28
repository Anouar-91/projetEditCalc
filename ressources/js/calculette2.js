let operand1 = document.createElement('button');
operand1.innerHTML = "";
let operand2 = document.createElement('button');
operand2.innerHTML = "";
let operateur = document.createElement('button');
operateur.innerHTML = "";

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
"<img src='img/symbole/egale.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/gomme.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/addition.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/soustraction.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
"<img src='img/symbole/help.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>",
            ];

function afficher(val){

    console.log(tab[val]);

    if(operand1.innerHTML == ""){
        
    operand1.innerHTML = tab[val];

    $( "#operand1" ).append(operand1);
    
    }
    else{
        afficher2(val);
    }

}

function afficher2(val){

    console.log(tab[val]);

    if(operateur.innerHTML == ""){
        
    operateur.innerHTML = tab[val];

    $( "#operateur" ).append(operateur);

    }
    else{
        afficher3(val);
    }
}


function afficher3(val){

    console.log(tab[val]);

    if(operand2.innerHTML == ""){
        
    operand2.innerHTML = tab[val];

    $( "#operand2" ).append(operand2);

    } 
}

    function  effacer(){
    operand1.innerHTML = "";
    operand2.innerHTML = "";
    operateur.innerHTML = "";
    $( "#operand1" ).remove(operand1);
    $( "#operand2" ).remove(operand2);
    $( "#operateur" ).remove(operateur);

    }
