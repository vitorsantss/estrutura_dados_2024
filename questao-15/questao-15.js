export default class Pilha {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      return this.items.pop();
  }

  isEmpty() {
      return this.items.length === 0;
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  decimalParaBinario(numero) {
    let pilha = new Pilha();
    let binario = '';
    while (numero > 0) {
        let resto = numero % 2; 
        pilha.push(resto);
        numero = Math.floor(numero / 2); 
    }
    while (!pilha.isEmpty()) {
        binario += pilha.pop();  
    }
    return binario;
  }
}

