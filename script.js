const elemento={
    inputNome: document.querySelector("#nome"),
    inputPeso: document.querySelector("#peso"),
    imputAltura: document.querySelector("altura"),
    botao: document.querySelector("button"),
    form: document.querySelector("form"),
}

elemento.form.addEventListener('submit', ()=>{
    console.log("evento");
})


let paciente = {
 nome:  "Ariana",
 peso:  60,
 altura:  1.53,
 imc: 0,
};

//Fórmula para o cálculo do IMC
paciente.imc = paciente.peso / paciente.altura ** 2;

//Tabela de avaliação do IMC
if (paciente.imc<18.5){
    console.log(`o paciente ${paciente.nome} tem um imc de ${paciente.imc.toFixed(1)} e está abaixo do peso`);
}else if (paciente.imc>=18.5 && paciente.imc<=24.9){
    console.log(`o paciente ${paciente.nome} tem um imc de ${paciente.imc.toFixed(1)} e está com o peso normal`);
}else {
    console.log(`o paciente ${paciente.nome} tem um imc de ${paciente.imc.toFixed(1)} e está acima do peso`);
}  

function exibirIMC(imc){
    if (imc<18.5){
    console.log(`o paciente ${paciente.nome} tem um imc de ${imc.toFixed(1)} e está abaixo do peso`);
}else if (imc>=18.5 && paciente.imc<=24.9){
    console.log(`o paciente ${paciente.nome} tem um imc de ${imc.toFixed(1)} e está com o peso normal`);
}else {
    console.log(`o paciente ${paciente.nome} tem um imc de ${imc.toFixed(1)} e está acima do peso`);

}
}

//retorno do resultado no console.log
console.log(`o paciente ${paciente.nome}, com o peso de ${paciente.peso} e altura de ${paciente.altura}, tem o imc de ${paciente.imc.toFixed(1)}.`);