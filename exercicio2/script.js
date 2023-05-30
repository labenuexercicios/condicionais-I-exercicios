// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

const idade = Number(prompt("Digite um número"))

const ensinoMedio = confirm("Você terminou o ensino médio ?")
//const ensinoMedio = prompt("Você terminou o ensino médio ?")

const cursandoFaculdade = confirm("Você está cursando alguma faculdade ?")

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;

const teste = (idae,ensino,faculdade) =>{
    
if(idade >= 18){ 

    console.log("Você é maior de idade!!"); 
}else{

    console.log( "Não é maior de idade!!");
    
}
// - Se a pessoa terminou o ensino médio;

if(ensinoMedio === true){

    console.log("Você terminou o ensino médio!!"); 

}else{

    console.log("Não terminou o ensino médio!!"); 
}
// - Se a pessoa NÃO está cursando alguma faculdade;

if(cursandoFaculdade === false){

    console.log("Bora cursar na labenu!!"); 
}else{

    console.log(":( :/ ");

}

}
 teste(idade,ensinoMedio,cursandoFaculdade);



