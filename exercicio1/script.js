function verificaseepar(x) {

    let resultado

    if(x % 2 === 0){
        resultado = "O número é par"
       // return "O número é par."
        return resultado
    }
    else{
        return false
    }
}


const num = 6

const enviaonumero = verificaseepar(num)

console.log(enviaonumero)