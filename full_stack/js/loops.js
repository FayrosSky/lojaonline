/*
    Loops são usados para iterar sobre coleções de dados ou para repetir uma tarefa até que uma condição específica seja atendida. Existem vários tipos de loops em JavaScript, cada um com suas características e usos específicos.

*/

/*
    for (inicialização; condição; incremento){
        //Código a ser executado em cada iteração
    }

*/

//Exemplo de loop for:
for (let i = 0; i < 5; i++){
    console.log("Iteção número: " + i);
}

/*  Explicação: 
    let i = 0; : inicialização da variável de controle do loop
    i < 5; : condição que deve ser verdadeira para que o loop continue executando
    i++; : Incremento da variável de controle após cada iteração
    console.log("Iteção número: " + i); : Código que será executado em cada iteração

*/

//Exemplo Loop While
/*
    O loop whie executa um bloco de código enquanto uma condição especificada é verdadeira. É útil quando o número de iterações não é conhecido previamente.
*/

//Estrutura do lopp while:
/*while (condição) { 
    //código a ser executado enquanto a condição for verdadeira
}
*/

//Exemplo de Loop while:
let contador = 0;
while (contador < 5) { 
    console.log("contagem: " + contador);
    contador++;
}

/*Explicação:
    let contador = 0; : Inicialização da variável de controle
    contador < 5.: Condição que deve ser verdadeira para que o loop continue executando
    console.log("Contagem: " + contador); : Código que será executado em cada iteração
    contador++; : incremento da variável de controle após cada iteração
*/

/* Loop do...while
    O loop do...while é semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição

    Estrutura do Loop do...while:
    do {
        //Código a ser executado
    } while(condição);
*/

//Exemplo de Loop do...while:
let numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);







