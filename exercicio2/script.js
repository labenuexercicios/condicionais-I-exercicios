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


const idade = prompt ("Qual sua idade?")
if (idade>= 18){
   alert("Pessoa é maior de idade!")
    console.log(idade);

   const ensmedio = confirm ("Já terminou ensino médio?")

if (ensmedio === true){

    alert("Terminou ensino médio")
    console.log("Finalizou o ensino médio")

    const faculdade = confirm("está cursando faculdade?")

    if (faculdade === true){
    alert("Está cursando faculdade")
console.log("Está cursando faculdade")
}
else{

    alert("Não está cursando ensino superior")
    console.log("Não está cursando ensino superior")
}




}

else{
    alert("Não terminou o ensino médio")
    console.log("Não terminou o ensino médio")
}


} 
else{
    alert("Pessoa menor de idade")
    console.log(idade + " Anos")
}

