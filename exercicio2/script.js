const funcao =(idade, ensinoMedio, isCursandoOutraFaculdade)=>{



if(idade>=18){
    console.log("A pessoa é maior de idade")
}else{console.log("A pessoa é menor de idade")
	}

    if (ensinoMedio) {
        console.log("Terminou o ensino médio")
        
    } else {console.log("Não terminou o ensino médio")}

    if (isCursandoOutraFaculdade) {
        console.log("Está cursando faculdade")
        
    } else {console.log("Não está cursando faculdade")}
}

funcao (10, true, false)