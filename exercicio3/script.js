// EXERCICIO 3

function verificaNacionalidade (){
    const nacionalidade = prompt("Qual é a sua nacionalidade?")

    if (nacionalidade === "brasileira"){
        console.log("Você é brasileiro (a)")
    } else if (nacionalidade === "argentina"){
        console.log("Você é argentino")
    } else if (nacionalidade === "uruguaia"){
        console.log("Você é uruguaio")
    } else if (nacionalidade === "chilena"){
        console.log("Você é chileno")
    } else if (nacionalidade === "colombiana"){
        console.log("Você é colombiano")
    } else {
        console.log("Nacionalidade não encontrada")
    }
}

verificaNacionalidade()