//Jogo da forca por Fábio Pinto e André Dessunte
var palavraAtual;
var dicaAtual;
var letra;
var palavraFoiSorteada;
var palavraDisplay;
var contagemDeErros = 0;
var fotoForca;


function sortearPalavra() {
    /* #region  Setup Inicial */
    document.getElementById("botaoSorteio").innerText = "Sortear Palavra";
    var palavras = ["banana",
        "cavalo",
        "ferrari",
        "carregador",
        "teclado",
        "basquete",
        "programador",
        "campeonato",
        "coelho",
        "ornitorrinco"];

    var dicas = ["Fruta",
        "Animal grande",
        "Marca de carro",
        "Acessório para celular",
        "Periférico de computador",
        "Esporte",
        "Profissão",
        "Tipo de competição",
        "Animal pequeno",
        "Animal aquático"]


    var sorteio = Math.floor(Math.random() * palavras.length);

    palavraAtual = palavras[sorteio];
    dicaAtual = dicas[sorteio];
    palavraFoiSorteada = 1;
    contagemDeErros = 0;
    document.getElementById("imagemDaForca").src = "./data/images/Forca-0.png";

    document.getElementById("palavraSorteadaText").innerText = "";

    document.getElementById("botaoDica").innerText = "Dica";

    palavraDisplay = palavraAtual;

    for (i = 0; i < palavraAtual.length; i++) {
        document.getElementById("palavraSorteadaText").innerText = document.getElementById("palavraSorteadaText").innerText + "_";
        palavraDisplay = palavraDisplay.replace(palavraDisplay[i], "_")
    }

    document.getElementById("botaoSorteio").disabled = true;
    /* #endregion */

}

function tentarLetra(letra) {
    if (palavraFoiSorteada) {
        for (i = 0; i < palavraAtual.length; i++) {
            letraAtual = palavraAtual[i];
            letra = letra.toLowerCase();



            if (letraAtual == letra) {
                palavraDisplay = palavraDisplay.split("");

                palavraDisplay[i] = letra;

                palavraDisplay = palavraDisplay.join("");


                document.getElementById("palavraSorteadaText").innerText = palavraDisplay;


            }
            if (palavraDisplay == palavraAtual) {
                document.getElementById("imagemDaForca").src = "./data/images/Forca-6.png";
                document.getElementById("botaoSorteio").innerText = "Jogar Novamente";
                document.getElementById("botaoSorteio").disabled = false;
            }
            if (!palavraAtual.includes(letra)) {
                contagemDeErros++;
                switch (contagemDeErros) {
                    case 0:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-0.png";
                        break;
                    case 1:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-1.png";
                        break;
                    case 2:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-2.png";
                        break;
                    case 3:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-3.png";
                        break;
                    case 4:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-4.png";
                        break;
                    case 5:
                        document.getElementById("imagemDaForca").src = "./data/images/Forca-5.png";
                        document.getElementById("palavraSorteadaText").innerText = "Você perdeu"
                        document.getElementById("botaoSorteio").innerText = "Tente Novamente";
                        document.getElementById("botaoSorteio").disabled = false;
                        break;
                }
                break
            }

        }
    }
    else {
        document.getElementById("palavraSorteadaText").innerText = "Você deve sortear uma palavra antes de começar a jogar";
    }
}
function mostrarDica() {
    if(palavraFoiSorteada){
        document.getElementById("botaoDica").innerText = dicaAtual;
    }
    else{
        document.getElementById("botaoDica").innerText = "Dica ^^^^";
    }
}