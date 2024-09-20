import BinarySearchTree from './questao-05';

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

    test('deve retornar a profundidade correta para valores existentes', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);

        expect(bst.getDepth(10)).toBe(0);
        expect(bst.getDepth(5)).toBe(1);
        expect(bst.getDepth(15)).toBe(1);
        expect(bst.getDepth(3)).toBe(2);
        expect(bst.getDepth(7)).toBe(2);
        expect(bst.getDepth(12)).toBe(2);
        expect(bst.getDepth(18)).toBe(2);
    });

    test('deve retornar -1 para valores não existentes', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        expect(bst.getDepth(20)).toBe(-1);
        expect(bst.getDepth(0)).toBe(-1);
    });

    test('deve lidar com árvore vazia', () => {
        expect(bst.getDepth(10)).toBe(-1);
    });

    // Novo teste: deve inserir valores duplicados corretamente
    test('deve inserir valores duplicados corretamente', () => {
        bst.insert(10);
        bst.insert(10);

        expect(bst.root.value).toBe(10);
        expect(bst.root.right.value).toBe(10);
    });

    // Novo teste: deve retornar a profundidade correta após várias inserções
    test('deve retornar a profundidade correta após várias inserções', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        bst.insert(1);
        bst.insert(4);

        expect(bst.getDepth(1)).toBe(3);
        expect(bst.getDepth(4)).toBe(3);
    });

    // Novo teste: deve retornar -1 para valores não existentes em uma árvore grande
    test('deve retornar -1 para valores não existentes em uma árvore grande', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        bst.insert(1);
        bst.insert(4);

        expect(bst.getDepth(20)).toBe(-1);
        expect(bst.getDepth(0)).toBe(-1);
        expect(bst.getDepth(6)).toBe(-1);
    });

    // Novo teste: deve lidar com inserções em ordem decrescente
    test('deve lidar com inserções em ordem decrescente', () => {
        bst.insert(10);
        bst.insert(9);
        bst.insert(8);
        bst.insert(7);
        bst.insert(6);

        expect(bst.getDepth(10)).toBe(0);
        expect(bst.getDepth(9)).toBe(1);
        expect(bst.getDepth(8)).toBe(2);
        expect(bst.getDepth(7)).toBe(3);
        expect(bst.getDepth(6)).toBe(4);
    });

    // Novo teste: deve lidar com inserções em ordem crescente
    test('deve lidar com inserções em ordem crescente', () => {
        bst.insert(10);
        bst.insert(11);
        bst.insert(12);
        bst.insert(13);
        bst.insert(14);

        expect(bst.getDepth(10)).toBe(0);
        expect(bst.getDepth(11)).toBe(1);
        expect(bst.getDepth(12)).toBe(2);
        expect(bst.getDepth(13)).toBe(3);
        expect(bst.getDepth(14)).toBe(4);
    });
});