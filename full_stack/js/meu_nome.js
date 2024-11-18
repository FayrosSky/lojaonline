const nome = "Davyd";
console.log(nome);

let idade = 31;
console.log(idade);

const cidade = "Theresina";
console.log(cidade);

//const sobrenome = "Lucas";
//sobrenome = "Mesquita";


//Escopo de `var`
/*
    A palavra-chave `var` possui escopo de função, o que signifia que uma variável declarada com 'var' dentro de uma função é acessível em toda a função, mesmo dentro de blocos como `if`ou `for`. Por exemplo:
*/

function exemplorVar() {
    var x = 10;
    if (true) {
        var x = 20; //mesma variável
        console.log(x); //20
    }
    console.log(x); //20
}
exemplorVar();

/*
    Neste caso, a variável `x`é sobrescrita dentro do bloco `ìf`, afetando sua referência fora dele.
*/


/*Escopo de `let`: A palavra-chave `let`respeita o escopo de bloco. Isso significa que uma variável declarada com `let`dentro de um bloco só pode ser acessada dentro desse bloco: */

function exemploLet() {
    let y = 10;
    if (true){
        let y = 20; // nova variável
        console.log(y); // 20
    }
    console.log(y); // 10
}
exemploLet();

/*
Escopo de `const`: Assim como `let`, a palavra-chave `const`também tem escopo de bloco, mas não permite reatribuição. Uma vez que um valor é atribuído a uma constate, ele não pode ser alterado:
*/

function exemploConst(){
    const z = 20;
    if (true) {
        const z = 40; //nova constante
        console.log(z); //40
    }
    console.log(z); //30
}
exemploConst();

//Prática com Loops

/*Exemplo com Loop usando `let`: Ao usar um loop. o compartamento de `let`se torna evidente. Cada iteração do loop pode ter sua própria instância da variável:
*/

for (let i = 0; i < 3; i++){
    console.log(i);
}
//console.log(i); //ReferenceError: i is not defined

/*Exemplo de loop usando o `var`: */

for (var j = 0; j < 3; j++){
    console.log(j); // 0, 1, 2
}
console.log(j); //3 //aqui, após o loop, a variável `j`ainda existe e possui o valor final da iteração.

/*
    Resumo:
    
    let: quando precisar de variáveis que mudam ao longo do tempo e de devem ter escopo limitado ao bloco

    const: para valores que não devem mudar após a atribuição inicial 

    Evite usar `var`devido ao seu escopo global ou de função que pode cuasar confusões e bugs no código

*/
















