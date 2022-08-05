let idade = prompt(`Qual e sua idade? `)
let TerminouEm = confirm(`voce terminou o ensino medio? `)
let Faculdade = confirm(`voce faz alguma faculdade? `)
 
if(idade >=18){
  alert(`voce é maior de idade`)
}else{
	alert(`voce é menor de idade`)
}

if(TerminouEm){
    alert(`terminou o ensino médio`)
}else{
    alert(`não terminou o ensino médio`)
}

if(Faculdade){
    alert(`faz faculdade`)
}else{
    alert(`não faz faculdade`)
}