//Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

//Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

const dados = (idade, fazEnsinoMedio, fazFaculdade) => {
    if (idade >= 18){
        console.log(`A pessoa é maior de idade.`)
    } else {
        console.log(`A pessoa não é maior de idade`)
    }

    if ( fazEnsinoMedio) {
        console.log(`A pessoa terminou o ensino médio`)
    } else {
        console.log(`A pessoa não terminou o ensino médio`)
    }

    if (fazFaculdade) {
        console.log(`A pessoa faz faculdade`)
    } else {
        console.log(`A pessoa não faz faculdade`)
    }
}

dados(31, true, false)
dados(17, false, true)
dados(15, false, false)
dados(23562, true, true)