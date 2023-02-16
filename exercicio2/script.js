let idade = Number(prompt("Digite sua idade"));
let isTerminouEnsinoMedio = Boolean(prompt(`Você terminou o ensino médio? (Se sim, responda com "sim", se não, não preencha)`));
let isCursandoOutraFaculdade = Boolean(prompt(`Você está cursando alguma faculdade? (Se sim, responda com "sim", se não, não preencha)`));

console.log(`Respostas:
Idade: ${idade}
Ensino médio: ${isTerminouEnsinoMedio}
Faculdade: ${isCursandoOutraFaculdade}`)

if(idade >= 18){
    console.log(`A pessoa é maior de idade`)
}else if (idade < 18){
	console.log(`A pessoa não é maior de`)
}

if(isTerminouEnsinoMedio === true && idade >= 18){
	console.log(`Esta pessoa terminou o ensino médio`)
}else if(isTerminouEnsinoMedio === false || idade < 18){
    console.log(`Esta pessoa não terminou o ensino médio`)
}

if(isCursandoOutraFaculdade === true && isTerminouEnsinoMedio === true && idade >= 18){
	console.log(`Esta pessoa está cursando faculdade`)
}else if(isCursandoOutraFaculdade === false || isTerminouEnsinoMedio === false || idade < 18){
    console.log(`Esta pessoa não está cursando faculdade`)
}