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
    if((casa[0] && casa[1] && casa[2]) || (casa[3] && casa[4] && casa[5]) || (casa[6] && casa[7] && casa[8]) || 
      (casa[0] && casa[3] && casa[6]) || (casa[1] && casa[4] && casa[7]) || (casa[2] && casa[5] && casa[8]) ||
      (casa[0] && casa[4] && casa[8]) || (casa[6] && casa[4] && casa[2]) == "X"){
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