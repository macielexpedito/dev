// --- Calculadora de Consumo de Combustível ---
// retirei "" dos valores
const precos = {
  gasolina: 5.8,
  alcool: 3.9,
  diesel: 6.20,
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;
  let custoTotal = litrosNecessarios * precoUnitario;

  return custoTotal;
}
// retirei '' da distancia
const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);

//resultadoGasolina
console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + calcularGasto(200, 15, precos.diesel));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina);

//const mensagem fora do IF
const mensagem = "O álcool está compensando!";

if (precos.alcool < 4) 



console.log(mensagem);
