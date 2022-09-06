const num = Number(prompt("Digite um número qualquer aqui: "))

let resto = num % 2

if(resto === 0){
    console.log(`O número ${num}  é par`);
} else {
    console.log(`O número ${num}  é impar`);
}
