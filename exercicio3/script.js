//Pode armazenar tudo em um array

const nacionalidade = ['brasileira', 'colombiana', 'uruguaia','argentina','chilena'];
const nacionalidade2 = prompt('Qual a sua nacionalidade?').toLowerCase()

if(nacionalidade.includes(nacionalidade2)){
    console.log('Nacionalidade encontrada.')

}else{
    console.log('Nacionalidade não encontrada.')
}
/*const nacionalidade=prompt("Escreva aqui sua nacionalidade:")

if(nacionalidade === 'brasileira'){
    console.log('Você nasceu no Brasil.')
}
 else if ( nacionalidade === 'argentina'){
console.log('Você nasceu na Argentina.')
}
else if ( nacionalidade === 'colombiana'){
    console.log('Você nasceu na Colômbia.')
}
else if (nacionalidade === 'uruguaia'){
    console.log('Você nasceu no Uruguai.')
}
else if (nacionalidade === 'chilena'){
    console.log('Você nasceu no Chile.')
}
else{
    console.log('Nacionalidade não encontrada.')
}*/

