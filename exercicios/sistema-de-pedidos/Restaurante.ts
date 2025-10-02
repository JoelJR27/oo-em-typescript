/* Classe Restaurante
    criarPedido(), listarPedidos()
*/

import ItemPedido from "./ItemPedido.js";
import Pedido from "./Pedido.js";

export default class Restaurante {
  private listaDePedidos: Pedido[];
  constructor() {
    this.listaDePedidos = [];
  }

  criarPedido(novoItem: ItemPedido, ...demaisPedidos: ItemPedido[]) {
    const pedido = new Pedido();
    let items = [novoItem, ...demaisPedidos];
    items.forEach((item) => {
      pedido.adicionarItem(item)
      console.log(item)
    });
    this.listaDePedidos.push(pedido);
    
    // Sugestão de melhoria:
    /* criarPedido(novoItem: ItemPedido, ...demaisPedidos: ItemPedido[]): Pedido {
    const pedido = new Pedido();
    let items = [novoItem, ...demaisPedidos];
    items.forEach((item) => pedido.adicionarItem(item));
    this.listaDePedidos.push(pedido);
    return pedido;
  } */
  }

  listarPedidos() {
    console.table(this.listaDePedidos);
  }
}

const restaurante = new Restaurante();
const item1 = new ItemPedido("joe", 39.99, 8);
const item2 = new ItemPedido("e", 59.99, 2);
const pedido = new Pedido();
restaurante.criarPedido(item1);
restaurante.criarPedido(item2);
restaurante.listarPedidos();
