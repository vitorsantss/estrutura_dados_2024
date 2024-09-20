import BinarySearchTree from './questao-02';

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

    test('deve contar nós corretamente', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);

        expect(bst.contarNos()).toBe(5);
    });

    test('deve contar nós folha corretamente', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);

        expect(bst.contarFolhas()).toBe(3); // Folhas são 3, 7 e 15
    });

    test('deve retornar 0 ao contar nós em uma árvore vazia', () => {
        expect(bst.contarNos()).toBe(0);
    });

    test('deve retornar 0 ao contar folhas em uma árvore vazia', () => {
        expect(bst.contarFolhas()).toBe(0);
    });

    test('deve inserir nós corretamente em uma árvore com múltiplos níveis', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        expect(bst.root.value).toBe(20);
        expect(bst.root.left.value).toBe(10);
        expect(bst.root.right.value).toBe(30);
        expect(bst.root.left.left.value).toBe(5);
        expect(bst.root.left.right.value).toBe(15);
        expect(bst.root.right.left.value).toBe(25);
        expect(bst.root.right.right.value).toBe(35);
    });

    test('deve contar nós corretamente em uma árvore com múltiplos níveis', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        expect(bst.contarNos()).toBe(7);
    });

    test('deve contar folhas corretamente em uma árvore com múltiplos níveis', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        expect(bst.contarFolhas()).toBe(4); // Folhas são 5, 15, 25 e 35
    });
});