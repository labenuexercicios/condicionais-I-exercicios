//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

let idade = Number (prompt("Qual e a sua idade?"))
let terminouEnsinoMedio = prompt("Voce concluiu o ensino medio?")
let cursandoFaculdade = prompt("voce esta cursando faculdade?")

terminouEnsinoMedio = terminouEnsinoMedio.toLocaleLowerCase()
cursandoFaculdade = cursandoFaculdade.toLocaleLowerCase()

if(idade >= 18){
    console.log("Voce e maior de idade")

}else
    console.log("Voce e menor de idade")
{
	
}if (terminouEnsinoMedio === "sim") {
    console.log("Ensino medico Concluido")
    
} else { 
    console.log("Ensino medio incompleto") 
   
}
{
    
}if (cursandoFaculdade === "sim"){
    console.log("Cursando uma faculdade")
    cursandoFaculdade = typeof(Boolean)
    cursandoFaculdade = true
    
} else {   
     console.log("Nao esta cursando faculdade")
     cursandoFaculdade = typeof(Boolean)
     cursandoFaculdade = false
    }