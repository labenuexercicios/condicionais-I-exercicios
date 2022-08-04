let idade = prompt("Qual a sua idade ?")
let isMaiorIdade ={}
let ensinoMedio ={}
let estaFacu = {}

if(idade >= 18){
isMaiorIdade = true,
console.log("você é maior:",isMaiorIdade)
}else{console .log("Você é menor ")
	}
if (isMaiorIdade === true){ ensinoMedio = prompt("você ja terminou o ensino médio ?"), console.log(ensinoMedio)}
if (ensinoMedio === "sim"){ estaFacu = prompt("Voce esta na faculdade ?"),
    console.log("resposta  :",ensinoMedio)
}
else{
    console.log("volte a escola!")
}
if (estaFacu === "sim"){
    console.log("resposta faculdade :",estaFacu)
}
else{console.log("E não vai estudar ?")}

