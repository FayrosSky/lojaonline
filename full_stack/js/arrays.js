/*
    Array: permite armazenas múltiplos valores em uma única variável, facilitando a manipulação e o aesso a esses dados.
    Um array é uma lista ordenada de valores, onde cada valor pode ser acessado por um índice numérico. 
    
    Existem várias formas de se criar arrays em js. A forma mais comum é utilizando colchetes []

*/
//let frutas = ["Maça", "Banana", "Laranja"];
//console.log(frutas); //["Maça", "Banana", "Laranja"]

//Acessando elementos do array

/*
let primeiraFruta = frutas[0];
let segundaFruta = frutas[1];
let terceiraFruta = frutas[2];

console.log(primeiraFruta); //Maçã
console.log(segundaFruta);  //Banana
console.log(terceiraFruta); //Laranja

/*
    Modificando Elementos de um array
*/

/*
frutas[1] = "Morango";
console.log(frutas); // ["Maçã", "Morango", "Laranja"]

*/

/*
    Métodos de Array comuns
    push(): Adiciona um ou mais elementos ao final do array
    pop(): Remove o último elemento do array
    shift(): Remove o primeiro elemento do array
    unshift(): Adiciona um ou mais elementos ao início do array
    length: retorna o número de elementos do array
*/

/* Exemplos de Métodos de Array: */

let frutas = ["Maçã", "Banana", "Laranja"];

// Adiciona um elemento ao final do array
frutas.push("Uva");
console.log(frutas);

//Removendo o último elemento do array
frutas.pop();
console.log(frutas); // ["Maçã", "Banana", "Laranja"];

// Removendo o primeiro elemento do array
frutas.shift();
console.log(frutas);  // ["Banana", "Laranja"]

// Adicionando um elemento ao início do array
frutas.unshift("Abacaxi");
console.log(frutas); // ["Abacaxi", "Banana", "Laranja"]

// Obtendo o comprimento do array
let tamanho = frutas.length;
console.log(tamanho);

/* 
    Iterando sobre Arrays: Podemos iterar sobre os elementos de um array usando loops, como for ou foreach
*/

//Exemplo de Iteração com for

for (let i = 0; i < frutas.length; i++) { // Itera sobre cada índice do array frutas
    console.log(frutas[i]); // Exibe cada elemento do array
}

// Exemplo de iteração com forEach:

frutas.forEach(function (fruta) { // Itera sobre cada elemento do array
    console.log(fruta); //Exibe cada elemento do array no console
});







