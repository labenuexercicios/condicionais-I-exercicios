// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

//let num = 10
function paridade(num) {
  if (num % 2 == 0){
    console.log(`o número ${num} é par.`);
  } else {
    console.log(`o número ${num} é impar.`);
  }  
}
paridade(11)