
//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

let nacionalidade = prompt("Qual e sua nacinalidade?")
nacionalidade = nacionalidade.toLowerCase()

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

if (nacionalidade === "brasileira"){
    console.log ("Voce e brasileiro")

} else if ( nacionalidade === "argentina"){
    console.log ("Voce e argentino")
} else if (nacionalidade === "uruguai"){
    console.log ("Voce e uruguaio")
} else if (nacionalidade === "chilena"){
    console.log ("Voce e chileno")
}else if (nacionalidade === "colombiana"){
    console.log ("Voce e colombiano")
}else{
    console.log ("Nacionalidade nao encontrada")
}  

