/* Classe ItemPedido → nome, preco, quantidade */

export default class ItemPedido {
  constructor(
    private nome: string,
    private preco: number,
    private quantidade: number
  ) {}

  alterarNome(novoNome: string): void {
    if (!novoNome) {
      console.log("Insira um nome válido para o produto!");
      return;
    }
    this.nome = novoNome;
  }

  alterarPreco(novoPreco: number): void {
    if (!novoPreco) {
      console.log("Insira um valor válido!");
      return;
    }
    this.preco = novoPreco;
  }

  diminuirQuantidade(numeroDeItens: number = 1): void {
    this.quantidade -= numeroDeItens;

    // Sugestão de melhoria:
    /* diminuirQuantidade(numeroDeItens: number = 1): void {
      if (this.quantidade - numeroDeItens < 0) 
        console.log("Quantidade não pode ser negativa!");
      return;
    }
    this.quantidade -= numeroDeItens; */
  }

  aumentarQuantidade(numeroDeItens: number = 1) {
    this.quantidade += numeroDeItens;
  }

  get nomeDoItem(): string {
    return this.nome;
  }

  get quantidadeDeItems(): number {
    return this.quantidade;
  }

  public get precoDoItem(): number {
    return this.preco;
  }
}
