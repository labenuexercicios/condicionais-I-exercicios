let idade = Number(prompt("informe sua idade"))
let isMaiorIdade = idade
let isCursandoOutraFaculdade = prompt("a pessoa está cursando faculdade?").toLowerCase()
console.log(isCursandoOutraFaculdade)
if (idade >= 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}

if (isCursandoOutraFaculdade == 'sim') {
    console.log("A pessoa está cursando Faculdade")
} else if (isCursandoOutraFaculdade == 'nao') {
    console.log("A pessoa não está cursando Faculdade")
}
console.log('resposta '+ isCursandoOutraFaculdade) // se cursa faculdade 

let ensinomedio = prompt("A pessoa completou a Ensino Médio?").toLowerCase()

if (ensinomedio == 'sim') {
    console.log("A pessoa Completou o Ensino médio")
} else if (ensinomedio == 'nao') {
    console.log("A pessoa não completou o Ensino Médio tem que fazer EJA")
}
console.log('resposta '+ ensinomedio) // se completou ensino médio