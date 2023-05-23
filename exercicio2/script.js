function perguntas (idade, ensinoMedio, cursandoFaculdade){
    if(idade >= 18){
        alert("A pessoa é maior de idade")
    }
    else{
        alert("A pessoa é menor de idade")
    }
    if(ensinoMedio){
        alert("A pessoa terminou o Ensino Médio")
    }
    else{
        alert("A pessoa não terminou o Ensino Médio")
    }
    if(cursandoFaculdade){
        alert("A pessoa está cursando uma faculdade")
    }
    else{
        alert("A pessoa não está cursando uma faculdade")
    }
}
perguntas(20, true, false)