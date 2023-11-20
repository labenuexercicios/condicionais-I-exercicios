function nacionalidade(nacionalidade) {
  nacionalidade = prompt("Digite sua nacionalidade: ").toLowerCase();

  if (nacionalidade === "brasileira") {
    console.log("Você é do Brasil!");
  } else if (nacionalidade === "argentina") {
    console.log("Você é da Argentina!");
  } else if (nacionalidade === "uruguaia") {
    console.log("Você é do Uruguai!");
  } else if (nacionalidade === "chilena") {
    console.log("Você é do Chile!");
  } else if (nacionalidade === "colombiana") {
    console.log("Você é da Colômbia!");
  } else {
    console.log("Nacionalidade desconhecida :c");
  }
}
