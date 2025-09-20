/* Classe Banco{
    adicionarConta(conta), buscarConta(numero), transferir(origem, destino, valor) 
    } */

import Conta from "./Conta.js";

export default class Banco {
  private listaDeContas: Conta[];
  constructor() {
    this.listaDeContas = [];
  }

  adicionarConta(novaConta: Conta): string {
    const isAdded = this.listaDeContas.every(
      (conta) => novaConta.getNumeroDaConta() !== conta.getNumeroDaConta()
    );
    if (isAdded) {
      this.listaDeContas.push(novaConta);
      return `Conta número ${novaConta.getNumeroDaConta()} adicionada com sucesso!`;
    }
    return `A conta número ${novaConta.getNumeroDaConta()} já existe!`;
  }

  buscarConta(numeroDaConta: number): Conta | string {
    return (
      this.listaDeContas.find(
        (conta) => conta.getNumeroDaConta() === numeroDaConta
      ) || `Conta não encontrada`
    );
  }

  transferir(origem: Conta, destino: Conta, valor: number) {
    if (!origem.getNumeroDaConta() || !destino.getNumeroDaConta())
      return "Erro: Destino ou origem inválido(s)";
    origem.sacar(valor);
    destino.depositar(valor);
    return `O valor de ${new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(
      valor
    )} foi transferido para a conta número ${destino.getNumeroDaConta()}.`;
  }
  
  // Melhorias: Verificar se o saque foi bem sucedido.
  /* if (!origem || !destino) {
      return "Erro: Destino ou origem inválido(s)";
    }
    const resultadoSaque = origem.sacar(valor);
    if (resultadoSaque === "Saldo insuficiente!") {
      return "Transferência não realizada: saldo insuficiente.";
    }
    destino.depositar(valor);
    return `O valor de ${new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(
      valor
    )} foi transferido para a conta número ${destino.getNumeroDaConta()}.`;
  }
}) */

  listarContas(): void {
    console.table(this.listaDeContas);
  }
}
const banco = new Banco();
const contaJoel = new Conta(1, "Joel", 300);
const conta2 = new Conta(2, "Eu", 300);
console.log(banco.adicionarConta(contaJoel));
console.log(banco.adicionarConta(conta2));
banco.listarContas();
console.log(banco.buscarConta(30));
console.log(banco.transferir(contaJoel, conta2, 100));
banco.listarContas();
