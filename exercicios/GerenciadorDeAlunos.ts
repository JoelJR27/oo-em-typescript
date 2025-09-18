/*
    Exercício 8 – Gerenciador de Alunos
    Classe Aluno → matricula, nome, notas: number[], método calcularMedia()
    Classe Turma: 
    adicionarAluno(aluno), removerAluno(matricula), listarAlunos(), 
    aprovados(mediaMinima) → retorna apenas alunos com média acima da média mínima
*/
import { randomUUID } from "node:crypto";
class Aluno {
  constructor(
    public matricula: string,
    public nome: string,
    public notas: number[]
  ) {}

  calcularMedia(): number | void {
    if (!this.notas) {
      console.log(`O aluno não possui notas registradas!`);
      return;
    }
    // Correção:
    /*
    calcularMedia(): number | string {
  if (!this.notas || this.notas.length === 0) {
    return `O aluno não possui notas registradas!`;
  }
  return (
    this.notas.reduce((prev, curr) => prev + curr, 0) / this.notas.length
  );
}
    */
    return (
      this.notas.reduce((prev, curr) => prev + curr, 0) / this.notas.length
    );
  }
}

class Turma {
  constructor(private listaDeAlunos: Aluno[] = []) {}
  adicionarAluno(aluno: Aluno): void | string {
    if (!aluno.nome || !aluno.matricula)
      return "Informe nome e matrícula para cadastrar um aluno!";
    if (this.listaDeAlunos.includes(aluno)) {
      console.log("Aluno já cadastrado!");
      return;
    }
    this.listaDeAlunos.push(aluno);

    // Correção:
    // adicionarAluno(aluno: Aluno): void | string {
    //   if (!aluno.nome || !aluno.matricula) {
    //     return "Informe nome e matrícula para cadastrar um aluno!";
    //   }
    //   if (this.listaDeAlunos.some(a => a.matricula === aluno.matricula)) {
    //     console.log("Aluno já cadastrado!");
    //     return;
    //   }
    //   this.listaDeAlunos.push(aluno);
    // }
  }

  removerAluno(matricula: string): void {
    if (!this.listaDeAlunos.find((aluno) => aluno.matricula === matricula))
      console.log("Não existe um aluno com essa matrícula!");
    this.listaDeAlunos = this.listaDeAlunos.filter(
      (aluno) => aluno.matricula !== matricula
    );
  }

  listarAlunos(): void {
    if (this.listaDeAlunos.length < 1) {
      console.log("A turma não possui alunos!");
      return;
    }
    console.table(this.listaDeAlunos);
  }

  listarAprovados(): void | string {
    const aprovados = this.listaDeAlunos.filter(
      (aluno) => Number(aluno.calcularMedia()) > 5
    );
    if (aprovados.length < 1) return "Todos os alunos foram reprovados!";
    console.table(aprovados.map((aluno) => aluno.nome));
  }
}
