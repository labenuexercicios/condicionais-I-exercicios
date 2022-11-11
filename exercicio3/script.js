let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()
function ex3(nacionalidade) {
    if (nacionalidade === "brasileira") {
        return nacionalidade
    } else if (nacionalidade === "argentina") {
        return nacionalidade
    } else if (nacionalidade === "uruguaia") {
        return nacionalidade
    } else if (nacionalidade === "chilena") {
        return nacionalidade
    } else if (nacionalidade === "colombiana") {
        return nacionalidade
    } else {
        return "nacionalidade não encontrada"
    }
}
console.log(ex3(nacionalidade))