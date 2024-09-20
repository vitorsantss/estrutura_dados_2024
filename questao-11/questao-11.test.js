import jest from 'jest-mock';
import QueueArray from './questao-11';

describe('Testando QueueArray', () => {
    let fila;
  
    beforeEach(() => {
      fila = new QueueArray();
    });
  
    test('Deve adicionar um elemento com enqueue', () => {
      fila.enqueue(1);
      fila.enqueue(2);
  
      expect(fila.size()).toBe(2);
      expect(fila.items).toEqual([1, 2]);
    });
  
    test('Deve retornar o tamanho correto com size', () => {
      fila.enqueue(1);
      fila.enqueue(2);
  
      expect(fila.size()).toBe(2);
    });
  
    test('Deve compactar intervalos corretamente', () => {
      fila.enqueue(1);
      fila.enqueue(2);
      fila.enqueue(3);
      fila.enqueue(5);
      fila.enqueue(6);
      fila.enqueue(8);
  
      fila.compactarIntervalos();
  
      expect(fila.aux).toEqual(['(1-3)', '(5-6)', '(8)']);
    });
  
    test('Deve imprimir os elementos da fila', () => {
      fila.enqueue(1);
      fila.enqueue(2);
  
      console.log = jest.fn();
      fila.printQueue();
  
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
    });
  });