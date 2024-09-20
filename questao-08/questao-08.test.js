import Pilha from './questao-08';

describe('Pilha', () => {
    let pilha;

    beforeEach(() => {
        pilha = new Pilha();
    });

    test('deve empilhar elementos na pilha', () => {
        pilha.push(1);
        pilha.push(2);
        expect(pilha.vetor).toEqual([1, 2]);
    });

    test('deve desempilhar elementos da pilha', () => {
        pilha.push(1);
        pilha.push(2);
        const elementoDesempilhado = pilha.pop();
        expect(elementoDesempilhado).toBe(2);
        expect(pilha.vetor).toEqual([1]);
    });

    test('deve desfazer a última operação de empilhar', () => {
        pilha.push(1);
        pilha.push(2);
        pilha.undo();
        expect(pilha.vetor).toEqual([1]);
    });

    test('deve desfazer a última operação de desempilhar', () => {
        pilha.push(1);
        pilha.push(2);
        pilha.pop();
        pilha.undo();
        expect(pilha.vetor).toEqual([1, 2]);
    });

    test('não deve fazer nada se desfazer for chamado sem histórico', () => {
        pilha.undo();
        expect(pilha.vetor).toEqual([]);
    });
});