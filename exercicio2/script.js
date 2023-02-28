// EXERCICIO 2


function verificaDados (){
    const qualIdade = Number(prompt("Qual é a sua idade?"))
    const terminouEnsinoMedio = confirm("Você terminou o ensino médio?")
    const cursandoEnsinoSuperior = confirm("Você cursa o ensino superior?")

    if (qualIdade >= 18){
        console.log("A pessoa é maior de idade")
    } else {
        console.log("A pessoa é menor de idade")
    }

    if (terminouEnsinoMedio === true){
        console.log("A pessoa terminou o ensino médio")
    } else if (terminouEnsinoMedio === false){
        console.log("A pessoa não terminou o ensino médio")
    }

    if (cursandoEnsinoSuperior === true){
        console.log("A pessoa esta cursando o ensino superior")
    } else if (cursandoEnsinoSuperior === false){
        console.log("A pessoa não esta cursando ensino superior")
    }

    
}

verificaDados()