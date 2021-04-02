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
let boutonMoins = document.getElementById("-");
let boutonsList = document.getElementsByTagName('button');
let boutonEgal = document.getElementById("=");
let boutonPlus = document.getElementById("+");
let boutonHelp = document.getElementById('help');
boutonPlus.disabled = true;
boutonMoins.disabled = true;
boutonEgal.disabled = true;



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

function afficher(val){
    if(operand1.innerHTML == ""){    
        operand1.innerHTML = tab[val];
        $( "#operand1" ).append(operand1);
        boutonPlus.disabled = false;
        boutonMoins.disabled = false;
        boutonPlus.firstElementChild.setAttribute('src', 'img/symbole/addition.png')
        boutonMoins.firstElementChild.setAttribute('src', 'img/symbole/soustraction.png');
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" &&      boutonsList[i].className === "button-number"){
                boutonsList[i].disabled = true;
                boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
            }
        };
    }
    else {
        afficher2(val);
    }  
}

function afficher2(val){
    let op1 = "";
    if(operateur.innerHTML == ""){
        operateur.innerHTML = tab[val];
        $( "#operateur" ).append(operateur);
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" && boutonsList[i].className === "button-number"){
                boutonsList[i].disabled = false;
                boutonsList[i].firstElementChild.src = 'img/number/'+boutonsList[i].id.toString()+'.png';
            }
        };
        boutonPlus.disabled = true;
        boutonMoins.disabled = true;
        boutonEgal.disabled = true;
        boutonPlus.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png')
        boutonMoins.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
        boutonEgal.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
        op1 = operand1.innerHTML.substr(21,1);
        if(operand1.innerHTML.substr(21,2) == "10"){
            op1 = operand1.innerHTML.substr(21,2);
        }
        checkOp(op1, operateur.innerHTML.substr(22, 3));
    }
    else {
        afficher3(val);
    } 
}


function afficher3(val){

    console.log(tab[val]);
    if(operand2.innerHTML == ""){
        operand2.innerHTML = tab[val];
        $( "#operand2" ).append(operand2);
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "=" || boutonsList[i].id != "help" ){
                boutonsList[i].disabled = true;
                boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
            }
            boutonEgal.disabled = false;
            boutonEgal.firstElementChild.src = 'img/symbole/egale.png';
            boutonHelp.disabled = false;
            boutonHelp.firstElementChild.src = 'img/symbole/help.png';
        }
    }
    else {
        afficher4(val);
    };   
}



function afficher4(val){

    if(signeEgale.innerHTML == ""){
        signeEgale.innerHTML = tab[11];
        $( "#signeEgale" ).append(signeEgale);
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "="){
                boutonsList[i].disabled = false;
                boutonsList[i].firstElementChild.src = 'img/number/'+boutonsList[i].id.toString()+'.png';
            }
            if(boutonsList[i].id == "gomme"){
                boutonsList[i].firstElementChild.src = 'img/symbole/gomme.png'
            }
            if(boutonsList[i].id  == "help"){
                boutonsList[i].firstElementChild.src = 'img/symbole/help.png'
            }
            if(boutonsList[i].id == "+" || boutonsList[i].id == "-" || boutonsList[i].id == "="){
                boutonsList[i].firstElementChild.src = 'img/symbole/cadenas.png';
                boutonsList[i].disabled = true;
            }
        }
    }
    else {

        afficher5(val);
    };
}

function afficher5(val){
    if(resultat.innerHTML == ""){

        resultat.innerHTML = tab[val];
        $( "#resultat" ).append(resultat);
  
        boutonEgal.disabled = false;
        boutonEgal.firstElementChild.src = 'img/symbole/egale.png';
        setTimeout(function() {
            var menu = document.getElementById('enTete');
            menu.click();
        
        }, 5000);
    }
    else {
    
    };
    
}


    function  effacer(){
    operand1.innerHTML = "";
    operand2.innerHTML = "";
    operateur.innerHTML = "";
    resultat.innerHTML = "";
    signeEgale.innerHTML = "";
    $( "#operand1" ).remove(operand1);
    $( "#operand2" ).remove(operand2);
    $( "#operateur" ).remove(operateur);
    $( "#resultat" ).remove(resultat);
    $( "#signeEgale" ).remove(signeEgale);
    boutonPlus.disabled = true;
    boutonMoins.disabled = true;
    boutonEgal.disabled = true;
    boutonPlus.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png')
    boutonMoins.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
    boutonEgal.firstElementChild.setAttribute('src', 'img/symbole/cadenas.png')
    for (var i = 0;i < boutonsList.length; i++) {
        if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help"){
            boutonsList[i].disabled = false;
            boutonsList[i].firstElementChild.src = 'img/number/'+boutonsList[i].id.toString()+'.png';
        }
    };
}

function checkOp(firstOperand, operator) {
    console.log(operator, "================>", firstOperand);
    if (operator == "add") {
        for (var i = 0; i < boutonsList.length;i++) {
            if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" && boutonsList[i].className === "button-number") {
                console.log(parseInt(firstOperand) + parseInt(boutonsList[i].id));
                if((parseInt(firstOperand) + parseInt(boutonsList[i].id) > 10)) {
                    boutonsList[i].disabled = true;
                    boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
                }
            }
        }
    }
    if (operator == "sou") {
        for (var i = 0; i < boutonsList.length;i++) {
            if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" && boutonsList[i].className === "button-number") {
                console.log(parseInt(firstOperand) - parseInt(boutonsList[i].id));
                if((parseInt(firstOperand) - parseInt(boutonsList[i].id) < 0)) {
                    boutonsList[i].disabled = true;
                    boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
                }
            }
        }
    }
}

