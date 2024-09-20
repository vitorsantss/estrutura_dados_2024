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
  
    rotacionarDireita(k, aux){
      for(let x = 0; x < k; x++){
        this.rotacionarDireitaGambiarra(aux);
      }
    }
    
    rotacionarDireitaGambiarra(aux) {
      if (aux.inicio === null) {
        // Se a lista estiver vazia, não há necessidade de rotação
        return;
      }
    
      let final = aux.inicio;
      let paiFinal = aux.inicio;
    
      // Encontrar o último nó
      while (final.proximo !== null) {
        final = final.proximo;
      }
    
      // Se a lista tiver apenas um elemento, não há necessidade de rotação
      if (final === aux.inicio) {
        return;
      }
    
      // Encontrar o penúltimo nó
      while (paiFinal.proximo !== final) {
        paiFinal = paiFinal.proximo;
      }
    
      paiFinal.proximo = null;
      let inicio = aux.inicio;
      final.proximo = inicio;
      aux.inicio = final;
    }
  
  
    imprimir() {
      let atual = this.inicio;
      while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }  
  }