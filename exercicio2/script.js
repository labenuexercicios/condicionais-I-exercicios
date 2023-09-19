/* # Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira. */
/* let idade = prompt("Qual é a sua idade?")
function cursaFaculdade (idade, ensinoMedio){
    
    if(idade >= 18){
        return "é maior de idade"
    } else if (idade === true){
        return "Está na faculda"
    }
    if ( ensinoMedio === true) {
        return true
    } 
} cursaFaculdade(10,);
console.log(`Minha idade é ${idade}`)
console.log (cursaFaculdade(10)) */


let idade = prompt("Qual é a sua idade?");
let terminouEnsinoMedio = prompt("Você terminou o ensino médio? \n(Responda com 'sim' ou 'nao')");
let cursaFaculdade = prompt("Você está cursando alguma faculdade? \n(Responda com 'sim' ou 'nao')");

function estaNaFaculdade (idade, terminouEnsinoMedio, cursaFaculdade){
// Verifique se a pessoa tem 18 anos ou mais
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}

// Verifique se a pessoa terminou o ensino médio
if (terminouEnsinoMedio.toLowerCase() === "sim") {
    console.log("Você terminou o ensino médio.");
} else {
    console.log("Você não terminou o ensino médio.");
}

// Verifique se a pessoa NÃO está cursando alguma faculdade
if (cursaFaculdade.toLowerCase() === "nao") {
    console.log("Você não está cursando nenhuma faculdade.");
} else {
    console.log("Você está cursando uma faculdade.");
}
} estaNaFaculdade(idade, terminouEnsinoMedio, cursaFaculdade);

/******************************************************************/
