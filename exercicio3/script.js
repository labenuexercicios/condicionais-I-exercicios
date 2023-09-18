function deOndeVcVem() {
    const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLocaleLowerCase()


    let nacionalidadeAceitas = [
        "brasileira",
        "argentina",
        "uruguaia",
        "chilena",
        "colombiana"
    ]
    
    if (nacionalidade === "brasileira") {
        return "Nacionalidade é Brasileira" 
    } else if (nacionalidade === "argentina") {
        return "Nacionalidade é Argentina"
    } else if (nacionalidade === "uruguaia") {
        return "Nacionalidade é Uruguaia"
    } else if (nacionalidade === "chilena") {
        return "Nacionalidade é Chilena"
    } else if (nacionalidade === "colombiana") {
        return "Nacionalidade é Colombiana"
    } else {
        return "Nacionalidade não corresponde a nenhuma das possibilidades"
    }
}


const resultado = deOndeVcVem()
console.log(resultado)
