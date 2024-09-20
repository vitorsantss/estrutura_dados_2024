export default class Pilha {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    if (this.itens.length === 0) {
      return null;
    }
    return this.itens.pop();
  }

  peek() {
    if (this.itens.length === 0) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }


  isBalanceado(sequencia) {
    const pilha = new Pilha();
    const pares = {
      ')': '(',
      ']': '[',
      '}': '{',
    };

    for (let i = 0; i < sequencia.length; i++) {
      const caractere = sequencia[i];

      if (caractere === '(' || caractere === '[' || caractere === '{') {
        pilha.push(caractere);
      } else if (caractere === ')' || caractere === ']' || caractere === '}') {
        const topo = pilha.pop();
        if (topo !== pares[caractere]) {
          return false;
        }
      }
    }

    return pilha.isEmpty();
  }
}
