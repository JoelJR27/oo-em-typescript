class Produto {
  constructor(
    public id: string,
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {
    // Melhoria:
    /* 
    Como eu já declarei os atributos direto no construtor (public id: string etc.),
    não precisa reatribuir dentro do corpo do construtor.
    O TypeScript já faz isso automaticamente.
    Ou seja, isso é redundante e pode ser removido: 
    */
    // this.nome = nome;
    // this.preco = preco;
    // this.quantidade = quantidade;
  }
}

class Carrinho {
  private static listaDeProdutos: Produto[];
  constructor() {
    Carrinho.listaDeProdutos = [];
  }
  static adicionarProduto(produto: Produto): void {
    this.listaDeProdutos.push(produto);
  }

  static removerProduto(id: string): void {
    this.listaDeProdutos = [
      ...this.listaDeProdutos.filter((products: Produto) => products.id !== id),
    ];
  }

  static calcularTotal(): void {
    const total = this.listaDeProdutos
      .map((produto) => produto.preco * produto.quantidade)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    console.log(total);
  }
}
