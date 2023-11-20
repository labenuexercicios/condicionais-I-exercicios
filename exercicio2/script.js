function checar(idade, ensinoMedio, cursandoFaculdade) {
  //==========//IDADE//==========//
  if (idade >= 18) {
    console.log("Maior que 18 anos.");
  } else if (idade < 18) {
    console.log("Nao é maior que 18 anos.");
  } else {
    console.log("Digite apenas números!");
  }
  //==========//ENSINO-MÉDIO//==========//
  if (ensinoMedio === true) {
    console.log("Ensino médio completo.");
  } else if (ensinoMedio === false) {
    console.log("Ensino médio incompleto.");
  } else {
    console.log("Comando inexistente");
  }
  //==========//FACULDADE//==========//
  if (cursandoFaculdade === true){
    console.log("Você está cursando faculdade.")
  } else if (cursandoFaculdade === false) {
    console.log("Você ñ está cursando uma faculdade.")
  } else {
    console.log("Comando inexistente")
  }

}

checar();
