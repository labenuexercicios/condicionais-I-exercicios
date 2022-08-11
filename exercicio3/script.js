const nacionalidade = prompt('Escreva aqui sua nacionalidade, Please!');
// if (nacionalidade === "brasileira") {
//     console.log("Brasileira");
//   } else if (nacionalidade === "argentina") {
//     console.log("Argentina");
//   } else if (nacionalidade === "uruguaia") {
//     console.log("Uruguaia");
//   } else if (nacionalidade === "chilena") {
//     console.log("Chilena");
//   } else if (nacionalidade === "colombiana") {
//     console.log("Colombiana");
//   } else {
//     console.log("Nacionalidade invalida");
//   }

  if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade
=== "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {
    console.log(nacionalidade[0].toUpperCase() + nacionalidade.substring(1))
} else {
    console.log("Nacionalidade não encontrada.")
}