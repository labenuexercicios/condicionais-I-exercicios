
//Exercício 1
//Crie uma função que receba uma const numérica qualquer. Crie um if para verificar se o número guardado na const é par. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.
/*
const num = parseInt(prompt("digite um número"));

function numeroQualquer (num) {
    if(num % 2 === 0){
        console.log("O número é par");
    }
    else{
        console.log("O número é ímpar");
    }

}
numeroQualquer(num);
*/


//Exercício 1
//Crie uma função que receba uma const numérica qualquer. Crie um if para verificar se o número guardado na const é par. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.
//PODERIA FAZER ASSIM TAMBÉM
function number (numero) {
   const condicao = numero;
    if (condicao % 2 === 0){
        console.log("O número é par");
    }
    else{
        console.log("O número é ímpar");
    }
}
number(12);













