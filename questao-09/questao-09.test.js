import FilaBancoPrioridade from './questao-09.js';

describe('FilaBancoPrioridade', () => {
    let filaBanco = {};

    beforeEach(() => {
        filaBanco = new FilaBancoPrioridade();
    });

    test('Teste para adicionarCliente', () => {
        filaBanco.adicionarCliente('Maria', 'idoso');
        expect(filaBanco.estaVazia()).toBe(false);
        filaBanco.adicionarCliente('João');
        filaBanco.adicionarCliente('Ana', 'gestante');
        expect(filaBanco.estaVazia()).toBe(false);
    });

    test('Teste para atenderCliente', () => {
        filaBanco.adicionarCliente('Maria', 'idoso');
        filaBanco.adicionarCliente('João');
        filaBanco.adicionarCliente('Ana', 'gestante');
        filaBanco.adicionarCliente('Thiago', 'pcd');
        filaBanco.adicionarCliente('Rita', 'gestante');
        filaBanco.adicionarCliente('Paulo', 'idoso');
        filaBanco.adicionarCliente('Manuela');
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
    });

    test('Teste para mostrarFila', () => {
        filaBanco.adicionarCliente('Maria', 'idoso');
        filaBanco.adicionarCliente('João');
        filaBanco.adicionarCliente('Ana', 'gestante');
        filaBanco.mostrarFila();
    });
});