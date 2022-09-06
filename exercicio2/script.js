//usar 'confirme' para receber a resposta!



let idade= prompt('Qual a sua idade?')
let fimEnsinoMedio = prompt('Você terminou o ensino médio?').toUpperCase
let isCursandoFaculdade = prompt('Você não está cursando uma faculdade?').toUpperCase
let bool1
let bool2

//transforma a resposta em valor booleano
if(fimEnsinoMedio==="SIM"){
    bool1=true
}else{ bool1 = false}

if(isCursandoFaculdade==="SIM"){
    bool2=true
}else{bool2=false}

// testa a idade
if(idade >= 18){
    console.log('você é maior de idade.')
}else{ console.log('você é menor de idade')
}
//testa ensino medio
if(bool1 === true){
    console.log('você terminou o ensino médio.')
}else{ console.log('você não terminou o ensino médio.')
  }
//testa faculdade
if(bool2 === true)   {
    console.log('você não está cursando outra faculdade.')

}   else {
    console.log('Você está cursando faculdade.')
}  
