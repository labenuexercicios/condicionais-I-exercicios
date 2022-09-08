let idade = prompt("Digite sua idade:")
let isEnsinoMedio = prompt("Responda com SIM ou NÃO, você terminou o ensino médio?")
let isCursandoOutraFaculdade= prompt("Responda com SIM ou NÃO, você está cursando alguma faculdade?")

if(idade>=18){
    console.log ("Você é maior de 18!")
}else{ 
    console.log("Você ainda não atingiu a maior idade!")
	
}

if(isEnsinoMedio==="NÃO"){
    console.log ("Você não terminou o ensino médio!")
}else{ 
    console.log("Você terminou o ensino médio!")
	
}

if(isCursandoOutraFaculdade==="SIM"){
    console.log ("Você está cursando faculdade!")
}else{ 
    console.log("Você não está cursando faculdade!")
	
}