
class ProdutoEstoque {
  constructor(
    public id: string,
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {}
}

class Estoque {
  constructor(public listaDeProdutos: ProdutoEstoque[] = []) {}
  adicionarProduto(produtoAdicionado: ProdutoEstoque): string | void {
    const jaEstaNoEstoque = this.listaDeProdutos.find(
      (produto) =>
        produto.nome.toLowerCase() === produtoAdicionado.nome.toLowerCase()
    );
    if (jaEstaNoEstoque) {
      jaEstaNoEstoque.quantidade += produtoAdicionado.quantidade;
      return;
    }
    this.listaDeProdutos.push(produtoAdicionado);
  }
  removerProduto(id: string) {
    this.listaDeProdutos = this.listaDeProdutos.filter(
      (produto) => produto.id !== id
    );
  }

  buscarProduto(nome: string): ProdutoEstoque[] {
    return this.listaDeProdutos.filter((produto) =>
      produto.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  calcularValorTotal(): number {
    return this.listaDeProdutos
      .map((produto) => produto.preco * produto.quantidade)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
