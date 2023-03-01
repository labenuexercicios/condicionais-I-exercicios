function verificaNacionalidade() {
const nacionalidade = prompt (`Escreva aqui sua nacionalidade?`).toLowerCase()

if (nacionalidade === 'brasileira' || nacionalidade === 'brasileiro') { 
    console.log(`Você é Brasileiro(a)`)
} else if (nacionalidade === 'argetina' || nacionalidade === 'argentino') {
    console.log(`Você é Argentino(a)`)
} else if (nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio') {
    console.log(`Você é Uruguaio(a)`)
} else if (nacionalidade === 'chilena' || nacionalidade === 'chileno') {
    console.log(`Você é Chileno(a)`)
} else if (nacionalidade === 'colombiana' || nacionalidade === 'colombiano') {
    console.log(`Você é Colombiano(a)`)
} else {
    console.log(`Nacionalidade não encontrada`)
}
}

verificaNacionalidade()