function print(label){
    console.log(label)
}

function contador(frase_separada){
    let contador = 0;
    for (let letra of frase_separada){
        contador = contador + 1
    }
    return contador
}

function separar_letras(frase){
   let frase_separada = frase.split('')
   return frase_separada
}