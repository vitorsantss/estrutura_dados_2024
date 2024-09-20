import BinarySearchTree from './questao-01';

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('deve inserir nós corretamente', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('deve calcular a altura corretamente', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.height(bst.root)).toBe(2);
    expect(bst.height(bst.root.left)).toBe(1);
    expect(bst.height(bst.root.right)).toBe(0);
  });

  test('deve calcular o fator de balanceamento corretamente', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.getBalanceFactor(bst.root)).toBe(1);
    expect(bst.getBalanceFactor(bst.root.left)).toBe(0);
    expect(bst.getBalanceFactor(bst.root.right)).toBe(0);
  });

  test('deve rotacionar para a esquerda corretamente', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(12);
    bst.insert(18);

    const newRoot = bst.rotateLeft(bst.root);

    expect(newRoot.value).toBe(15);
    expect(newRoot.left.value).toBe(10);
    expect(newRoot.left.right.value).toBe(12);
    expect(newRoot.right.value).toBe(18);
  });
});