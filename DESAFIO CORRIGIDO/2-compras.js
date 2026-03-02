// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const produto = {
  nome: "Teclado Gamer",
  preco: 150.00,
  estoque: 10,
};

//criado o calculo de desconto em porcentagem
// Desconto em porcentagem
function aplicarDesconto(valor) {
  return valor - (valor * 0.20);
}

//acrescentar (produto.preco)
const precoFinal = aplicarDesconto(produto.preco);{

  //substituir o um por 1
produto.estoque = produto.estoque - 1;}

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);
