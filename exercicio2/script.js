/* Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio,
 e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira. */




function escolaridade () {
    const idade = Number(prompt("Qual sua idade?"))
    const ensinoMedio = (prompt("Você terminou ensino médio ?") === "sim")
    const faculdade = (prompt("Você está cursando alguma faculdade ?") === "sim")


    if (idade >= 18) {
        console.log(`Você é de Maior de idade`)
    } else {
        console.log(`Você é de menor`)
    }
    if(ensinoMedio) {
        console.log(`Você terminou o ensino medio`)
    } else {
        console.log(`Você nao  terminou o ensino medio`) 
    }
    if(faculdade) {
        console.log(`Você está cursando uma faculdade`)
    } else {
        console.log(`Você não está cursando nenhuma faculdade`)
    }
    
}

escolaridade()