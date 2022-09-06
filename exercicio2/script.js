let idade = 18
let terminouEM = true
let isCursandoFaculdade = true

if(idade>=18){
    console.log("Tem mais de 18 anos")

}if(idade>=18 && terminouEM){
    console.log("Terminou o ensino médio?", terminouEM)
    
}if(idade>=18 && terminouEM && isCursandoFaculdade){
    console.log("Está cursando faculdade?", isCursandoFaculdade)
}else{
    console.log('A pessoa é menor de idade')
}