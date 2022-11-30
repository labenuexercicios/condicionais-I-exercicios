//Exercício 2
//Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

//Crie um if para cada variável, checando as seguintes afirmacões:

//Se a pessoa tem 18 anos ou mais;
//Se a pessoa terminou o ensino médio;
//Se a pessoa NÃO está cursando alguma faculdade;
//Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.

let idade = parseInt(prompt("Digite sua idade"));
let terminouEnsinoMedio = prompt("Concluiu o Ensino Médio? Responda true para sim, e false para não");
let cursandoOutraFaculdade = prompt("Está cursando alguma faculdade?Responda true para sim, e false para não");

function valores (idade, terminouEnsinoMedio, cursandoOutraFaculdade){
    if(idade >= 18) {
        console.log("É maior de idade");
    }
    else{
        console.log("É menor de idade");
    }

    if(terminouEnsinoMedio === true || terminouEnsinoMedio === "sim"){
        console.log("Concluiu o ensino médio");
    }
    else{
        console.log("Não concluiu o ensino médio");
    }

    if(cursandoOutraFaculdade != true || cursandoOutraFaculdade === "não"){
        console.log("Não está cursando uma faculdade");
    }
    else{
        console.log("Está cursando uma faculdade");
    }

    if(idade >= 18 && terminouEnsinoMedio === true && cursandoOutraFaculdade != true){
        console.log("Essa afirmação é verdadeira");
    }
    else{
        console.log("Essa afirmação é falsa");
    }
} 
valores(idade, terminouEnsinoMedio, cursandoOutraFaculdade)



















/*

if(){

}else{
	
}
*/