let idade = Number(prompt("Qual a sua idade?"))
let ensinoMedioCompleto = confirm("Você terminou o ensino médio?")
let fazFaculdade = confirm("Você está cursando faculdade?")

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