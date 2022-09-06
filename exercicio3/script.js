let nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase();

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {

       console.log(`Sua nacionalidade é ${nacionalidade}.`);
} else {

    console.log("Nacionalidade não encontrada.")
}