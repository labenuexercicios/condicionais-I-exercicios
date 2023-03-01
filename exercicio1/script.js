//Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.



const verificaParidade = () => {
    const numericaQualquer = Number(prompt(`Digite um número, por favor`))
    if (numericaQualquer % 2 === 0) {
        return `O número é par.`
    }      
}

console.log(verificaParidade())