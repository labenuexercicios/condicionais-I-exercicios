function tresValores() {
    const idade = 35;
    const terminouOEnsinoMedio = true;
    const estaNaFaculdade = false;

    if (idade >= 18) {
        if (terminouOEnsinoMedio) {
            if (estaNaFaculdade) {
                return true
            } else {
                return "A afirmação não é verdadeira"
            }
        }
    }
}

const resultado = tresValores()
console.log(resultado);