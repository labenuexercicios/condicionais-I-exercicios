//Exercíio 2

//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio,
//e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = prompt("digite sua idade")
let ensinoMedio = prompt("Você terminou o ensino médio?")
let faculdade = prompt("Está cursando a faculdade?")

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("você é menor de idade")
}

if (ensinoMedio === "sim" && idade <= 18) {
    console.log("Você terminou o ensino médio")
} else {
    console.log("você não terminou o ensino médio")
}

if (faculdade === "sim" && ensinoMedio === "sim") {
    console.log("Você está cursando faculdade")
} else {
    console.log("Você não está cursando faculdade")
}