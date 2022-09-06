let idade = Number(prompt("Qual sua idade?"));
let isEnsinoMedio = confirm("Já concluiu o ensino médio?");
let isCursandoOutraFaculdade = confirm("Está cursando faculdade?");;

if(idade>=18){
    console.log("É maior de idade!")
}else{
	console.log("É menor de idade!")
}

if(isEnsinoMedio){
    console.log("Concluiu o ensino médio!")
}else{
	console.log("Ainda não tem diploma do ensino médio!")
}

if(!isCursandoOutraFaculdade){
    console.log("Ainda não está cursando uma faculdade!")
}else{
	console.log("Está cursando uma faculdade!")
}


// // Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.