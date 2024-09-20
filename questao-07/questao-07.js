class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      while (true) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            break;
          } else {
            node = node.left;
          }
        } else {
          if (node.right === null) {
            node.right = new Node(value);
            break;
          } else {
            node = node.right;
          }
        }
      }
    }
  }

  isAVL(node = this.root) {
    if (node === null) {
      return true;
    }

    const balanceFactor = this.height(node.left) - this.height(node.right);

    // Verifica se o fator de balanceamento está fora do intervalo [-1, 1]
    if (Math.abs(balanceFactor) > 1) {
      return false;
    }
    return this.isAVL(node.left) && this.isAVL(node.right);
  }

  //calcular a altura de um nó
  height(node) {
    if (node === null) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
}
