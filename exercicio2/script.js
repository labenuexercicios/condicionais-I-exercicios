let idade = Number(prompt("Quantos anos voce tem?"))
let terminouOEnsinoMedio = true
let cursandoFaculdade = true

if(idade >= 18){
    console.log(`Você tem ${idade} anos e é maior de idade!`)
}
else{
    console.log(`Você tem ${idade} anos e é menor de idade!`)
}

if (terminouOEnsinoMedio = true){
    console.log("Você terminou o ensino médio")
}
else{
    console.log("Você não terminou o ensino médio")
}
if (cursandoFaculdade = true){
    cursandoFaculdade = prompt("Qual faculdade voce cursa?")
    console.log("Voce esta cursando faculdade na/no",cursandoFaculdade)
}
else{
    console.log("Você não está cursando nenhuma faculdade no momento")
}