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
let informePais = prompt('Informe seu pais').toLowerCase()

function nacionalidade(informePais) {
  if (informePais === 'brasil') {
    console.log(`Sua nacionalidade é brasileira`);
  } else if (informePais === 'Argentina') {
    console.log(`Sua nacionalidade é argentina`);
  } else if(informePais === 'Uruguai') {
    console.log(`Sua nacionalidade é uruguaia`);
  } else if (informePais === 'Chile') {
    console.log(`Sua nacionalidade é chilena`);
  } else if (informePais === 'Colombia') {
    console.log(`Sua nacionalidade é colombiana`);
  } else {
    console.log('nacionalidade não encontrada');
  }
} 
nacionalidade(informePais)
console.log('--------------------');

// let informePais2 = +(prompt('Informe seu pais'))
// switch (informePais2) {
//   case 1:
//     console.log(`Sua nacionalidade é brasileira`);
//     break;
//   case 2:
//     console.log(`Sua nacionalidade é argentina`);
//     break;
//   case 3:
//     console.log(`Sua nacionalidade é uruguaia`);
//     break;
//   case 1:
//     console.log(`Sua nacionalidade é chilena`);
//     break;
//   case 1:
//     console.log(`Sua nacionalidade é colombiana`);
//     break;
//   default:
//     console.log('nacionalidade não encontrada');
//     break;
// }