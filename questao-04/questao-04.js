class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        } else {
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    } else {
                        node = node.left;
                    }
                } else {
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    } else {
                        node = node.right;
                    }
                }
            }
        }
    }

    // Função para encontrar o sucessor de um valor na árvore
    findSuccessor(value) {
        let node = this.findNode(value);
        if (!node) return null;

        // Caso 1: Se o nó tem filho à direita, encontre o menor valor na subárvore direita
        if (node.right !== null) {
            return this.findMin(node.right);
        }

        // Caso 2: Caso contrário, suba até encontrar um nó que seja filho esquerdo de seu pai
        let successor = null;
        let ancestor = this.root;
        while (ancestor !== node) {
            if (node.value < ancestor.value) {
                successor = ancestor;
                ancestor = ancestor.left;
            } else {
                ancestor = ancestor.right;
            }
        }
        return successor;
    }

    // Função para encontrar o predecessor de um valor na árvore
    findPredecessor(value) {
        let node = this.findNode(value);
        if (!node) return null;

        // Caso 1: Se o nó tem filho à esquerda, encontre o maior valor na subárvore esquerda
        if (node.left !== null) {
            return this.findMax(node.left);
        }

        // Caso 2: Caso contrário, suba até encontrar um nó que seja filho direito de seu pai
        let predecessor = null;
        let ancestor = this.root;
        while (ancestor !== node) {
            if (node.value > ancestor.value) {
                predecessor = ancestor;
                ancestor = ancestor.right;
            } else {
                ancestor = ancestor.left;
            }
        }
        return predecessor;
    }

    // funçao para encontrar um no com um dado valor
    findNode(value) {
        let node = this.root;
        while (node !== null) {
            if (value < node.value) {
                node = node.left;
            } else if (value > node.value) {
                node = node.right;
            } else {
                return node;  // encontrou o no
            }
        }
        return null;  // nao encontrou o no
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
}