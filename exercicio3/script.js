let nacionalidade = String(prompt(`
Escreva aqui sua nacionalidade
- brasileira
- argentina
- uruguaia
- chilena
- colombiana`).toLowerCase())

if (nacionalidade == "brasileira"){
    console.log(`Nacionalidade: ${nacionalidade} encontrada`)
}else if(nacionalidade == "argentina"){
    console.log(`Nacionalidade: ${nacionalidade} encontrada`)
} else if(nacionalidade == "uruguaia"){
    console.log(`Nacionalidade: ${nacionalidade} encontrada`)
} else if(nacionalidade == "chilena"){
    console.log(`Nacionalidade: ${nacionalidade} encontrada`)
} else if(nacionalidade == "colombiana"){
    console.log(`Nacionalidade: ${nacionalidade} encontrada`)
} else {
    console.log(`Nacionalidade não encontrada`)
}

console.log(nacionalidade)