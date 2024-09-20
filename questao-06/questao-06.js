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
//usando recursividade
    serialize() {
        const serializeHelper = (node) => {
            if (node === null) {
                return '#'; // quando for nulo, adiciona #
            }
            return `${node.value},${serializeHelper(node.left)},${serializeHelper(node.right)}`;
        };
        return serializeHelper(this.root);
    }

  
    deserialize(data) {
        const deserializeHelper = (values) => {
            if (values.length === 0) {
                return null;
            }

            const value = values.shift();
            if (value === '#') {
                return null; // nos nulos sao marcados com # na string
            }

            const node = new Node(parseInt(value)); 
            node.left = deserializeHelper(values);  // reconstroi a subarvore esquerda
            node.right = deserializeHelper(values); // faz o mesmo do de cima so que apra a direita
            return node;
        };

        const values = data.split(','); 
        this.root = deserializeHelper(values); // Reconstroi a arvore
    }
}