let idade = 18
let isMaiorIdade;
let isCursandoOutraFaculdade = 'sim'.toLowerCase

if(idade >= 18){
    isMaiorIdade = true
    console.log('VERDADEIRO')
}else{
    isMaiorIdade = false
    console.log('FALSO')
}

if (idade) {
    isMaiorIdade = true
    console.log('VERDADEIRO')
} else {
    console.log('FALSO')
    isMaiorIdade = false
}

if (isCursandoOutraFaculdade === 'sim') {
    isCursandoOutraFaculdade = true
    console.log('VERDADEIRO')
} else {
    console.log('FALSO')
    isCursandoOutraFaculdade = true
}