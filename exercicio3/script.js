// # Exercício 3

// Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

const nascionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

const verificaNascionalidade = () => {

if(nascionalidade === "brasileira"){

    console.log("Você é brasileira!!");
    //alert("Você é brasileira!!");

}else if (nascionalidade ==="argentina" ) {

    console.log("Você é argentina!!");
    //alert("Você é argentina!!");
    
}else if(nascionalidade === "uruguaia"){

    console.log("Você é uruguaia!!");
    //alert("Você é uruguaia!!");
    
}else if(nascionalidade === "chilena"){

    console.log("Você é  chilena");
    //alert("Você é  chilena");


}else if (nascionalidade === "colombiana") {
    
    console.log("Você é colombiana");
    //alert("Você é colombiana");


}else{

    console.log("Sua nascionalidade não foi encontrada :(");
    
    //alert("Sua nascionalidade não foi encontrada :(");
}
}
  verificaNascionalidade