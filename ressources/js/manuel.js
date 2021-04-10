    //Instanciation des boutons et de la calculette
    let bouton0 = new Bouton('0', 'operande', '0');
    let bouton1 = new Bouton('1', 'operande', '1');
    let bouton2 = new Bouton('2', 'operande', '2');
    let bouton3 = new Bouton('3', 'operande', '3');
    let bouton4 = new Bouton('4', 'operande', '4');
    let bouton5 = new Bouton('5', 'operande', '5');
    let bouton6 = new Bouton('6', 'operande', '6');
    let bouton7 = new Bouton('7', 'operande', '7');
    let bouton8 = new Bouton('8', 'operande', '8');
    let bouton9 = new Bouton('9', 'operande', '9');
    let bouton10 = new Bouton('10', 'operande', '10');
    let boutonPls = new Bouton('+', 'operateur', '13');
    let boutonMns = new Bouton('-', 'operateur', '14');
    let boutonEgl = new Bouton('=', 'operateur', '11');
    let boutonAide = new Bouton('help', 'autre', '15');
    let boutonEfface = new Bouton('erase', 'autre', '12');
    let listBoutons = [bouton0, bouton1, bouton2, bouton3, bouton4, bouton5, bouton6, bouton7, bouton8, bouton9, bouton10, boutonPls, boutonMns, boutonEgl, boutonAide, boutonEfface];
    let calculette = new Calculette(listBoutons);
    //Recuperation de la list des attribts de chaque boutons dans une liste, faire un console.log de list pour comprendre
    var list = Object.values(calculette.getListBoutons());

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

    //etape
    let etape = "operand1";

    function afficher(val){
            for (i = 0; i < 16; i++) {
                if(Object.values(list[i])[0] == val)
                    Bouton.createCalcul(val, Object.values(list[i])[2]);
        }


        /*
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
    }*/
    }