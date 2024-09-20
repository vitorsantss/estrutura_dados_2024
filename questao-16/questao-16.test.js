import ListaEncadeada from './questao-16';

describe('ListaEncadeada', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaEncadeada();
    });

    test('deve inserir elementos corretamente', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.inserir(3);

        let atual = lista.inicio;
        expect(atual.valor).toBe(1);
        atual = atual.proximo;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(3);
    });

    test('deve rotacionar elementos para a direita corretamente', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.inserir(3);
        lista.inserir(4);

        lista.rotacionarDireita(1, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(4);
        atual = atual.proximo;
        expect(atual.valor).toBe(1);
        atual = atual.proximo;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(3);

        lista.rotacionarDireita(2, lista);

        atual = lista.inicio;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(3);
        atual = atual.proximo;
        expect(atual.valor).toBe(4);
        atual = atual.proximo;
        expect(atual.valor).toBe(1);
    });

    test('deve lidar com rotação com k maior que o comprimento da lista', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.inserir(3);

        lista.rotacionarDireita(4, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(3);
        atual = atual.proximo;
        expect(atual.valor).toBe(1);
        atual = atual.proximo;
        expect(atual.valor).toBe(2);
    });

    test('deve lidar com rotação com k igual ao comprimento da lista', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.inserir(3);

        lista.rotacionarDireita(3, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(1);
        atual = atual.proximo;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(3);
    });

    test('deve lidar com lista vazia', () => {
        lista.rotacionarDireita(1, lista);
        expect(lista.inicio).toBeNull();
    });

    test('deve lidar com rotação de lista com um único elemento', () => {
        lista.inserir(1);
        lista.rotacionarDireita(1, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(1);
        expect(atual.proximo).toBeNull();
    });

    test('deve lidar com rotação de lista com dois elementos', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.rotacionarDireita(1, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(1);
    });

    test('deve lidar com rotação de lista com k igual a zero', () => {
        lista.inserir(1);
        lista.inserir(2);
        lista.inserir(3);
        lista.rotacionarDireita(0, lista);

        let atual = lista.inicio;
        expect(atual.valor).toBe(1);
        atual = atual.proximo;
        expect(atual.valor).toBe(2);
        atual = atual.proximo;
        expect(atual.valor).toBe(3);
    });
});