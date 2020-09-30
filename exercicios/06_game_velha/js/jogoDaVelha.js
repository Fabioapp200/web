var vezP1;

function jogar(numeroDaCasa)
{
    console.log(numeroDaCasa);
    document.getElementById(numeroDaCasa).innerText=("Y");
    if(vezP1)
    {
        document.getElementById(numeroDaCasa).innerText=("X");
        vezP1=0;
    }
    else
    {
        document.getElementById(numeroDaCasa).innerText=("O");
        vezP1=1;
    }
}

function inicioJogadorAleatorio()
{
    var jogadorSorteado = Math.floor(Math.random() * 2);

}
function jogarNovamente()
{
    for(i=0;i<9;i++)
    {
        numeroDaCasa=i;
        document.getElementById(numeroDaCasa).innerText=("u");
    }
}


function trocarTxt()
{
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

/* function vitoria()
{
    if(document.getElementById("1"&&"2"&&"3")||("4"&&"5"&&"6")||("7"&&"8"&&"9")||
                            ("1"&&"4"&&"7")||("2"&&"5"&&"8")||("3"&&"6"&&"9")||
                            ("1"&&"5"&&"9")||("3"&&"5"&&"7")||)
} */