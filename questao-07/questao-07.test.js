import BinarySearchTree from './questao-07';

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

    test('deve retornar verdadeiro para uma árvore vazia sendo AVL', () => {
        expect(bst.isAVL()).toBe(true);
    });

    test('deve retornar verdadeiro para uma árvore com um único nó sendo AVL', () => {
        bst.insert(10);
        expect(bst.isAVL()).toBe(true);
    });

    test('deve retornar verdadeiro para uma árvore balanceada sendo AVL', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.isAVL()).toBe(true);
    });

    test('deve retornar falso para uma árvore desbalanceada sendo AVL', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(20);
        bst.insert(25); // Isso deve tornar a árvore desbalanceada
        expect(bst.isAVL()).toBe(false);
    });

    test('deve calcular a altura corretamente', () => {
        expect(bst.height(bst.root)).toBe(-1); // Árvore vazia

        bst.insert(10);
        expect(bst.height(bst.root)).toBe(0); // Árvore com um único nó

        bst.insert(5);
        bst.insert(15);
        expect(bst.height(bst.root)).toBe(1); // Árvore balanceada com 3 nós

        bst.insert(20);
        expect(bst.height(bst.root)).toBe(2); // Árvore desbalanceada com 4 nós
    });
});