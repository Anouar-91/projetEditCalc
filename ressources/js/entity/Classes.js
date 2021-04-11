class Calculette {
    constructor(list) {
        this.fenetre = new Fenetre();
        this.list = list;
        console.log("calculette créee")
    }

    getFenetre() {
        return this.fenetre;
    }

    getListBoutons() {
        return this.list;
    }
}

class Fenetre {
    constructor(calcul){
        console.log("fenetre créee");
        this.calcul = new Calcul();
    }


    getCalcul() {
        return this.calcul;
    }

    affiche(id, indexImg) {
        console.log(id);
        let variable = document.getElementById(id);
        if(etape == "operand1"){
            operand1.innerHTML = tab[indexImg];
            variable.append(operand1);
        }
        else if(etape=="operateur"){
            operateur.innerHTML = tab[indexImg];
            variable.append(operateur);
        }
        else if(etape=="operand2"){
            operand2.innerHTML = tab[indexImg];
            variable.append(operand2);
        }
        else if(etape=="signeEgale"){
            signeEgale.innerHTML = tab[11];
            variable.append(signeEgale);
        }
        

    }

    verouillageNumber(){
        boutonPlus.disabled = false;
        boutonMoins.disabled = false;
        boutonPlus.firstElementChild.setAttribute('src', 'img/symbole/addition.png')
        boutonMoins.firstElementChild.setAttribute('src', 'img/symbole/soustraction.png');
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" &&      boutonsList[i].className === "button-number"){
                boutonsList[i].disabled = true;
                boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
            }
        }
    }

    verrouillageNumber2(){
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
        let op1 = operand1.innerHTML.substr(21,1);
        console.log(op1);
        console.log(operateur.innerHTML.substr(22, 3));
        if(operand1.innerHTML.substr(21,2) == "10"){
            op1 = operand1.innerHTML.substr(21,2);
        }
        calculette.getFenetre().getCalcul().checkOp(op1, operateur.innerHTML.substr(22, 3));
    }

    verrouillageNumber3(){
        for (var i = 0;i < boutonsList.length; i++) {
            if (boutonsList[i].id != "=" || boutonsList[i].id != "help" && boutonsList[i].className === "button-number" ){
                boutonsList[i].disabled = true;
                boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
            }
            boutonEgal.disabled = false;
            boutonEgal.firstElementChild.src = 'img/symbole/egale.png';
            boutonHelp.disabled = false;
            boutonHelp.firstElementChild.src = 'img/symbole/help.png';
        }
    
    }


}

class Bouton {
    constructor(value, type, imageValue) {
        this.value = value;
        this.type = type;
        this.imageValue = imageValue
    }

    static createCalcul(value, img) {
        if (calculette.getFenetre().getCalcul().getOperande1() == "" && etape =="operand1") {
            calculette.getFenetre().getCalcul().setOperande1(value);
            calculette.getFenetre().affiche("operand1", img);
            calculette.getFenetre().verouillageNumber();
            etape = "operateur";
        }
        else if (calculette.getFenetre().getCalcul().getOperateur() == "" && etape == "operateur") {
            calculette.getFenetre().getCalcul().setOperateur(value);
            console.log(calculette.getFenetre().getCalcul().getOperande1(), value);
            calculette.getFenetre().affiche("operateur", img);
            calculette.getFenetre().verrouillageNumber2();
            etape="operand2";
            
        }
        else if (calculette.getFenetre().getCalcul().getOperande2() == "" && etape=="operand2") {
            calculette.getFenetre().getCalcul().setOperande2(value)
            calculette.getFenetre().affiche("operand2", img);
            calculette.getFenetre().verrouillageNumber3();
            etape = "signeEgale";
        }
        
        else if (calculette.getFenetre().getCalcul().getOperateurEgal() == "" && etape == "signeEgale" ) {
            
            calculette.getFenetre().getCalcul().setOperateurEgal(value);
            calculette.getFenetre().affiche("signeEgale", img);
            calculette.getFenetre().verrouillageNumber4();
            etape = "resultat";
        } 
        else if (calculette.getFenetre().getCalcul().getRes() == "" && etape == "resultat" ){
            calculette.getFenetre().getCalcul().setRes(value);
            calculette.getFenetre().affiche("resultat", img);   
        }
        else{
            return false;
        }
    }

    getValue() {
        return this.value;
    }

    getType() {
        return this.type;
    }

    setType(typ) {
        this.type = typ;
    }
}

class Calcul {

    constructor() {
        console.group("calcul vide crée");
        this.operande1 = "";
        this.operateur = "";
        this.operande2 = "";
        this.operateurEgal = "";
        this.res = "";
    }

    getOperande1() {
        return this.operande1;
    }

    getOperateur() {
        return this.operateur;
    }

    getOperande2() {
        return this.operande2;
    }

    getOperateurEgal() {
        return this.operateurEgal;
    }

    getRes() {
        return this.res;
    }

    setOperande1(operande1) {
        this.operande1 = operande1;
    }

    setOperateur(operateur) {
        this.operateur = operateur;
    }

    setOperande2(operande2) {
        this.operande2 = operande2;
    }

    setOperateurEgal(operateurEgal) {
        this.operateurEgal = operateurEgal;
    }

    setRes(res) {
        this.res = res;
    }

    checkOp(firstOperand, operator) {
        if (operator == "add") {
            for (var i = 0; i < boutonsList.length;i++) {
                if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" && boutonsList[i].className === "button-number") {
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
                    if((parseInt(firstOperand) - parseInt(boutonsList[i].id) < 0)) {
                        boutonsList[i].disabled = true;
                        boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
                    }
                }
            }
        }
    }
}