import BinarySearchTree from './questao-06';

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

    test('deve serializar a árvore corretamente', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);

        const serialized = bst.serialize();
        expect(serialized).toBe('10,5,3,#,#,7,#,#,15,12,#,#,18,#,#');
    });

    test('deve desserializar a árvore corretamente', () => {
        const data = '10,5,3,#,#,7,#,#,15,12,#,#,18,#,#';
        bst.deserialize(data);

        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.left.left.value).toBe(3);
        expect(bst.root.left.right.value).toBe(7);
        expect(bst.root.right.value).toBe(15);
        expect(bst.root.right.left.value).toBe(12);
        expect(bst.root.right.right.value).toBe(18);
    });

    test('deve lidar com a serialização de árvore vazia', () => {
        const serialized = bst.serialize();
        expect(serialized).toBe('#');
    });

    test('deve lidar com a desserialização de árvore vazia', () => {
        const data = '#';
        bst.deserialize(data);

        expect(bst.root).toBeNull();
    });

    test('deve lidar com a serialização de árvore com um único nó', () => {
        bst.insert(42);
        const serialized = bst.serialize();
        expect(serialized).toBe('42,#,#');
    });

    test('deve lidar com a desserialização de árvore com um único nó', () => {
        const data = '42,#,#';
        bst.deserialize(data);

        expect(bst.root.value).toBe(42);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });

    test('deve lidar com a serialização de árvore complexa', () => {
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);

        const serialized = bst.serialize();
        expect(serialized).toBe('20,10,5,#,#,15,#,#,30,25,#,#,35,#,#');
    });

    test('deve lidar com a desserialização de árvore complexa', () => {
        const data = '20,10,5,#,#,15,#,#,30,25,#,#,35,#,#';
        bst.deserialize(data);

        expect(bst.root.value).toBe(20);
        expect(bst.root.left.value).toBe(10);
        expect(bst.root.left.left.value).toBe(5);
        expect(bst.root.left.right.value).toBe(15);
        expect(bst.root.right.value).toBe(30);
        expect(bst.root.right.left.value).toBe(25);
        expect(bst.root.right.right.value).toBe(35);
    });

    test('deve lidar com árvore com valores duplicados', () => {
        bst.insert(10);
        bst.insert(10);
        bst.insert(10);

        expect(bst.root.value).toBe(10);
        expect(bst.root.right.value).toBe(10);
        expect(bst.root.right.right.value).toBe(10);
    });
});
