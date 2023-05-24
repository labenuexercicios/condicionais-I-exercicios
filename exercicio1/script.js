
let numero = Number(prompt("Digite um número"))

function recebeNumero (numero) {
    if (numero % 2 === 0){
        return("número é par")
}else
        return("número ímpar")
}
console.log(recebeNumero(numero))
