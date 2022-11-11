let idade = 27
let terminouEnsinoMedio = true
let isCursandoOutraFaculdade = false
function ex2(idade, terminouEnsinoMedio, isCursandoOutraFaculdade) {
   if (idade >= 18) {
      console.log("Maior de idade")
   } else {
      console.log("Menor de idade")
   }
   if (terminouEnsinoMedio) {
      console.log("Terminou o ensino médio")
   } else {
      console.log("Não terminou ensino medio")
   }
   if (isCursandoOutraFaculdade) {
      console.log("Esta cursando outra faculdade")
   } else {
      console.log("Não esta cursando outra faculdade")
   }
}
ex2(30, true, false)