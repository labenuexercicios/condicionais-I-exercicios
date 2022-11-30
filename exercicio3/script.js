function verificanacionalidade (nacionalidade2){
    if(nacionalidade2 === 'brasileiro'){
        console.log("Fala mano!")
    }
    else if(nacionalidade2 === 'argentino'){
        console.log("Olá manito!")
    }
    else if(nacionalidade2 === 'uruguaio'){
        console.log("Habla manito!")
    }
    else if(nacionalidade2 === 'chileno'){
        console.log("Habla comigo ermano!")
    }
    else if(nacionalidade2 === 'colombiano'){
        console.log("Hola loco!")
    }
    else{
        console.log("Num é brasileiro, nem nada do resto")
    }
}


let nacionalidade = prompt("Digite sua nacionalidade\nEx.: Cubano")
const diminuiotamanhodafrase = nacionalidade.toLowerCase()
verificanacionalidade(diminuiotamanhodafrase)

