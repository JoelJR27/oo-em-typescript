/* 
    Exercício 6 – Sistema de Votação 🗳️
    Classe Candidato: nome, votos
    Classe Votacao:Lista de candidatos
        Métodos: registrarVoto(nome: string), apurarResultado() → mostra vencedor
*/

class Candidato {
  constructor(
    public id: string,
    public nome: string,
    public votos: number = 0
  ) {}
}

class Votacao {
  constructor(public listaDeCandidatos: Candidato[] = []) {}
  adicionarCandidato(candidato: Candidato): void {
    this.listaDeCandidatos.push(candidato);
  }
  registrarVoto(id: string) {
    const candidatoVotado = this.listaDeCandidatos.find(
      (candidato) => id === candidato.id
    );
    candidatoVotado.votos += 1;

    /*
      registrarVoto(id: string): void {
        const candidatoVotado = this.listaDeCandidatos.find(
          (candidato) => candidato.id === id
        );
        if (candidatoVotado) {
          andidatoVotado.votos += 1;
        } else {
          console.log("Candidato não encontrado!");
        }
      }
    */
  }
  apurarResultado() {
    const maiorNumeroDeVotos = Math.max(
      ...this.listaDeCandidatos.map((candidato) => candidato.votos)
    );
    const candidatoMaisVotado = this.listaDeCandidatos.find(
      (candidato) => candidato.votos === maiorNumeroDeVotos
    );
    return `O candidato vencedor da eleição foi: ${candidatoMaisVotado.nome}`;

    // Sugestão de melhoria:
    /*
    apurarResultado(): string {
      const maiorNumeroDeVotos = Math.max(
        ...this.listaDeCandidatos.map(c => c.votos)
      );
      const vencedores = this.listaDeCandidatos.filter(
        c => c.votos === maiorNumeroDeVotos
      );
  
      if (vencedores.length > 1) {
        return `Houve empate entre: ${vencedores.map(v => v.nome).join(", ")}`;
      }
      return `O candidato vencedor foi: ${vencedores[0].nome}`;
    }
    */
  }
}
