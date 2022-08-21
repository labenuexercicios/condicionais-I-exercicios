const resposta = prompt('Escreva aqui sua nacionalidade').toLowerCase()

const nacionalidade = "brasileira" || "argentina" || "uruguaia" || "chilena" || "colombiana";
const nacionalidade2 = "brasileiro" || "argentino" || "uruguaio" || "chileno" || "colombiano";

if(resposta === nacionalidade){
    console.log(resposta)
}
else if(resposta === nacionalidade2){
    console.log(resposta)
}
else{
    console.log('Nacionalidade não encontrada')
}