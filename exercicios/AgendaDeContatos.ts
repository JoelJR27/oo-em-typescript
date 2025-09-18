/* 
 Exercício 4 – Agenda de Contatos
    Classe Contato: nome, telefone, email
    Classe Agenda: Lista de contatos
    Métodos: adicionarContato(), buscarContato(nome: string), listarContatos();
*/

class Contato {
  constructor(
    public nome: string,
    public telefone: string,
    public email: string
  ) {}
}

class Agenda {
  constructor(public listaDeTelefone: Contato[] = []) {
    this.listaDeTelefone = listaDeTelefone;
  }
  adicionarContato(contato: Contato): void {
    this.listaDeTelefone.push(contato);
  }

  buscarContato(nome: string): Contato[] {
    return this.listaDeTelefone.filter((contato) =>
      contato.nome.toLowerCase().includes(nome)
      // Melhoria: contato.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  listarContatos(): Contato[] {
    return this.listaDeTelefone;
  }
}
