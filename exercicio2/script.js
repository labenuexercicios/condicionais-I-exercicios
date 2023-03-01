const verificaIdadeEnsinoMedioFaculdade = (idade, ensinoMedio, faculdade) => {
    if(Number(idade) >= 18) {
        console.log(`A pessoa é maior de idade`)
     } else {
        console.log(`A pessoa é menor de idade`)
     }
    if (ensinoMedio) {
        console.log(`A pessoa concluiu o ensino médio`)
    } else {
        console.log(`A pessoa não concluiu o ensino médio`)
    }
    if (faculdade) {
        console.log(`A pessoa não está cursando faculdade`)
    } else {
        console.log(`A pessoa está cursando faculdade`)
    }
    if (idade >= 18 && ensinoMedio && faculdade) {
        console.log(`A pessoa tem 18 anos ou mais, concluiu o ensino médio e não está cursando alguma faculdade`)
    } else {
        console.log(`A pessoa não tem 18 anos ou não terminou o ensino médio ou está cursando alguma faculdade`)
    }
}    
verificaIdadeEnsinoMedioFaculdade(17, false, false)
verificaIdadeEnsinoMedioFaculdade(25, true, true)


