export default class FilaBancoPrioridade {
  constructor() {
    this.filaBanco = [];
  }

  adicionarCliente(nome, prioridade = "normal") {
    const cliente = { nome, prioridade };
    this.filaBanco.push(cliente);
    console.log(
      `Cliente ${nome} adicionado à fila com prioridade ${prioridade}. \n`
    );
    this.mostrarFila();
  }

  atenderCliente() {
    if (this.estaVazia()) {
      console.log("Nenhum cliente na fila para atendimento.");
      return;
    }

    const niveisPrioridades = ["idoso", "pcd", "gestante", "normal"];

    for (const prioridade of niveisPrioridades) {
      for (let i = 0; i < this.filaBanco.length; i++) {
        if (this.filaBanco[i].prioridade === prioridade) {
          const cliente = this.filaBanco.splice(i, 1)[0];
          console.log(
            `\n Atendendo cliente ${cliente.nome} com prioridade ${cliente.prioridade}. \n`
          );
          console.log(this.mostrarFila());
          return;
        }
      }
    }
  }

  mostrarFila() {
    if (this.estaVazia()) {
      console.log("Fila do Banco vazia.");
      return [];
    }
    console.log("Fila do Banco:");
    return this.filaBanco;
  }

  estaVazia() {
    return this.filaBanco.length === 0;
  }
}
