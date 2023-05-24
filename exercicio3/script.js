//Crie uma função que recebe do usuário sua nacionalidade, 
//utilizando um **prompt** com a seguinte mensagem: 
//"Escreva aqui sua nacionalidade." 
//e guarde o valor da resposta em uma const `nacionalidade`.

const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase()
function nacionalidade1 (){
//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
//- brasileira;
//- argentina;
//- uruguaia;
//- chilena;
//- colombiana;
//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade 
//guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, 
//e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir 
//"nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda 
//a nenhuma das possibilidades acima.
if (nacionalidade === "brasileira"){
    console.log("brasileira")
}else if (nacionalidade === "argentina"){
    console.log("argentina")
}else if (nacionalidade === "uruguaia"){
    console.log("uruguaia")
}else if (nacionalidade === "chilena"){
    console.log("chilena")
}else if (nacionalidade === "colombiana"){
    console.log("colombiana")
}else
    console.log("nacionalidade não encontrada")
}
nacionalidade1(nacionalidade)