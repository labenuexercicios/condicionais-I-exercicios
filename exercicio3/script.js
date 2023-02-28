/* Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem:
 "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade
 guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console.
  O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.
*/


function nacionalidade() {
    const suaNacionalidade = prompt("Qual sua nacionalidade?")

    if (suaNacionalidade.toLowerCase() === 'brasileira' || suaNacionalidade.toLowerCase() === 'brasileiro') {
        console.log(`Você é brasileiro (a)`)
    } else if (suaNacionalidade.toLowerCase() === 'argentina' || suaNacionalidade.toLowerCase() === 'argentino') {
        console.log(`Você é argentino (a)`)
    } else if (suaNacionalidade.toLowerCase() === 'uruguaia' || suaNacionalidade.toLowerCase() === 'uruguaio') {
        console.log(`Você é uruguaio (a)`)
    } else if (suaNacionalidade.toLowerCase() === 'chilena' || suaNacionalidade.toLowerCase() === 'chileno') {
        console.log(`Você é chileno (a)`)
    }
    else if (suaNacionalidade.toLowerCase() === 'colombiana' || suaNacionalidade.toLowerCase() === 'colombiano') {
        console.log(`Você é colombiano (a)`)
    }
    else {
        console.log(`Você não é brasileiro (a), nem argentino (a), nem uruguaio (a), nem chileno (a), nem colombiano (a)`)
    }
}

nacionalidade()
