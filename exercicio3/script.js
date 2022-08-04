let nacionalidade = prompt("Escreva aqui a sua nacionalidade:")

if (nacionalidade === "brasileiro" || nacionalidade === "brasileira"){
    console.log("Sua nacionalidade é brasileira.")
}else if (nacionalidade === "argentino" || nacionalidade === "argentina"){
    console.log("Sua nacionalidade é argentina.")
}else if (nacionalidade === "uruguaio" || nacionalidade === "uruguaia"){
    console.log("Sua nacionalidade é uruguaia.")
}else if (nacionalidade === "chileno" || nacionalidade === "chilena"){
    console.log("Sua nacionalidade é chilena.")
}else if (nacionalidade === "colombiano" || nacionalidade === "colombiana"){
    console.log("Sua nacionalidade é colombiana.")
}else{
    console.log("Nacionalidade não encontrada.")
}