function deOndeVcVem() {
    const nacionalidade = prompt("Escreva aqui sua nacionalidade")

    let nacionalidadeAceitas = [
        "Brasileira",
        "Argentina",
        "Uruguaia",
        "Chilena",
        "Colombiana"
    ]
    if (nacionalidade === "Brasileira") {
        return "Nacionalidade é " +  nacionalidadeAceitas[0]
    } else if (nacionalidade === "Argentina") {
        return "Nacionalidade é " +  nacionalidadeAceitas[1]
    } else if (nacionalidade === "Uruguaia") {
        return "Nacionalidade é " + nacionalidadeAceitas[2]
    } else if (nacionalidade === "Chilena") {
        return "Nacionalidade é " + nacionalidadeAceitas[3]
    } else if (nacionalidade === "Colombiana") {
        return "Nacionalidade é " + nacionalidadeAceitas[4]
    } else {
        return "Nacionalidade não corresponde a nenhuma das possibilidades"
    }
}


const resultado = deOndeVcVem()
console.log(resultado)