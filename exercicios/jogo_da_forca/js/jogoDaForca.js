function sorteioPalavra ()
{
    var sorteio = Math.floor(Math.random()*10);
}

var palavra = ["banana", "cavalo", "ferrari", "carregador", "mongolia", "basquete","catapora", "campeonato", "coelho", "ornitorrinco"];

function palavraSorteada(sorteio)
{
    switch (sorteio)
    {
        case 0: palavra = "banana";
            break;
        case 1: palavra = "cavalo";
            break;
        case 2: palavra = "ferrari";
            break;
        case 3: palavra = "carregador";
            break;
        case 4: palavra = "mongolia";
            break;
        case 5: palavra = "basquete";
            break;
        case 6: palavra = "catapora";
            break;
        case 7: palavra = "campeonato";
            break;
        case 8: palavra = "coelh";
            break;
        case 9: palavra = "ornitorrinco";
            break;
    }
}