import jest from 'jest-mock';
import ListaEncadeada from './questao-12';

describe('Testando ListaEncadeada', () => {
    let lista;
  
    beforeEach(() => {
      lista = new ListaEncadeada();
    });
  
    test('Deve inserir elementos na lista encadeada', () => {
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
  
    test('Deve imprimir os elementos da lista encadeada', () => {
      lista.inserir(1);
      lista.inserir(2);
      lista.inserir(3);
  
      console.log = jest.fn();
      lista.imprimir();
  
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
      expect(console.log).toHaveBeenCalledWith(3);
    });
  
    test('Deve remover todos os elementos duplicados', () => {
      lista.inserir(1);
      lista.inserir(2);
      lista.inserir(2);
      lista.inserir(3);
      lista.inserir(3);
      lista.inserir(3);
      
      lista.removeTodosDuplicados();
  
      const valores = [];
      let atual = lista.inicio;
      while (atual !== null) {
        valores.push(atual.valor);
        atual = atual.proximo;
      }
  
      expect(valores).toEqual([1, 2, 3]);
    });
  });