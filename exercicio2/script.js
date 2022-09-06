let idade = prompt("Digite a sua idade");
let isTerminouEnsinoMedio = confirm("terminou o ensino médio");
let isCursandoAlgumaFaculdade = false

if (idade >= 18) {
  console.log("A pessoa é maior de idade");
} else {
  console.log("A pessoa é menor de idade");
}

if (isTerminouEnsinoMedio) {
  console.log("A pessoa ja terminou o ensino médio");
  isCursandoAlgumaFaculdade = confirm("Está cursando alguma faculdade?");
} else {
  console.log("A pessoa ainda não terminou o ensino médio");
}

if (isCursandoAlgumaFaculdade) {
  console.log("A pessoa ja cursou a faculdade");
} else {
  console.log("A pessoa ainda não cursou a faculdade");
}
