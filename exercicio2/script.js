



//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não
// o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

idade = 15;
isMaiorIdade = true ;
isCursandoOutraFaculdade = true ;

if(idade >= 18){
    console.log("maior que 18");
} else {
    console.log("menor de idade");
}

if(isMaiorIdade){
    console.log("Terminou o ensino medio");
} else {
    console.log("não terminou o ensino medio");
}

if(isCursandoOutraFaculdade){
   console.log("Cursa outra faculdade");
} else {
    console.log("Não cursa outra faculdade");
}


