var vezP1;
var casa=[];

function jogar(numeroDaCasa) {
    document.getElementById(numeroDaCasa).innerText = ("Y");
    if (vezP1) {
        document.getElementById(numeroDaCasa).innerText = ("X");
        document.getElementById(numeroDaCasa).disabled = true;
        casa[numeroDaCasa - 1] = "X";
        console.log(casa);
        vezP1 = 0;
    }
    else {
        document.getElementById(numeroDaCasa).innerText = ("O");
        document.getElementById(numeroDaCasa).disabled = true;
        casa[numeroDaCasa - 1] = "O";
        console.log(casa);
        vezP1 = 1;
    }
    if((casa[0] && casa[1] && casa[2]) == "X"){
        console.log("vitoria");
    }
}

function inicioJogadorAleatorio() {
    var jogadorSorteado = Math.floor(Math.random() * 2);

}
function jogarNovamente() {
    
    
    for (i = 0; i < 9; i++) {
        numeroDaCasa = i;
        document.getElementById(numeroDaCasa + 1).innerHTML = "&nbsp";
        document.getElementById(numeroDaCasa + 1).disabled = false;
        document.getElementById(2).disabled = false;
    }
}


function trocarTxt() {
    /*  switch ()
     {
         
         case 0:
             document.getElementById("").innerText = "x";
                 break;
         case 1:
             document.getElementById("").innerText = "O";
                 break;
         case 2:
             document.getElementById("").innerText = "";
                 break;
 
     } */
}
