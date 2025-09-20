/* 
Exercício 9 – Banco Simplificado
Classe Conta{
    numero, titular, saldo
    depositar(valor), sacar(valor)
    } 

Classe Banco{
    adicionarConta(conta), buscarConta(numero), transferir(origem, destino, valor) 
    }
*/

export default class Conta {
  private saldo: number;
  constructor(
    private numeroDaConta: number,
    private titular: string,
    private saldoInicial: number = 0
  ) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void | string {
    if (this.saldo < valor) {
      return "Saldo insuficiente!";
    }
    this.saldo -= valor;

    // Melhorias: Adicionar mensagem de sucesso.
    /* if (valor <= 0) {
      return "O valor do saque deve ser positivo!";
    }
    if (this.saldo < valor) {
      return "Saldo insuficiente!";
    }
    this.saldo -= valor;
    return `Saque de R$${valor.toFixed(2)} realizado com sucesso.`; */
  }

  getNumeroDaConta(): number {
    return this.numeroDaConta;
  }

  // Melhorias: Adicionar método para obter o saldo.
  /*  getSaldo(): number {
    return this.saldo;
  } */
}
