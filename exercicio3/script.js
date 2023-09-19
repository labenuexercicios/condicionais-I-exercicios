/* # Exercício 3

Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas.  */

let nacionalidade = prompt("Escreva aqui sua nacionalidade.")

function verificarNacionalidade (nacionalidade) {
    if (nacionalidade === "brasileira") {
    console.log("Naciolalidade: brasileira")
    } else if(nacionalidade === "argentina"){
        console.log("Naciolalidade: argentina")
    } else if(nacionalidade === "uruguaia"){
        console.log("Nacionalidade: uruguaia")
    } else if(nacionalidade === "chilena"){
        console.log("Nacionalidade: chilena")
    } else if(nacionalidade === "colombiana") {
    }    else 
        console.log("Nacionalidade não encontrada")
    }
 verificarNacionalidade(nacionalidade)