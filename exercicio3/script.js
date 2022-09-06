const nacionalidadePadrao = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
let nacionalidade = prompt("Escreva aqui a sua nacionalidade?").toLowerCase()

if(nacionalidadePadrao.includes(nacionalidade)){
    console.log("Nacionalidade:", (nacionalidade))

}else {
    console.log('Nacionalidade não encontrada')
}