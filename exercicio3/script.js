// resolução somente com if encadeado
let nacionalidade = prompt("Escreva aqui sua nacionalidade")
nacionalidade = nacionalidade.toLowerCase()
if (nacionalidade === "brasileira") {
    alert("Sua nacionalidade é Brasileira")
    console.log("Sua nacionalidade é Brasileira")
} else if (nacionalidade === "argentina") {
    alert("sua nacionaliade é Argentina")
    console.log("sua nacionaliade é Argetina")
} else if (nacionalidade === "uruguaia") {
    alert("Sua nacionalidade é Uruguaia")
    console.log("Sua nacionalidade é Uruguaia")
} else if (nacionalidade === "chilena") {
    alert("Sua nacionalidade é Chilena")
    console.log("Sua nacionalidade é Chilena")
}else if (nacionalidade==="colombiana"){
    alert("Sua nacionalidade é Colombiana")
    console.log("Sua nacionalidade é Colombiana")
}else {
    alert("Nacionalidade não encontrada")
    console.log("Nacionalidade não encontrada")
} 
console.log(nacionalidade)


// resolução utilizando arrays
/*
const nacional= ["brasileira", "argentina", "uruguaia","chilena","colombiana"]
nacao=prompt("digite sua nacionalidade".toLowerCase())
if (nacao =="brasileira"){
    console.log('sua nacionalidade é '+ nacional[0])
}else if(nacao =="argentina"){
    console.log("sua nacionalidade é "+nacional[1])
}else if(nacao =="uruguaia"){
    console.log("sua nacionalidade é "+ nacional[2])
}else if(nacao =="chilena"){
    console.log("sua nacionalidade é "+ nacional[3])
}else if(nacao =="colombiana"){
    console.log("sua nacionalidade é "+ nacional[4])
}else {
    console.log("nacionalidade nao encontrada")
}
console.log(nacional)
console.log(nacao)
*/


