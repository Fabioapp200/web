var vezP1;
var jogadorInicial;
var casa = ["", "", "", "", "", "", "", "", ""];

function carregamentoInicial() {
    for (i = 0; i < 9; i++) {
        document.getElementById(i + 1).disabled = true;
    }
}
function iniciarJogo() {
    document.getElementById("jogarDnv").onclick = jogarNovamente;
    document.getElementById("jogarDnv").innerText = "Jogar Novamente";
    vezP1 = Math.floor(Math.random() * 2);
    if (vezP1) {
        jogadorInicial = "X";
    } else { jogadorInicial = "O" }
    document.getElementById("display").innerText = "Vez do " + jogadorInicial;
    for (i = 0; i < 9; i++) {
        document.getElementById(i + 1).disabled = false;
    }
}
function jogar(numeroDaCasa) {
    if (vezP1) {
        document.getElementById(numeroDaCasa).innerText = ("X");
        document.getElementById(numeroDaCasa).disabled = true;
        casa[numeroDaCasa - 1] = "X";
        jogadorInicial = "0";
        document.getElementById("display").innerText = "Vez do " + jogadorInicial;
        vezP1 = 0;
    }
    else {
        document.getElementById(numeroDaCasa).innerText = ("O");
        document.getElementById(numeroDaCasa).disabled = true;
        casa[numeroDaCasa - 1] = "O";
        jogadorInicial = "X";
        document.getElementById("display").innerText = "Vez do " + jogadorInicial;
        vezP1 = 1;
    }
    var condDeVitoriaX =
        [
            (casa[0] == "X" && casa[1] == "X" && casa[2] == "X"),
            (casa[3] == "X" && casa[4] == "X" && casa[5] == "X"),
            (casa[6] == "X" && casa[7] == "X" && casa[8] == "X"),
            (casa[0] == "X" && casa[3] == "X" && casa[6] == "X"),
            (casa[1] == "X" && casa[4] == "X" && casa[7] == "X"),
            (casa[2] == "X" && casa[5] == "X" && casa[8] == "X"),
            (casa[0] == "X" && casa[4] == "X" && casa[8] == "X"),
            (casa[6] == "X" && casa[4] == "X" && casa[2] == "X")
        ]
    var condDeVitoriaO =
        [
            (casa[0] == "O" && casa[1] == "O" && casa[2] == "O"),
            (casa[3] == "O" && casa[4] == "O" && casa[5] == "O"),
            (casa[6] == "O" && casa[7] == "O" && casa[8] == "O"),
            (casa[0] == "O" && casa[3] == "O" && casa[6] == "O"),
            (casa[1] == "O" && casa[4] == "O" && casa[7] == "O"),
            (casa[2] == "O" && casa[5] == "O" && casa[8] == "O"),
            (casa[0] == "O" && casa[4] == "O" && casa[8] == "O"),
            (casa[6] == "O" && casa[4] == "O" && casa[2] == "O")
        ]
    for (i = 0; i < condDeVitoriaX.length; i++) {
        if (condDeVitoriaX[i]) {
            document.getElementById("display").innerText = "Vitória do X";
            console.log("Vitória do X");
            for (i = 0; i < 9; i++) {
                document.getElementById(i + 1).disabled = true;
            }
        }
    }
    for (i = 0; i < condDeVitoriaO.length; i++) {
        if (condDeVitoriaO[i]) {
            document.getElementById("display").innerText = "Vitória do O";
            console.log("Vitória do O");
            for (i = 0; i < 9; i++) {
                document.getElementById(i + 1).disabled = true;
                
            }
        }
    }
}
function jogarNovamente() {
    for (i = 0; i < 9; i++) {
        console.clear();
        numeroDaCasa = i;
        casa = ["", "", "", "", "", "", "", "", ""];
        document.getElementById(numeroDaCasa + 1).innerHTML = "&nbsp";
        document.getElementById(numeroDaCasa + 1).disabled = false;
        document.getElementById(2).disabled = false;
    }
}