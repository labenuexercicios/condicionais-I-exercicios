let nacionalidade = prompt("Escreva aqui sua nacionalidade")

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade
=== "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {
    console.log(nacionalidade[0].toUpperCase() + nacionalidade.substring(1))
} else {
    console.log("Nacionalidade não encontrada.")
}