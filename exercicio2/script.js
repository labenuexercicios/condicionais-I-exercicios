// Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

function informacoes (idade, ensMedio, faculdade){
  if ( idade >=18){
    console.log("tem 18")
  }else{
    console.log(" nao tem 18")
  } if (ensMedio === true){
    console.log("terminou")
  }else{
    console.log("nao terminou")
  } if (faculdade  === true){
    console.log("ta cursando")
  } else{
    console.log("nao ta curssando")
  }
}
informacoes( 10, false, false)


// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// Caso a primeira pessoa tenha idade >= 18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>
