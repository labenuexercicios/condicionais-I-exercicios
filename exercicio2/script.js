let idade = Math.floor(Math.random() * 100);
let isMaiorIdade;
let isCursandoOutraFaculdade = false

console.log("Idade: ", idade)

if (idade >= 18) {
    isMaiorIdade = true
}else {
    isMaiorIdade = false
}

if(idade >= 18){
    console.log("Maior de idade.")
}else{
	console.log("Menor de idade.")
}

if (isMaiorIdade) {
    console.log("Terminou o ensino médio.")
}else {
    console.log("Não terminou o ensino médio.")
}

if (isCursandoOutraFaculdade) {
    console.log("Está cursando alguma faculdade.")
}else {
    console.log("Não está cursando nenhuma faculdade.")
}