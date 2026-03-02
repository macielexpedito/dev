// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;

function converterParaReal(valorDolar) {

  //transação.valor
 let resultado = transacao.valor * taxaDolar;
  return resultado;
}

//console.log("O valor convertido é de : R$ " + resultado);

const transacao = {
  usuario: "Carlos",
  valor: 100.00,
  concluida: true,
};

const valorFinal = converterParaReal(transacao.valor);

//sim por true
if (transacao.concluida == true) {
  console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);
}

//não por false
if (transacao.concluida == false) {
  console.log("Erro no processamento.");
}
