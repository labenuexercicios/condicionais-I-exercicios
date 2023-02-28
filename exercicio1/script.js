/*

Crie uma função que receba uma const numérica qualquer. 
Crie um `if` para verificar se o número guardado na const é **par**. Caso seja,
 a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.
 */

 function ePar (num) {
    if(num % 2 === 0) {
        console.log(`O número é par`)
    } else { 
        console.log(`O número não é par`)
    }
 }

 ePar(4)
 
 