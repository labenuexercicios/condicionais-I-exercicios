let idade = Number(prompt('Qual é sua idade?'))
let isMaiorIdade = true
let isCursandoOutraFaculdade = true

if(idade >= 18 && isMaiorIdade === true && isCursandoOutraFaculdade === true){
    console.log(`Você tem ${idade}, entao já é de maior e já pode cursar faculdade`);
}else{
	console.log(`Você tem ${idade}, entao não é maior de idade e não pode cursar faculdade`);
}