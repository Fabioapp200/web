var palavraAtual;
var dicaAtual;
var letra;
var palavraFoiSorteada;
var palavraDisplay;


function sortearPalavra() {
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

    var dicas = ["fruta",
        "animal grande",
        "marca de carro",
        "acessório para celular",
        "periférico de computador",
        "esporte",
        "profissão",
        "tipo de competição",
        "animal pequeno",
        "animal aquático"]


    var sorteio = Math.floor(Math.random() * palavras.length);

    palavraAtual = palavras[sorteio];
    dicaAtual = dicas[sorteio];
    palavraFoiSorteada = 1;

    document.getElementById("palavraSorteadaText").innerText = "";
    
    palavraDisplay = palavraAtual;

    for (i = 0; i<palavraAtual.length; i++)
    {
        document.getElementById("palavraSorteadaText").innerText = document.getElementById("palavraSorteadaText").innerText + "_";
        palavraDisplay = palavraDisplay.replace(palavraDisplay[i],"_")
    }

    console.log(palavraAtual);
    console.log(palavraDisplay);


}

 function tentarLetra(letra) 
{
    if(palavraFoiSorteada)
    {
        for (i = 0; i < palavraAtual.length; i++) 
        {
            letraAtual = palavraAtual[i];
            letra = letra.toLowerCase();
            
            if (letraAtual == letra)
            {
                console.log(i);
                
                palavraDisplay = palavraDisplay.split("");
                
                palavraDisplay[i] = letra;

                palavraDisplay = palavraDisplay.join("");

                document.getElementById("palavraSorteadaText").innerText = palavraDisplay;
            }
            
        } 
    }
    else
    {
        document.getElementById("palavraSorteadaText").innerText = "Sorteie uma palavra estupido"
    }
    
} 
