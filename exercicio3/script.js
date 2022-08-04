let nacionalidade = prompt("Em que pais voce mora")
nacionalidade = nacionalidade.toLowerCase()

if(nacionalidade === "brasil"){
    console.log("Voce é brasileiro/a")
}else if(nacionalidade === "colombia"){
    console.log("Voce é colombiano/a")
}else if(nacionalidade === "argentina"){
    console.log("Voce é argentino/a")
}else if(nacionalidade === "uruguai"){
    console.log("Voce é uruguaia/o")
}else if(nacionalidade === "chile"){
    console.log("Voce é chileno/a")
}else{
    console.log("Nacionalidade não encontrada")
}