import readlineSync from 'readline-sync'
import * as utils from './utils.js'  

function main(){

    let frase = "dknfdnfjndjfnjndfjndjfnjdfnjndjfnjdnfjndfjnjnfjdnfjndfjndjnfjdnjfndjfnjdnfjdnfj"    
    
    let letras = separar_letras(frase)

    let totalContador = contador(letras)

    print(letras)
    print(totalContador)
    
}

main()

