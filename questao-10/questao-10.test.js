import jest from 'jest-mock';
import listEncadeada from "./questao-10";

describe('Testando listEncadeada', () => {
    let lista;
  
    beforeEach(() => {
      lista = new listEncadeada();
    });
  
    test('Deve inserir um valor corretamente', () => {
      lista.inserir(1);
      lista.inserir(2);
      
      expect(lista.inicio.valor).toBe(1);
      expect(lista.final.valor).toBe(2);
    });
  
    test('Deve intercalar duas listas corretamente', () => {
      const lista1 = new listEncadeada();
      lista1.inserir(1);
      lista1.inserir(3);
      
      const lista2 = new listEncadeada();
      lista2.inserir(2);
      lista2.inserir(4);
      
      const listaIntercalada = lista1.intercalarNosListas(lista2);
  
      const valores = [];
      let atual = listaIntercalada.inicio;
      while (atual !== null) {
        valores.push(atual.valor);
        atual = atual.proximo;
      }
  
      expect(valores).toEqual([2, 1, 4, 3]);
    });
  
    test('Deve imprimir os valores da lista', () => {
      lista.inserir(1);
      lista.inserir(2);
      
      console.log = jest.fn();
      lista.imprimir();
      
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
    });
  });