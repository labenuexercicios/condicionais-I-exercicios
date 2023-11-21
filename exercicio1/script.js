function par(numero){
    divisao = numero%2
    if (divisao===0){
        console.log("o numero é par")
    }else{
        console.log("O numero não é par")
    }
}
par(prompt("Digite um numero:"))