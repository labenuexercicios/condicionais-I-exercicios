// # Exercício 3

// Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

const nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase()

function pais (nacionalidade) {

if(nacionalidade === `brasileira` || nacionalidade === `brasileiro`){

    console.log(`Você é Brasileiro(a)`);
}else if(nacionalidade === `argentina` || nacionalidade === `brasileiro`){

    console.log(`Você é Argentino(a)`);
}else if(nacionalidade === `uruguaia` || nacionalidade === `uruguaio`){

    console.log(`Você é Uruguaio(a)`);
}else if(nacionalidade === `chilena` || nacionalidade === `chileno`){

    console.log(`Você é chileno(a)`);
}else if(nacionalidade === `colombiana` || nacionalidade === `colombiano`){

    console.log(`Você é colombiano(a)`);
}else{

    console.log(`Nacionalidade não encontrada.`);
}




}

console.log(pais);
