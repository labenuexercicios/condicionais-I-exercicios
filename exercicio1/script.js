const numero = +prompt("Insira uma número")
const par = numero % 2

function checaParidade() { 
    if (par === 0){
        console.log("O número inserido é par")
    }
}

checaParidade()