// Fazendo a verificaçao.
// Ao colocar uma idade no prompt, ele irá verificar as seguintes afirmações;
// 1- Se a pessoa tem menos de 18 anos, ela cursa o ensino medio.
// 2- Se a pessoa tem mais de 18 anos, ela cursa a faculdade.
// 3- Se a pessoa tem mais de 60 anos, ela está aposentada.

let idade = Number(prompt("insira sua idade"))

if(idade >= 18 && idade< 60){
      console.log("Essa pessoa está cursando a faculdade");
}else if (idade <18 && idade > 16){
        console.log("Essa pessoa está cursando o ensino medio")
}else{
    console.log("Essa pessoa é aposentada")
}
