/*# Exercício 1

Crie um código que receba uma const numérica qualquer. 
Crie um `if` para verificar se o número guardado na const
 é **par**. Caso seja, imprima no console a mensagem: "o número é par".*/

const num = prompt("qual número?")

if (num%2 == 0) {
    console.log("o número é par");
} else {
    console.log("o número é impar")
}
