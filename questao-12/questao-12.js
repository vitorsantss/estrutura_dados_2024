class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
export default class ListaEncadeada {
    constructor() {
      this.inicio = null;
    }
  
    inserir(valor) {
      const novoNo = new No(valor);
      if (this.inicio === null) {
        this.inicio = novoNo;
      } else {
        let atual = this.inicio;
        while (atual.proximo !== null) {
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
    }
    
    imprimir() {
      let atual = this.inicio;
      while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }
  
  
    removeTodosDuplicados() {
      let atual = this.inicio;
      let prev = null;
  
      while (atual !== null) {
        let comparador = atual;
  
        while (comparador.proximo !== null) {
          if (comparador.proximo.valor === atual.valor) {
            comparador.proximo = comparador.proximo.proximo;
          } else {
            comparador = comparador.proximo;
          }
        }
        prev = atual;
        atual = atual.proximo;
      }
    }
  
   
  }