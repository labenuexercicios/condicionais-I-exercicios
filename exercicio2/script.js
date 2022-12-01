/**Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que 
responda se a pessoa terminou ou não o ensino médio, e um booleano que 
responda se a pessoa está cursando alguma faculdade.

Crie um if para cada variável, checando as seguintes afirmacões:

    Se a pessoa tem 18 anos ou mais;
    Se a pessoa terminou o ensino médio;
    Se a pessoa NÃO está cursando alguma faculdade;

Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir
que a afirmacão não é verdadeira.
Exemplo */
const idade = Number(prompt("quantos anos você tem?"));
const ensinoMedio = confirm("você terminou o ensino medio?"); 
const faculdade = confirm("você terminou a faculdade?");


function academica (idade, ensinoMedio, faculdade){
    if(idade >= 18){
        console.log("voce si teim 18 anos")
    }else if(idade <= 18){
        console.log("voce ao tem 18 anos")
    }else if(ensinoMedio == true /*|| ensinoMedio == sim*/){
        console.log("voce terminou ensino Medio!")
    }else if(ensinoMedio == false /*|| ensinoMedio == nao*/){
        console.log("voce nao termino ensino Medio!")   
    }else if(faculdade == false /*|| faculdade == nao*/){
        console.log("voce nao esta cursando ninguma falculdade")
    }else{
        console.log("voce nao tem 18 anos, no terminou ensino medio y nao esta cursando nunguma faculdade!")
    }  
}

academica(idade, ensinoMedio, faculdade)
 