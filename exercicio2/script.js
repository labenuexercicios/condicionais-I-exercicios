const idade = +prompt("Insira a sua idade")
const ensinoMedio = prompt("Você concluiu o ensino médio? (Responda 'sim' ou 'não'")
const ensinoSuperior = prompt("Você está cursando uma faculdade? (Responda 'sim' ou 'não'")

const ensinoMedioRespota = ensinoMedio.toLowerCase()
const ensinoSuperiorResposta = ensinoSuperior.toLowerCase()

if (idade >= 18){
    console.log("A pessoa é maior de idade!")
 } else {
        console.log("A pessoa é menor de idade!")
    }

if (ensinoMedioRespota === "sim"){
    console.log("A pessoa concluiu o ensino médio!")
    }    else {
        console.log("A pessoa não concluiu o ensino médio!") 
}


if (ensinoSuperiorResposta === "sim"){
    console.log("A pessoa está cursando o ensino superior!")
} else {
        console.log("A pessoa não está cursando o ensino superior!")
} 
