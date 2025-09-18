/*
 Exercício 5 – Controle de Biblioteca
    Classe Livro: titulo, autor, emprestado 
    Classe Biblioteca: Lista de livros
        Métodos: adicionarLivro(), emprestarLivro(titulo: string), devolverLivro(titulo: string), listarDisponiveis() 
*/

class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public emprestado: boolean = false
  ) {}
}

class Biblioteca {
  constructor(public listaDeLivros: Livro[] = []) {}
  adicionarLivro(livro: Livro): void {
    this.listaDeLivros.push(livro);
  }
  pegarEmprestado(livro: Livro): void {
    livro.emprestado = true;
  }

  /*
  Melhorias:
  pegarEmprestado(titulo: string): void {
  const livro = this.listaDeLivros.find(l => l.titulo === titulo);
  if (livro && !livro.emprestado) {
    livro.emprestado = true;
  } else {
    console.log("Livro não encontrado ou já emprestado.");
  }
}

devolverLivro(titulo: string): void {
  const livro = this.listaDeLivros.find(l => l.titulo === titulo);
  if (livro && livro.emprestado) {
    livro.emprestado = false;
  } else {
    console.log("Livro não encontrado ou não está emprestado.");
  }
}
  */

  devolverLivro(livro: Livro): void {
    livro.emprestado = false;
  }
  listarLivrosDisponíveis(): Livro[] {
    // Melhoria:
    // console.table(this.listaDeLivros.filter(l => !l.emprestado))
    return this.listaDeLivros.filter((livro) => !livro.emprestado);
  }
}
