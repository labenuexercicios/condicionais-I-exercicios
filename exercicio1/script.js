/*Crie uma função que receba uma const numérica qualquer. Crie um `if` 
para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem:
 "o número é par". Depois disso, imprima o retorno no console.*/

 const recebeConstanteNumericaQualquer = (numero)=>{
    let recebeConstanteNumericaQualquer = numero
    if ((recebeConstanteNumericaQualquer % 2) === 0) {
        let resultado = `O número: ${numero} é par!`
        console.log(resultado)
        return resultado
    }
}
