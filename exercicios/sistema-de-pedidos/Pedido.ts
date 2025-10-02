/* Classe Pedido → lista de itens
    adicionarItem(item), removerItem(nome), calcularTotal() 
*/

import ItemPedido from "./ItemPedido.js";

export default class Pedido {
  private listaDeItems: ItemPedido[];
  constructor() {
    this.listaDeItems = [];
  }

  adicionarItem(novoItem: ItemPedido): void {
    const itemJaExiste = this.listaDeItems.some(
      (item: ItemPedido) =>
        novoItem.nomeDoItem.toLowerCase() === item.nomeDoItem.toLowerCase()
    );
    if (itemJaExiste) {
      this.listaDeItems.filter((item) =>
        item.aumentarQuantidade(novoItem.quantidadeDeItems)
      );
      const ehMaisDeUmItem = novoItem.quantidadeDeItems > 1;
      console.log(
        `${ehMaisDeUmItem ? "Foram adicionados" : "Foi adicionado"} ${
          novoItem.quantidadeDeItems
        } ${novoItem.nomeDoItem}${ehMaisDeUmItem ? "s." : "."}`
      );
      return;
    }
    this.listaDeItems.push(novoItem);

    // Sugestão de melhoria:
    /* const itemExistente = this.listaDeItems.find(
      (item) =>
        novoItem.nomeDoItem.toLowerCase() === item.nomeDoItem.toLowerCase()
    );

    if (itemExistente) {
      itemExistente.aumentarQuantidade(novoItem.quantidadeDeItems);
      const ehMaisDeUmItem = novoItem.quantidadeDeItems > 1;
      console.log(
        `${ehMaisDeUmItem ? "Foram adicionados" : "Foi adicionado"} ${
          novoItem.quantidadeDeItems
        } ${novoItem.nomeDoItem}${ehMaisDeUmItem ? "s." : "."}`
      );
      return;
    } */
  }

  removerItem(nome: string): void {
    const itemExiste = this.listaDeItems.some(
      (item: ItemPedido) => nome.toLowerCase() === item.nomeDoItem.toLowerCase()
    );
    if (!itemExiste) {
      console.log("Nenhum item foi encontrado!");
      return;
    }
    this.listaDeItems = this.listaDeItems.filter(
      (item) => item.nomeDoItem.toLowerCase() !== nome.toLowerCase()
    );
    console.log(`${nome} foi removido com sucesso.`);
  }

  calcularTotal(): number {
    return this.listaDeItems
      .map((item) => item.quantidadeDeItems * item.precoDoItem)
      .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);

    // Sugestão de melhoria:
    /*  calcularTotal(): string {
  const total = this.listaDeItems
    .map((item) => item.quantidadeDeItems * item.precoDoItem)
    .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total); */
  }

  listarItems(): void {
    if (this.listaDeItems.length < 1) {
      console.log("Nenhum item adicionado.");
      return;
    }
    console.table(this.listaDeItems);
  }
}

const item1 = new ItemPedido("Item1", 15, 1);
const item2 = new ItemPedido("Item2", 10, 4);
const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
// pedido.removerItem("Item1");
console.log(pedido.calcularTotal());
pedido.listarItems();
