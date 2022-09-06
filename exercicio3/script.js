let nacionalidade = prompt("Qual sua nacionalidade?").toLowerCase();

if (
  nacionalidade === "brasileiro" ||
  nacionalidade === "brasileira"
) {
  console.log("Brasil");
} else if (
  nacionalidade === "argentino" ||
  nacionalidade === "argentina"
) {
  console.log("Argentina");
} else if (
  nacionalidade === "colombiano" ||
  nacionalidade === "colombiana"
) {
  console.log("Colombia");
} else if (
  nacionalidade === "uruguaio" ||
  nacionalidade === "uruguaia"
) {
  console.log("Uruguai");
} else if (
  nacionalidade === "chileno" ||
  nacionalidade === "chilena"
) {
  console.log("Chile");
} else {
  console.log("Não Encontrado");
}
