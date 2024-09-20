import { jest } from '@jest/globals';
import ListEncadeada from './questao-14';

describe('Testando ListEncadeada', () => {
    let lista;
  
    beforeEach(() => {
      lista = new ListEncadeada();
      jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('Deve inserir elementos corretamente', () => {
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
  
    test('Deve imprimir os valores corretamente', () => {
      lista.inserir(1);
      lista.inserir(2);
      lista.inserir(3);
  
      lista.imprimir();
  
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
      expect(console.log).toHaveBeenCalledWith(3);
    });
  
    test('Deve combinar números ímpares e pares corretamente', () => {
      lista.inserir(1);
      lista.inserir(2);
      lista.inserir(3);
      lista.inserir(4);
      lista.inserir(5);
  
      lista.combineImparPar();
  
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(3);
      expect(console.log).toHaveBeenCalledWith(5);
      expect(console.log).toHaveBeenCalledWith(2);
      expect(console.log).toHaveBeenCalledWith(4);
    });
  });