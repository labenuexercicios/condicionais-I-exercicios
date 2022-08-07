/*Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está 
cursando alguma faculdade.

Crie um if para cada variável, checando as seguintes afirmacões:

Se a pessoa tem 18 anos ou mais;
Se a pessoa terminou o ensino médio;
Se a pessoa NÃO está cursando alguma faculdade;
Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.*/

const idade = prompt("Informe sua idade")
const medio = prompt("Ensino médio concluído?")
const faculdade = prompt("Cursando alguma faculdade?")

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você não é maior de idade")
}

if(medio === "sim"){
    console.log("Ensino médio concluído")
}else{
    console.log("Ensino médio imncompleto")
}
if(faculdade === "sim"){
    console.log("Cursando ensino superior")
}else{
    console.log("Não cursa ensino superior")
}

