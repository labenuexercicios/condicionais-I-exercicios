/*Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou 
não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >= 18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>*/

const  tresValores = () =>{

let idade= Number(prompt('digite sua idade'))
 booleanoEnsinoMedio = prompt ('você terminou o ensino médio? digite sim ou não')
 booelanoFaculdade = prompt ('você está cursando a faculdade? digite sim ou não')

if (idade >= 18) {
    console.log(`A pessoa é maior de idade`)
} else {
    console.log(`A pessoa é menor de idade`)
}

if (booleanoEnsinoMedio === 'sim') {
    console.log(` A pessoa terminou o Ensino Médio`)
} else {
    console.log(`A pessoa não terminou o Ensino Médio`)
}

if (booelanoFaculdade === 'sim') {
    console.log(`A pessoa está cursando uma faculdade`)
} else {
    console.log(`A pessoa não está cursando uma faculdade`)
}
}

tresValores() 