
let idade = Number(prompt ("Quantos anos você tem?"))
const isTerminouEnsMedio = confirm ("Aperte OK se você terminou o ensino médio")
const isCursandoFacul = confirm ("Aperte Ok se você está cursando faculdade")


if(idade >= 18){console.log("A pessoa é maior de idade")
}else{console.log("A pessoa é menor de idade")	
}

if(isTerminouEnsMedio){console.log("A pessoa terminou o ensino médio")
}else{console.log("A pessoa não terminou o ensino médio")	
}

if(isCursandoFacul){console.log("A pessoa está cursando faculdade")
}else{console.log("A pessoa não está cursando faculdade")
}


// window.alert("")