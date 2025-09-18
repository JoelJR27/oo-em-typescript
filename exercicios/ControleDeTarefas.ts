class Tarefa {
  public id: string;
  public descricao: string;
  public concluida: boolean;
  constructor(id: string, descricao: string, concluida: boolean = false) {
    this.id = id;
    this.descricao = descricao;
    this.concluida = concluida;
  }
  marcarComoConcluida(): void {
    this.concluida = true;
  }

  exibirTarefa(): void {
    console.table([
      { id: this.id, descricao: this.descricao, concluida: this.concluida },
    ]);
  }
}

class ListaDeTarefas {
  public static lista: Tarefa[];
  constructor() {
    ListaDeTarefas.lista = [];
  }
  static adicionarTarefa(tarefa: Tarefa): void {
    this.lista.push(tarefa);
  }
  static removerTarefa(id: string): void {
    this.lista = [...this.lista.filter((tarefa: Tarefa) => id !== tarefa.id)];
  }
  static listarTodas(): void {
    console.table(this.lista);
  }
}
