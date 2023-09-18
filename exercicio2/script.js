// # Exercício 2
// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.
// <details>
// <summary>Exemplo</summary>
// Caso a primeira pessoa tenha idade >= 18:
// <b>"A pessoa é maior de idade"</b>
// e caso não seja:
// <b>"A pessoa é menor de idade"</b>
// </details>

// let idade = 18
// let grau2 = true
// let grau3 = true
function cadEscolar(idade,grau2,grau3) {
if(idade >= 18){
  console.log(`A pessoa é maior de idade e tem ${idade} anos.`);
} else{
  console.log((`A pessoa é menor de idade e tem ${idade} anos.`));
}
if(grau2 === true){
  console.log(`A pessoa informou que tem o segundo grau.`);
} else {
  console.log(`A pessoa informou que não tem o segundo grau.`);
}
if ((grau2 === true) && (grau3 === true)){
  console.log(`A pessoa informou que está cursando a faculdade.`);
} else{
  console.log(`A pessoa não está cursando a faculdade.`);
}
}

cadEscolar(18,true,false)