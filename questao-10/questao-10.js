class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  export default class listEncadeada {
    constructor() {
      this.inicio = null;
      this.final = null;
    }
  
    inserir(valor) {
      const novoNo = new No(valor);
      if (this.final === null) {
        this.inicio = novoNo;
        this.final = novoNo;
      } else {
        this.final.proximo = novoNo;
        this.final = novoNo;
      }
    }
  
    intercalarNosListas(otherList) {
      const aux = new listEncadeada();
      let atual = this.inicio;
      let atualOther = otherList.inicio;
  
      while (atual !== null || atualOther !== null) {
        if (atualOther !== null) {
          aux.inserir(atualOther.valor);
          atualOther = atualOther.proximo;
        }
        if (atual !== null) {
          aux.inserir(atual.valor);
          atual = atual.proximo;
        }
      }
  
      return aux;
    }
  
    imprimir() {
      let atual = this.inicio;
      while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }
  }