import Pilha from './questao-15';

describe('Pilha', () => {
  let pilha;

  beforeEach(() => {
    pilha = new Pilha();
  });

  test('deve empilhar elementos na pilha', () => {
    pilha.push(1);
    pilha.push(2);
    expect(pilha.items).toEqual([1, 2]);
  });

  test('deve desempilhar elementos da pilha', () => {
    pilha.push(1);
    pilha.push(2);
    expect(pilha.pop()).toBe(2);
    expect(pilha.pop()).toBe(1);
    expect(pilha.isEmpty()).toBe(true);
  });

  test('deve verificar se a pilha está vazia', () => {
    expect(pilha.isEmpty()).toBe(true);
    pilha.push(1);
    expect(pilha.isEmpty()).toBe(false);
  });

  test('deve retornar o elemento do topo da pilha', () => {
    pilha.push(1);
    pilha.push(2);
    expect(pilha.peek()).toBe(2);
    pilha.pop();
    expect(pilha.peek()).toBe(1);
  });

  test('deve converter decimal para binário', () => {
    expect(pilha.decimalParaBinario(10)).toBe('1010');
    expect(pilha.decimalParaBinario(0)).toBe('');
    expect(pilha.decimalParaBinario(1)).toBe('1');
    expect(pilha.decimalParaBinario(2)).toBe('10');
    expect(pilha.decimalParaBinario(255)).toBe('11111111');
  });

  // Teste adicional: deve empilhar e desempilhar corretamente com múltiplos elementos
  test('deve empilhar e desempilhar corretamente com múltiplos elementos', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.pop()).toBe(3);
    expect(pilha.pop()).toBe(2);
    expect(pilha.pop()).toBe(1);
    expect(pilha.isEmpty()).toBe(true);
  });

  // Teste adicional: deve retornar undefined ao desempilhar de uma pilha vazia
  test('deve retornar undefined ao desempilhar de uma pilha vazia', () => {
    expect(pilha.pop()).toBeUndefined();
  });

  // Teste adicional: deve retornar undefined ao verificar o topo de uma pilha vazia
  test('deve retornar undefined ao verificar o topo de uma pilha vazia', () => {
    expect(pilha.peek()).toBeUndefined();
  });

  // Teste adicional: deve converter números grandes corretamente para binário
  test('deve converter números grandes corretamente para binário', () => {
    expect(pilha.decimalParaBinario(1023)).toBe('1111111111');
    expect(pilha.decimalParaBinario(1024)).toBe('10000000000');
  });

  // Teste adicional: deve lidar corretamente com números negativos na conversão para binário
  test('deve lidar corretamente com números negativos na conversão para binário', () => {
    expect(pilha.decimalParaBinario(-1)).toBe('');
    expect(pilha.decimalParaBinario(-10)).toBe('');
  });
});