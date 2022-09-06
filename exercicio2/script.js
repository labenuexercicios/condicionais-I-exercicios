//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
//- Se a pessoa terminou o ensino médio;
//- Se a pessoa NÃO está cursando alguma faculdade;

//Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

//Caso a primeira pessoa tenha idade >=18:

//<b>"A pessoa é maior de idade"</b>

//e caso não seja:

//<b>"A pessoa é menor de idade"</b>



let idade = prompt('qual sua idade?')
let terminouEm = prompt('vc terminou o ensino medio?')
let isCursandoOutraFaculdade = prompt('esta cursando faculdade?')

if(idade >= 18){
    console.log("vc eh maior de idade")
}else{
	console.log('vc é menor de idade')
}

if (terminouEm === 'nao') {
    console.log('nao terminou o EM')
    terminouEm = typeof(Boolean)
    terminouEm = false
}else {
    console.log('terminou o EM')
    terminouEm = typeof(Boolean)
    terminouEm = true
}

if(isCursandoOutraFaculdade === 'sim') {
    console.log('esta cursando faculdade')
    terminouEm = typeof(Boolean)
    terminouEm = true
}else {
    console.log('nao esta cursando faculdade')
    terminouEm = typeof(Boolean)
    terminouEm = false
}