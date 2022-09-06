//# Exercício 2

//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa 
//terminou ou não o ensino médio, e um booleano que responda 
//se a pessoa está cursando alguma faculdade.

var idade = prompt("qual é a sua idade?")
var ensinoM = prompt("você terminou o ensino médio? S/N")
if (ensinoM == "s") {
    var ensinoM = true
} else {
    var ensinoM = false
}
var faculdade = prompt("você está na faculdade? S/N")
if (faculdade == "s") {
    var faculdade = true
} else {
    var faculdade = false
}

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
//- Se a pessoa terminou o ensino médio;
//- Se a pessoa NÃO está cursando alguma faculdade;
if(idade >= 18) {
    console.log("a pessoa tem mais de 18 anos")
} else {
    console.log("você é de menor!")
}
if( ensinoM == true) {
    console.log("a pessoa terminou o ensino médio")
} else {
    console.log("você não terminou o ensino médio")
} 
//Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para 
//imprimir que a afirmacão não é verdadeira.
if( faculdade == true && idade >=18 ) {
    console.log("parabéns, você está na universidade")
} else {
    console.log("que triste, você não está na universidade")
}

