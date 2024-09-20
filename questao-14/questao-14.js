class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
export default class ListEncadeada {
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
  
    combineImparPar(){
      const aux = new ListEncadeada();
      let list = this.inicio;
      let list2 = this.inicio;
      while(true){
        if(this.inicio != null){
          if(list.valor % 2 != 0){
            aux.inserir(list.valor);
          }
          if(list.proximo != null){
            list = list.proximo;
          }else{
            while(true){
              if(list2.valor % 2 == 0){
                aux.inserir(list2.valor);
              }if(list2.proximo != null){
                list2 = list2.proximo;
              }else{
                break;
              }
            }
            break;
          }
        }
      }
      return aux.imprimir();
    }
  
  }