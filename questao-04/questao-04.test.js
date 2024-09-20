import BinarySearchTree from './questao-04';

describe('BinarySearchTree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    test('deve inserir valores corretamente', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);
    });

    test('deve encontrar o sucessor correto', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        expect(bst.findSuccessor(10).value).toBe(15);
        expect(bst.findSuccessor(15).value).toBe(20);
        expect(bst.findSuccessor(20).value).toBe(25);
        expect(bst.findSuccessor(25).value).toBe(30);
        expect(bst.findSuccessor(30).value).toBe(35);
        expect(bst.findSuccessor(35)).toBe(null);
    });

    test('deve encontrar o predecessor correto', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        expect(bst.findPredecessor(10).value).toBe(5);
        expect(bst.findPredecessor(15).value).toBe(10);
        expect(bst.findPredecessor(20).value).toBe(15);
        expect(bst.findPredecessor(25).value).toBe(20);
        expect(bst.findPredecessor(30).value).toBe(25);
        expect(bst.findPredecessor(35).value).toBe(30);
        expect(bst.findPredecessor(5)).toBe(null);
    });

    test('deve encontrar o nó correto', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        expect(bst.findNode(10).value).toBe(10);
        expect(bst.findNode(5).value).toBe(5);
        expect(bst.findNode(15).value).toBe(15);
        expect(bst.findNode(20)).toBe(null);
    });

    test('deve encontrar o valor mínimo na árvore', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(2);
        bst.insert(7);

        expect(bst.findMin(bst.root).value).toBe(2);
    });

    test('deve encontrar o valor máximo na árvore', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(12);
        bst.insert(20);

        expect(bst.findMax(bst.root).value).toBe(20);
    });

    // Teste para verificar se a árvore está vazia
    test('deve retornar null para sucessor e predecessor se a árvore estiver vazia', () => {
        expect(bst.findSuccessor(10)).toBe(null);
        expect(bst.findPredecessor(10)).toBe(null);
    });


    // Teste para verificar a inserção de valores negativos
    test('deve inserir valores negativos corretamente', () => {
        bst.insert(0);
        bst.insert(-10);
        bst.insert(10);

        expect(bst.root.value).toBe(0);
        expect(bst.root.left.value).toBe(-10);
        expect(bst.root.right.value).toBe(10);
    });

    // Teste para verificar a inserção de valores em ordem decrescente
    test('deve inserir valores em ordem decrescente corretamente', () => {
        bst.insert(30);
        bst.insert(20);
        bst.insert(10);

        expect(bst.root.value).toBe(30);
        expect(bst.root.left.value).toBe(20);
        expect(bst.root.left.left.value).toBe(10);
    });

    // Teste para verificar a inserção de valores em ordem crescente
    test('deve inserir valores em ordem crescente corretamente', () => {
        bst.insert(10);
        bst.insert(20);
        bst.insert(30);

        expect(bst.root.value).toBe(10);
        expect(bst.root.right.value).toBe(20);
        expect(bst.root.right.right.value).toBe(30);
    });
});