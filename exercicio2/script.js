let idade = prompt("Idade: ");
let isMaiorIdade = confirm("Terminou o ensino médio?");
let isCursandoOutraFaculdade = confirm("Está cursando alguma faculdade?");

if(idade => 18){
    console.log ("A pessoa é maior de idade!")
}else{
    console.log ("A pessoa não é maior de idade!")
}
if(isMaiorIdade){
    console.log ("Concluiu o ensino médio!")
} else {
    console.log("Não concluiu o ensino médio!")
}
if(isCursandoOutraFaculdade===false){
    console.log("Não está cursando nenhuma faculdade!")
} else{
    console.log ("Está cursando faculdade!");
}