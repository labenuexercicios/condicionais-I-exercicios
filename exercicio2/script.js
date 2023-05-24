// Escreva uma função que receba três valores. 
//Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, 
//e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = Number(prompt("Qual a sua idade?"))
let ensinoMedioCompleto = confirm("Você terminou o ensino médio?")
let fazFaculdade = confirm("Você está cursando faculdade?")

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
//- Se a pessoa terminou o ensino médio;
//- Se a pessoa NÃO está cursando alguma faculdade;
function recebeValores (idade, ensinoMedioCompleto, fazFaculdade){
if (idade >= 18){
    console.log("A pessoa é maior de 18 anos")
}else
console.log("A pessoa é menor de idade")
if (ensinoMedioCompleto === true){
    console.log("A pessoa terminou o Ensino Médio")
}else
console.log("A pessoa não terminou o Ensimo Médio")
if (fazFaculdade === false){
    console.log("A pessoa não está cursando faculdade")
}else 
console.log("A pessoa está cursando faculdade")
}
recebeValores(idade, ensinoMedioCompleto, fazFaculdade)