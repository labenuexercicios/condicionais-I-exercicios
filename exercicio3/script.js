let nacionalidade = prompt("Digite aqui sua nacionalidade")


const brasileira = "brasileira"

const argentina = "argentina"

const uruguaia = "uruguaia"

const chilena = "chilena"

const colombiana = "colombiana"

if (nacionalidade === brasileira || argentina || uruguaia || chilena || colombiana) {
console.log("Sua nacionalidade é", nacionalidade)
}





// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` 
// é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir 
// "nacionalidade não encontrada"
//  caso o valor de `nacionalidade` não corresponda a nenhum dos valores.