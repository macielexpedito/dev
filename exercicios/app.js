
/*
const PI = 3.14159
let raio = 5**2
console.log('A=', PI*raio)
*/

let A = 10
let B = 5
let x = A + B
console.log(`A: ${A}`)
console.log(`B: ${B}`)
console.log(`x: ${x}`)

let paciente = "Ariana"
let peso = 60
let altura = 1.53
let imc = peso / altura**2
console.log(`Paciente: ${paciente}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC: ${imc.toFixed(2)}`)

// correção

let a, b;
a = 15;
b = 45;
x = a + b;
console.log(`X = ${x}`);


// resolução usando funçôes
function somar(a, b){
    let x = a + b
    console.log(`x = ${x}`);
}
// chamada da função somar, com os valores de 'a' e 'b'
somar(85, 25);

let idade = 55;

if(idade <12){
    console.log("Criança");
} else if (idade>= 12 && idade <= 21) {
    console.log("Adolescente");
}else if (idade>=22 && idade <=59){
    console.log("adulto");
}else if(idade>= 60) {
    console.log("idoso");

}


