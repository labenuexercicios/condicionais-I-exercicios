let idade = Number(prompt('Digite a sua idade: '))
let ensinoMedio = prompt('Terminou o Ensino Médio? - ') 
let cursandoFaculdade = prompt('Está cursando a Faculdade? - ')

if(idade >= 18){
    console.log('Você é maior de idade!')
}else{
	console.log('Você é menor de idade!')
}
if(ensinoMedio === 'Sim' || ensinoMedio === 'sim'){
    console.log('Você concluiu o Ensino Médio!')
}else{
    console.log('Você não concluiu o Ensino Médio!')
}
if(cursandoFaculdade === 'Sim' || cursandoFaculdade === 'sim'){
    console.log('Você está cursando a Faculdade!')
}else{
    console.log('Você não está cursando a Faculdade!')
}