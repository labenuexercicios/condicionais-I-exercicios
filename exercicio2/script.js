let idade = 17;
let isEnsinoMedio = isEnsinoMedio >= 17;
let isCursandoOutraFaculdade = true;


if(idade >=18){
    console.log('1: É maior de idade')
}else{
    console.log('1: Não é maior de idade')
}

if(isEnsinoMedio && idade >=18){
    console.log('2: Terminou o Ensino Médio')
}else{
	console.log('2: Não terminou o Ensino Médio')
}

if(isCursandoOutraFaculdade && isEnsinoMedio && idade >=16){
    console.log('3: Está cursando alguma faculdade')
}else{
    console.log('3: NÃO está cursando alguma faculdade')
}



// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>