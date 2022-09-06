let idade = Number(prompt("Qual é a sua idade?"));
let isTerminouMedio = confirm("Você terminou o ensino médio?");
let isCursandoOutraFaculdade = confirm("Você está cursando alguma faculdade?");

if (idade >= 18) {
  console.log("É igual ou maior de 18 anos.");
} else {
  console.log("É menor que 18 anos");
}

if (isTerminouMedio) {
  console.log("O usuario terminou o ensino médio");
} else {
  console.log("O usuário não terminou o ensino médio");
}

if (isCursandoOutraFaculdade) {
  console.log("O usuario está cursando uma faculdade");
} else {
  console.log("O usuario não está cursando uma faculdade");
}
