import Pilha from './questao-13';

describe('Testando Pilha', () => {
    let pilha;
  
    beforeEach(() => {
      pilha = new Pilha();
    });
  
    test('Deve adicionar um elemento com push', () => {
      pilha.push(1);
      pilha.push(2);
  
      expect(pilha.itens).toEqual([1, 2]);
    });
  
    test('Deve remover e retornar o último elemento com pop', () => {
      pilha.push(1);
      pilha.push(2);
  
      const removido = pilha.pop();
      expect(removido).toBe(2);
      expect(pilha.itens).toEqual([1]);
    });
  
    test('Deve retornar null no pop se a pilha estiver vazia', () => {
      const removido = pilha.pop();
      expect(removido).toBeNull();
    });
  
    test('Deve retornar o último elemento com peek sem removê-lo', () => {
      pilha.push(1);
      pilha.push(2);
  
      const topo = pilha.peek();
      expect(topo).toBe(2);
      expect(pilha.itens).toEqual([1, 2]);
    });
  
    test('Deve retornar null no peek se a pilha estiver vazia', () => {
      const topo = pilha.peek();
      expect(topo).toBeNull();
    });
  
    test('Deve verificar se a pilha está vazia com isEmpty', () => {
      expect(pilha.isEmpty()).toBe(true);
  
      pilha.push(1);
      expect(pilha.isEmpty()).toBe(false);
    });
  });
  
  describe('Testando isBalanceado como método de instância da Pilha', () => {
    let pilha;
  
    beforeEach(() => {
      pilha = new Pilha();
    });
  
    test('Deve retornar true para uma sequência balanceada', () => {
      expect(pilha.isBalanceado('()')).toBe(true);
      expect(pilha.isBalanceado('([])')).toBe(true);
      expect(pilha.isBalanceado('{[()]}')).toBe(true);
      expect(pilha.isBalanceado('')).toBe(true); // Caso de string vazia
    });
  
    test('Deve retornar false para uma sequência não balanceada', () => {
      expect(pilha.isBalanceado('(')).toBe(false);
      expect(pilha.isBalanceado('([)]')).toBe(false);
      expect(pilha.isBalanceado('{[()]}]')).toBe(false);
      expect(pilha.isBalanceado('(()')).toBe(false);
    });
  });