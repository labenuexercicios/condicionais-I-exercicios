const solicitarNacionalidade = prompt("Digita a sua nacionalidade")

function suaNacionalidade () {
    const nacionalidade = solicitarNacionalidade.toLowerCase()
if(nacionalidade === "brasileira"){
    console.log(`A nacionalidade do usuário é ${nacionalidade}`)
}  else if(nacionalidade === "argentina")   { 
        console.log(`A nacionalidade do usuário é ${nacionalidade}`)
    }   else if(nacionalidade === "uruguaia")   {
            console.log(`A nacionalidade do usuário é ${nacionalidade}`)
        }   else if(nacionalidade === "chilena")    {
                console.log(`A nacionalidade do usuário é ${nacionalidade}`)
            }   else if(nacionalidade === "colombiana")     {
                    console.log(`A nacionalidade do usuário é ${nacionalidade}`)
        } else {
            console.log(`Nacionalidade "${nacionalidade}" não foi encontrada`)
        } 
    } 

suaNacionalidade()