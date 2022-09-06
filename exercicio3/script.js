let nacionalidade = prompt("Escreva aqui a tua nacionalidade")
nacionalidade = nacionalidade.toUpperCase()

if (nacionalidade === 'BRASILEIRA' || nacionalidade === 'ARGENTINA' || nacionalidade === 'URUGUAIA' || nacionalidade === 'CHILENA' || nacionalidade === 'COLOMBIANA' ){
    if(nacionalidade === 'BRASILEIRA'){
        console.log(`A nacionalidade é  ${nacionalidade}` );
    } else if (nacionalidade === 'ARGENTINA'){
        console.log(`A nacionalidade é  ${nacionalidade}` );
    } else if (nacionalidade === 'URUGUAIA'){
        console.log(`A nacionalidade é  ${nacionalidade}` );
    } else if(nacionalidade === 'CHILENA'){
        console.log(`A nacionalidade é  ${nacionalidade}` )
    } else if (nacionalidade === 'COLOMBIANA'){
        console.log(`A nacionalidade é  ${nacionalidade}` )
    }  
} else {
    console.log("Nacionalidade não encontrada")
}