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

    getDepth(value) {
        let node = this.root;
        let depth = 0;

        while (node !== null) {
            if (value === node.value) {
                return depth; // retorna a profundidade
            }
            
            if (value < node.value) {
                node = node.left;  
            } else {
                node = node.right; 
            }
            
            depth++;
        }

        return -1; // retorna -1 se o valor nao for encontrado na arvore
    }
}