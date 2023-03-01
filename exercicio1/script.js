function verificaPar() {
const numero = Number(prompt('Digite um número'))

    if (numero % 2 === 0) {
    return 'o número é par'
    } else {
    return ' o número é impar'
 }
}

console.log(verificaPar())
