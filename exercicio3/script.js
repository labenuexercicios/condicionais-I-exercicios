let nacionalidade = prompt('Qual é a sua nacionalidade:').toLowerCase()
let nacionalidades = ['brasileira','argentina', 'uruguaia', 'chilena','colombiana']


if(nacionalidades.includes(nacionalidade)){
    alert(`Nacionalidade: ${nacionalidade}`)
}else{
    alert(`${nacionalidade} é um dado inválido ou não está cadastrado em nosso sistema, as nacionalidades cadastradas em nosso sistema são: ${nacionalidades}`)
}
