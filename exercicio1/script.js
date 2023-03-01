// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.


function verificarNumero(num){
  if (num %2 ===0){
    return "o num é par"
  } else {
    return "o num é impar"
  }
}

 console.log(verificarNumero(5))
// console.log(verificarNumero(6))

