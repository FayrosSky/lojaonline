let frutas = ["maça", "pera", "uva", "laranja"];

console.log(frutas);

//acessando primeiro elemento do array
primeiro_elemento = frutas[0];

//acessando último elmento do array
ultimo_elemento = frutas[3];

console.log(primeiro_elemento);
console.log(ultimo_elemento);

//modificando o segundo elemento do array
frutas[1] = "banana";


console.log(frutas[1]);

frutas.push("abacaxi");

console.log(frutas);

frutas.shift();
console.log(frutas);

//iterando sobre o array usando o forEach
frutas.forEach(function (frutas){ 
    console.log(frutas);
});
