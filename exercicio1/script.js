/* # Exercício 1

Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console. */

function verificaPar (number){
    if (number % 2 === 0 )
    return "número é par"
} 
console.log("Número é par?") 
console.log(verificaPar(10))