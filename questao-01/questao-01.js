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

  getBalanceFactor(node) {
    return node === null ? 0 : this.height(node.left) - this.height(node.right);
  }

  height(node) {
    return node === null
      ? -1
      : Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  rotateLeft(node) {
    let newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    return newRoot;
  }

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    }

    return node;
  }
}

// Exemplo de uso
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.root); // Deve imprimir a estrutura da árvore binária de busca