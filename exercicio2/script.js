let idade = Number (prompt("Quantos Anos?"));
let terminouEnsinoMedio = confirm("Terminou o Ensino Medio?");
let cursandoFaculdade = confirm("Cursando Faculdade?");

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

if (terminouEnsinoMedio) {
  console.log("Ensino Medio Completo");
} else {
  console.log("Ensino Medio Incompleto");
}

if (cursandoFaculdade) {
  console.log("Cursando Faculdade");
} else {
  console.log("Nao esta cursando faculdade");
}
