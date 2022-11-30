//Exercício 3
//Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

//brasileira;
//Argentina;
//uruguai;
//Chilena;
//colombiana;
//Crie uma estrutura de if/else if/else que deve verificar se a nacionalidade guardada na const nacionalidade é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último else deve imprimir "nacionalidade não encontrada" caso o valor nacionalidade não corresponda a nenhum dos valores.

const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase();

function nacionalidadeDoUsuario (nacionalidade){
    if(nacionalidade === "brasileira" || nacionalidade === "uruguai" ||         nacionalidade === "colombiana" || nacionalidade === "argentina" ||  nacionalidade === "Chilena"){
        console.log(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()+nacionalidade.substring(1)}`);
    }
    else{
        console.log(`Nacionalidade não encontrada `);
    }
}

nacionalidadeDoUsuario(nacionalidade);





//ESSE COMENTÁRIO É PRA QUANDO EU ABRIR ESSE CÓDIGO ALGUM DIA EU SABER O QUE EU MESMA FIZ KKKK
//NESSE TRECHO: ${nacionalidade[0].toUpperCase()+nacionalidade.substring(1)}, EU PEQUEI O ÍNDICE 0 DO VALOR DIGITADO EM NACIONALIDADE E TRANSFORMEI EM MAIÚSCULO E DEPOIS ACESSEI MINHA NACIONALIDADE POR MEIO DO SUBSTRING A PARTIR DA POSIÇÃO 1 E JUNTEI AS DUAS FORMANDO A PALAVRA COMPLETA