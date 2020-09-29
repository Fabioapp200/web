var palavraAtual;
var dicaAtual;
var letra;
var palavraFoiSorteada;
var palavraDisplay;
var contagemDeErros = 0;


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
                palavraDisplay = palavraDisplay.split("");
                
                palavraDisplay[i] = letra;

                palavraDisplay = palavraDisplay.join("");

                document.getElementById("palavraSorteadaText").innerText = palavraDisplay;
            }
            if (!palavraAtual.includes(letra))
            {
                contagemDeErros++;
                console.log(contagemDeErros);
                if (contagemDeErros == 5)
                {
                    document.getElementById("palavraSorteadaText").innerText = "Você perdeu";
                }
                break
            }
            
        } 
    }
    else
    {
        document.getElementById("palavraSorteadaText").innerText = "Sorteie uma palavra estupido"
    }
    
} 
