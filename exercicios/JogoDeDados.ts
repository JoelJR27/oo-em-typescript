class Dado {
  constructor(public lados: number = 6) {}
  rolar(): number {
    let numeroSorteado = Math.round(Math.random() * this.lados);
    if (numeroSorteado === 0) {
      while (numeroSorteado === 0) {
        numeroSorteado = Math.round(Math.random() * this.lados);
      }
    }
    // Melhoria: Math.floor(Math.random() * this.lados) + 1
    return numeroSorteado;
  }
}

const dadoDeSeisLados = new Dado();

class Jogador {
  constructor(public nome: string) {}
  jogar(dado: Dado): number {
    return dado.rolar();
  }
}