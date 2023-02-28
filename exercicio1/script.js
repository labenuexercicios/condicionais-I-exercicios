//EXERCICIO 1 

function verificaParidade (){
    const numero = Number(prompt("Insira um número"))

    if (numero %2 === 0){
        console.log("Esse número é par")
    } else {
        console.log("Esse número não é par")
    }
    
}

verificaParidade()