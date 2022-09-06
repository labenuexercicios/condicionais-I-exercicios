//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = 18
let isCursandoFaculdade = false
let isTerminouEnsinoMedio = true

//Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

if(idade > 18){
    console.log("maior de idade")
}else{
	console.log("menor de idade")
}
if(isTerminouEnsinoMedio === true){
    console.log("terminou ensino médio")
} else {
    console.log("não terminou ensino médio")
}
if(isCursandoFaculdade === true){
    console.log("terminou faculdade")
} else{
    console.log("não terminou faculdade")
}