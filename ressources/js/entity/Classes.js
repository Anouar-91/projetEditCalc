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

    affiche(idOp, indexImg) {
        console.log(document.getElementById(idOp.toString()).id);
        //$( "#operand1" ).append(affichage);
        //affichage.innerHTML = tab[indexImg];
    }
}

class Bouton {
    constructor(value, type, imageValue) {
        this.value = value;
        this.type = type;
        this.imageValue = imageValue
    }

    static createCalcul(value, img) {
        if (calculette.getFenetre().getCalcul().getOperande1() == "") {
            calculette.getFenetre().getCalcul().setOperande1(value);
            calculette.getFenetre().affiche("operande1", img);
        }
        else if (calculette.getFenetre().getCalcul().getOperateur() == "") {
            calculette.getFenetre().getCalcul().setOperateur(value);
            calculette.getFenetre().getCalcul().checkOp(calculette.getFenetre().getCalcul().getOperande1(), value)
            console.log(calculette.getFenetre().getCalcul().getOperateur());
            calculette.getFenetre().affiche("operateur", img);
        }
        else if (calculette.getFenetre().getCalcul().getOperande2() == "") {
            calculette.getFenetre().getCalcul().setOperande2(value)
            calculette.getFenetre().affiche("operande2", img);
        }
        else if (calculette.getFenetre().getCalcul().getOperateurEgal() == "") {
            calculette.getFenetre().getCalcul().setOperateurEgal(value);
            calculette.getFenetre().affiche("signeEgal", img);
        } else {
            calculette.getFenetre().getCalcul().setRes(value);
            calculette.getFenetre().affiche("resultat", img);   
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

    setOperateurEgal(operateurEGal) {
        this.operateurEgal = this.operateurEgal;
    }

    setRes(res) {
        this.res = res;
    }

    checkOp(firstOperand, operator) {
        if (operator == "+") {
            for (var i = 0; i < boutonsList.length;i++) {
                if (boutonsList[i].id != "+" && boutonsList[i].id != "-" && boutonsList[i].id != "=" && boutonsList[i].id != "gomme" && boutonsList[i].id != "help" && boutonsList[i].className === "button-number") {
                    if((parseInt(firstOperand) + parseInt(boutonsList[i].id) > 10)) {
                        boutonsList[i].disabled = true;
                        boutonsList[i].firstElementChild.setAttribute('src', 'img/symbole/cadenas.png');
                    }
                }
            }
        }
    
        if (operator == "-") {
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