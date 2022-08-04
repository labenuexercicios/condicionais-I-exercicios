let nacionalidade = prompt("Digite aqui sua nacionalidade").toLowerCase()


if (nacionalidade === "brasileira" || nacionalidade === "brasileiro") {
console.log("Sua nacionalidade é", nacionalidade)
} else if (nacionalidade === "argentina" || nacionalidade === "argentino") {
    console.log("Sua nacionalidade é", nacionalidade)
} else if (nacionalidade === "uruguaia" || nacionalidade === "uruguaio") {
    console.log("Sua nacionalidade é", nacionalidade)
} else if (nacionalidade === "chilena" || nacionalidade === "chileno") {
    console.log("Sua nacionalidade é", nacionalidade)
} else if (nacionalidade === "colombiana" || nacionalidade === "colombiano") {
    console.log("Sua nacionalidade é", nacionalidade)
} else { console.log("Nacionalidade não encontrada")}



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