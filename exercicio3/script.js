const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase()

function nacionalidade1 (){
if (nacionalidade === "brasileira"){
    console.log("brasileira")
}else if (nacionalidade === "argentina"){
    console.log("argentina")
}else if (nacionalidade === "uruguaia"){
    console.log("uruguaia")
}else if (nacionalidade === "chilena"){
    console.log("chilena")
}else if (nacionalidade === "colombiana"){
    console.log("colombiana")
}else
    console.log("nacionalidade não encontrada")
}
nacionalidade1(nacionalidade)
