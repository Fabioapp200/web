function palavraSorteada()
{  
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


    var sorteio = Math.floor(Math.random()*palavras.length);
    return palavras[sorteio]
    
}