export default class Pilha {
  constructor() {
      this.vetor = [];
      this.historico = [];
  }

  push(elemento) {
      this.vetor.push(elemento);
      this.historico.push({ operacao: 'push', elemento });
  }

  pop() {
      const elemento = this.vetor.pop();
      this.historico.push({ operacao: 'pop', elemento });
      return elemento;
  }

  undo() {
      if (this.historico.length === 0) return;

      const ultimaOperacao = this.historico.pop();

      if (ultimaOperacao.operacao === 'push') {
          this.vetor.pop();
      } else if (ultimaOperacao.operacao === 'pop') {
          this.vetor.push(ultimaOperacao.elemento);
      }
  }
}