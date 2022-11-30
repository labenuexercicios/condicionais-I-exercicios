function verificainformacoes (dianascimento2, mesnascimento2, anonascimento2, cem, cf){
    const anoatual = 2022
    const diaatual = 30
    const mesatual = 11
    let resultadoano
    let resultadocem
    let resultadocf

    if(anoatual - anonascimento2 >= 18){
        if(mesatual >= mesnascimento2 && diaatual >= dianascimento2){
        resultadoano = "A pessoa é maior de idade"
        console.log(resultadoano)
        }
        else{
            resultadoano = "A pessoa é menor de idade."
            console.log(resultadoano)
        }
    }
    else{
        resultadoano = "A pessoa é menor de idade."
        console.log(resultadoano)
    }

    if(cem === true){
        resultadocem = "A pessoa terminou o ensino médio."
        console.log(resultadocem)
        if(cf === true){
            resultadocf = "A pessoa esta cursando/cursou a faculdade."
            console.log(resultadocf)
        }
        else{
            resultadocf = "A pessoa não esta cursando/cursou a faculdade."
            console.log(resultadocf)
        }
    }
    else{
        resultadocem = "A pessoa não terminou o ensino médio."
        console.log(resultadocem)
    }
}


let dianascimento = Number(prompt("Digite o dia de nascimento"))
let mesnascimento = Number(prompt("Digite o mes de nascimento"))
let anonascimento = Number(prompt("Digite o ano de nascimento"))
let ensinomediocompleto = confirm("Já terminou o ensino médio? - Clique em ´okay´ para sim, ou ´cancelar´ para não")
let isCursandoOutraFaculdade = confirm("Está cursando ou ja cursou alguma faculdade? - Clique em ´okay´ para sim, ou ´cancelar´ para não")

verificainformacoes(dianascimento, mesnascimento, anonascimento, ensinomediocompleto, isCursandoOutraFaculdade)

