import BinarySearchTree from './questao-03';

describe('BinarySearchTree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('deve inserir valores corretamente', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);

        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);
        expect(bst.root.left.left.value).toBe(3);
        expect(bst.root.left.right.value).toBe(7);
        expect(bst.root.right.left.value).toBe(12);
        expect(bst.root.right.right.value).toBe(18);
    });

    test('deve encontrar o valor mínimo', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);

        expect(bst.min()).toBe(3);
    });

    test('deve encontrar o valor máximo', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);

        expect(bst.max()).toBe(18);
    });

    test('deve retornar null para min e max em uma árvore vazia', () => {
        expect(bst.min()).toBeNull();
        expect(bst.max()).toBeNull();
    });

    test('deve lidar com a inserção de valores duplicados', () => {
        bst.insert(10);
        bst.insert(10);
        bst.insert(5);
        bst.insert(5);

        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.left.left).toBeNull(); // Verifica se não há duplicatas
    });

    test('deve encontrar o valor mínimo em uma árvore com um único nó', () => {
        bst.insert(10);

        expect(bst.min()).toBe(10);
    });

    test('deve encontrar o valor máximo em uma árvore com um único nó', () => {
        bst.insert(10);

        expect(bst.max()).toBe(10);
    });

    test('deve inserir valores corretamente em uma árvore com valores negativos', () => {
        bst.insert(0);
        bst.insert(-10);
        bst.insert(10);
        bst.insert(-20);
        bst.insert(-5);
        bst.insert(5);
        bst.insert(20);

        expect(bst.root.value).toBe(0);
        expect(bst.root.left.value).toBe(-10);
        expect(bst.root.right.value).toBe(10);
        expect(bst.root.left.left.value).toBe(-20);
        expect(bst.root.left.right.value).toBe(-5);
        expect(bst.root.right.left.value).toBe(5);
        expect(bst.root.right.right.value).toBe(20);
    });

    test('deve encontrar o valor mínimo em uma árvore com valores negativos', () => {
        bst.insert(0);
        bst.insert(-10);
        bst.insert(10);
        bst.insert(-20);
        bst.insert(-5);
        bst.insert(5);
        bst.insert(20);

        expect(bst.min()).toBe(-20);
    });

    test('deve encontrar o valor máximo em uma árvore com valores negativos', () => {
        bst.insert(0);
        bst.insert(-10);
        bst.insert(10);
        bst.insert(-20);
        bst.insert(-5);
        bst.insert(5);
        bst.insert(20);

        expect(bst.max()).toBe(20);
    });
});