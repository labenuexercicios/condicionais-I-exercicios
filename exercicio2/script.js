let idade = prompt("Qual a sua idade?")
let isMaiorIdade=undefined
let isCursandoOutraFaculdade=undefined  

let resposta= prompt("Voce esta cursando outra faculdade?")

if(idade>=18){
    isMaiorIdade=true
    console.log("Eh maior de idade")
}else{
    console.log("Eh menor de idade")
}

if(resposta.includes("sim")){
    console.log("Esta cursando outra faculdade")
}else{
    console.log("Nao esta cursando outra faculdade")
}