// # Exercício 2

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


let idade = Number(25)
let terminouEM = false
let isCursandoOutraFaculdade = false

// - Se a pessoa tem 18 anos ou mais;
if(idade >= 18)
{
    console.log("voce é maior de idade")
}
else 
{
	console.log("voce é menor de idade")
}

// - Se a pessoa terminou o ensino médio;
if(terminouEM === true)
{
    console.log("voce é formado no ensino médio")
}
else 
{
	console.log("voce não é formado no ensino médio")
}

// - Se a pessoa NÃO está cursando alguma faculdade;
if(isCursandoOutraFaculdade === false)
{
    console.log("voce não está cursando faculdade")
}
else 
{
	console.log("voce esta cursando faculdade")
}