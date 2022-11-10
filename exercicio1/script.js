const num = (numero) => {
    if(numero % 2 === 0){
        return `o número ${numero} é par.`
    }else {
        return `o numero ${numero} não é par.`
    }
}

console.log(num(2))


